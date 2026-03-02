-- Fix table ownership for Payload CMS tables
-- Run this as a database superuser/admin to grant ownership to brandinglyuser
-- Usage: psql $DATABASE_URI -f fix-table-ownership.sql

-- Grant ownership of all Payload tables to brandinglyuser
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN 
        SELECT tablename 
        FROM pg_tables 
        WHERE schemaname = 'public' 
        AND (tablename LIKE '_%' OR tablename LIKE 'payload_%')
    LOOP
        EXECUTE format('ALTER TABLE %I OWNER TO brandinglyuser', r.tablename);
        RAISE NOTICE 'Changed ownership of table % to brandinglyuser', r.tablename;
    END LOOP;
END $$;

-- Specifically fix the problematic table
ALTER TABLE "_pages_v_blocks_cta" OWNER TO brandinglyuser;

-- Grant necessary privileges
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO brandinglyuser;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO brandinglyuser;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO brandinglyuser;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO brandinglyuser;
