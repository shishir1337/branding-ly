-- Fix: Convert case_studies version table version_client from text to jsonb.
-- Run once: pnpm run fix:case-studies-client-jsonb
-- Error was: column "version_client" cannot be cast automatically to type jsonb (hint: USING version_client::jsonb)
-- Existing data was plain text; we convert plain text to Lexical JSON and valid JSON to jsonb.

-- Step 1: Alter column with USING to convert text → jsonb (plain text becomes Lexical object)
ALTER TABLE "_case_studies_v"
  ALTER COLUMN "version_client" SET DATA TYPE jsonb USING (
    CASE
      WHEN "version_client" IS NULL THEN NULL
      WHEN "version_client"::text ~ '^\s*\{' THEN "version_client"::jsonb
      ELSE jsonb_build_object(
        'root', jsonb_build_object(
          'type', 'root',
          'children', jsonb_build_array(
            jsonb_build_object(
              'type', 'paragraph',
              'children', jsonb_build_array(
                jsonb_build_object('type', 'text', 'text', "version_client"::text, 'version', 1)
              ),
              'version', 1,
              'format', '',
              'indent', 0,
              'direction', null
            )
          ),
          'direction', 'ltr',
          'format', '',
          'indent', 0,
          'version', 1
        )
      )
    END
  );
