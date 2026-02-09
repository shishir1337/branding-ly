-- Fix text/varchar -> jsonb for Payload richText fields
-- 1) _services_v.version_description  2) services.description
-- Run once: pnpm run fix:migration  OR  psql $DATABASE_URI -f fix-migration.sql

DO $$
DECLARE
  col_type text;
BEGIN
  SELECT data_type INTO col_type
  FROM information_schema.columns
  WHERE table_schema = 'public' AND table_name = '_services_v' AND column_name = 'version_description';

  IF col_type = 'jsonb' THEN
    RAISE NOTICE 'version_description is already jsonb, nothing to do.';
    RETURN;
  END IF;

  -- text and character varying (varchar) both need conversion
  IF col_type IN ('text', 'character varying') THEN
    -- Step 1: Add temporary JSONB column
    ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_description_new" jsonb;

    -- Step 2: Convert text to Lexical JSONB
    UPDATE "_services_v"
      SET "version_description_new" = CASE
        WHEN "version_description" IS NULL OR trim("version_description"::text) = '' THEN NULL
        ELSE jsonb_build_object(
          'root', jsonb_build_object(
            'type', 'root',
            'children', jsonb_build_array(
              jsonb_build_object(
                'type', 'paragraph',
                'children', jsonb_build_array(
                  jsonb_build_object(
                    'type', 'text',
                    'text', "version_description"::text,
                    'format', 0,
                    'style', '',
                    'mode', 'normal',
                    'detail', 0
                  )
                ),
                'format', '',
                'indent', 0,
                'direction', 'ltr',
                'version', 1
              )
            ),
            'direction', 'ltr',
            'format', '',
            'indent', 0,
            'version', 1
          )
        )
      END;

    -- Step 3: Drop old column
    ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "version_description";

    -- Step 4: Rename new column (only if it exists)
    IF EXISTS (
      SELECT 1 FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = '_services_v' AND column_name = 'version_description_new'
    ) THEN
      ALTER TABLE "_services_v" RENAME COLUMN "version_description_new" TO "version_description";
    END IF;

    RAISE NOTICE 'Migration completed: version_description is now jsonb.';
  ELSIF col_type IS NULL AND EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = '_services_v' AND column_name = 'version_description_new'
  ) THEN
    -- Partial run: old column dropped, temp column still there
    ALTER TABLE "_services_v" RENAME COLUMN "version_description_new" TO "version_description";
    RAISE NOTICE 'Migration completed (partial recovery): version_description is now jsonb.';
  END IF;
END $$;

-- 2) services.description (main table, not versions)
DO $$
DECLARE
  col_type text;
BEGIN
  SELECT data_type INTO col_type
  FROM information_schema.columns
  WHERE table_schema = 'public' AND table_name = 'services' AND column_name = 'description';

  IF col_type = 'jsonb' THEN
    RAISE NOTICE 'services.description is already jsonb, nothing to do.';
    RETURN;
  END IF;

  IF col_type IN ('text', 'character varying') THEN
    ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "description_new" jsonb;

    UPDATE "services"
    SET "description_new" = CASE
      WHEN "description" IS NULL OR trim("description"::text) = '' THEN NULL
      ELSE jsonb_build_object(
        'root', jsonb_build_object(
          'type', 'root',
          'children', jsonb_build_array(
            jsonb_build_object(
              'type', 'paragraph',
              'children', jsonb_build_array(
                jsonb_build_object(
                  'type', 'text',
                  'text', "description"::text,
                  'format', 0,
                  'style', '',
                  'mode', 'normal',
                  'detail', 0
                )
              ),
              'format', '',
              'indent', 0,
              'direction', 'ltr',
              'version', 1
            )
          ),
          'direction', 'ltr',
          'format', '',
          'indent', 0,
          'version', 1
        )
      )
    END;

    ALTER TABLE "services" DROP COLUMN IF EXISTS "description";

    IF EXISTS (
      SELECT 1 FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = 'services' AND column_name = 'description_new'
    ) THEN
      ALTER TABLE "services" RENAME COLUMN "description_new" TO "description";
    END IF;

    RAISE NOTICE 'Migration completed: services.description is now jsonb.';
  ELSIF col_type IS NULL AND EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'services' AND column_name = 'description_new'
  ) THEN
    ALTER TABLE "services" RENAME COLUMN "description_new" TO "description";
    RAISE NOTICE 'Migration completed (partial): services.description is now jsonb.';
  END IF;
END $$;
