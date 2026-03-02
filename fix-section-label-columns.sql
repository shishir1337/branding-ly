-- Add missing section_label columns to case studies version tables
-- Run this as a database user with ALTER TABLE permissions
-- Usage: psql $DATABASE_URI -f fix-section-label-columns.sql

-- Add section_label to version tables for case studies blocks
DO $$
BEGIN
    -- Technologies block version table
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = '_case_studies_v_blocks_technologies' 
        AND column_name = 'section_label'
    ) THEN
        ALTER TABLE "_case_studies_v_blocks_technologies" 
        ADD COLUMN "section_label" varchar;
        RAISE NOTICE 'Added section_label column to _case_studies_v_blocks_technologies';
    ELSE
        RAISE NOTICE 'section_label column already exists in _case_studies_v_blocks_technologies';
    END IF;

    -- Gallery block version table
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = '_case_studies_v_blocks_gallery' 
        AND column_name = 'section_label'
    ) THEN
        ALTER TABLE "_case_studies_v_blocks_gallery" 
        ADD COLUMN "section_label" varchar;
        RAISE NOTICE 'Added section_label column to _case_studies_v_blocks_gallery';
    ELSE
        RAISE NOTICE 'section_label column already exists in _case_studies_v_blocks_gallery';
    END IF;

    -- Challenge block version table
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = '_case_studies_v_blocks_challenge' 
        AND column_name = 'section_label'
    ) THEN
        ALTER TABLE "_case_studies_v_blocks_challenge" 
        ADD COLUMN "section_label" varchar;
        RAISE NOTICE 'Added section_label column to _case_studies_v_blocks_challenge';
    ELSE
        RAISE NOTICE 'section_label column already exists in _case_studies_v_blocks_challenge';
    END IF;

    -- Solution block version table
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = '_case_studies_v_blocks_solution' 
        AND column_name = 'section_label'
    ) THEN
        ALTER TABLE "_case_studies_v_blocks_solution" 
        ADD COLUMN "section_label" varchar;
        RAISE NOTICE 'Added section_label column to _case_studies_v_blocks_solution';
    ELSE
        RAISE NOTICE 'section_label column already exists in _case_studies_v_blocks_solution';
    END IF;

    -- Results block version table
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = '_case_studies_v_blocks_results' 
        AND column_name = 'section_label'
    ) THEN
        ALTER TABLE "_case_studies_v_blocks_results" 
        ADD COLUMN "section_label" varchar;
        RAISE NOTICE 'Added section_label column to _case_studies_v_blocks_results';
    ELSE
        RAISE NOTICE 'section_label column already exists in _case_studies_v_blocks_results';
    END IF;

    -- Testimonial block version table - section_title
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = '_case_studies_v_blocks_testimonial' 
        AND column_name = 'section_title'
    ) THEN
        ALTER TABLE "_case_studies_v_blocks_testimonial" 
        ADD COLUMN "section_title" varchar;
        RAISE NOTICE 'Added section_title column to _case_studies_v_blocks_testimonial';
    ELSE
        RAISE NOTICE 'section_title column already exists in _case_studies_v_blocks_testimonial';
    END IF;
END $$;
