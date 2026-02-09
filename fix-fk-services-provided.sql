-- Fix FK constraint failure for Services versioned block "services provided" features
-- Error: ADD CONSTRAINT "_services_v_blocks_services_provided_items_features_parent_id_fk" fails
-- Run once: pnpm run fix:fk  OR  psql $DATABASE_URI -f fix-fk-services-provided.sql

-- 1) Remove orphan rows: features whose _parent_id is not in parent table
DELETE FROM "_services_v_blocks_services_provided_items_features" f
WHERE f."_parent_id" IS NOT NULL
  AND NOT EXISTS (
    SELECT 1 FROM "_services_v_blocks_services_provided_items" p
    WHERE p."id" = f."_parent_id"
  );

-- 2) Drop the FK if it already exists (allows Payload/Drizzle to re-add it on next push)
ALTER TABLE "_services_v_blocks_services_provided_items_features"
  DROP CONSTRAINT IF EXISTS "_services_v_blocks_services_provided_items_features_parent_id_fk";
