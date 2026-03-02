-- Fix orphaned rows in Services version tables so Payload can add the FK constraint.
-- Run this against your Postgres database, then restart `pnpm dev` (or run migrate again).
--
-- Error was: Key (_parent_id)=(2382) is not present in table "_services_v_blocks_services_provided_items"

-- Delete features rows whose parent no longer exists in services_provided_items
DELETE FROM "_services_v_blocks_services_provided_items_features"
WHERE "_parent_id" NOT IN (
  SELECT "id" FROM "_services_v_blocks_services_provided_items"
);

-- Optional: show how many were deleted (run after the DELETE to confirm)
-- SELECT COUNT(*) FROM "_services_v_blocks_services_provided_items_features"
-- WHERE "_parent_id" NOT IN (SELECT "id" FROM "_services_v_blocks_services_provided_items");
