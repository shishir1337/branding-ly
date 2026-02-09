# Fix `version_description` migration (text → jsonb)

After switching Services to blocks, Payload may fail to push the schema because PostgreSQL cannot auto-cast the `_services_v.version_description` column from `text` to `jsonb`.

## Option 1: Run the script (when DB is reachable)

```bash
# Ensure .env has DATABASE_URI (PostgreSQL connection string, usually port 5432)
pnpm run fix:migration
```

Then start the app:

```bash
pnpm dev
```

When the schema push runs, answer **yes** to accept the warnings (old tables/columns will be removed; new blocks tables will be created).

## Option 2: Run the SQL manually

If the script can’t connect (e.g. remote DB, VPN, or different env), run the SQL yourself:

1. Connect to your PostgreSQL database (e.g. psql, TablePlus, or your host’s SQL runner).
2. Execute the contents of **`fix-migration.sql`** in the project root.

Then run `pnpm dev` and accept the schema push when prompted.

## What the migration does

- Adds a temporary JSONB column.
- Converts existing text in `version_description` into Lexical JSONB (one paragraph node).
- Drops the old text column and renames the new one to `version_description`.

It is idempotent: safe to run more than once (it skips if the column is already jsonb).
