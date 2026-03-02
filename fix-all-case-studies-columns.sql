-- Add missing section_label and section_title columns to ALL case studies block tables
-- This fixes both regular tables (case_studies_blocks_*) and version tables (_case_studies_v_blocks_*)
-- Run this in your psql terminal

-- Regular tables (non-version)
ALTER TABLE "case_studies_blocks_technologies" ADD COLUMN IF NOT EXISTS "section_label" varchar;
ALTER TABLE "case_studies_blocks_technologies" ADD COLUMN IF NOT EXISTS "section_title" varchar;
ALTER TABLE "case_studies_blocks_gallery" ADD COLUMN IF NOT EXISTS "section_label" varchar;
ALTER TABLE "case_studies_blocks_gallery" ADD COLUMN IF NOT EXISTS "section_title" varchar;
ALTER TABLE "case_studies_blocks_challenge" ADD COLUMN IF NOT EXISTS "section_label" varchar;
ALTER TABLE "case_studies_blocks_solution" ADD COLUMN IF NOT EXISTS "section_label" varchar;
ALTER TABLE "case_studies_blocks_results" ADD COLUMN IF NOT EXISTS "section_label" varchar;
ALTER TABLE "case_studies_blocks_testimonial" ADD COLUMN IF NOT EXISTS "section_title" varchar;

-- Version tables (with _v prefix)
ALTER TABLE "_case_studies_v_blocks_technologies" ADD COLUMN IF NOT EXISTS "section_label" varchar;
ALTER TABLE "_case_studies_v_blocks_technologies" ADD COLUMN IF NOT EXISTS "section_title" varchar;
ALTER TABLE "_case_studies_v_blocks_gallery" ADD COLUMN IF NOT EXISTS "section_label" varchar;
ALTER TABLE "_case_studies_v_blocks_gallery" ADD COLUMN IF NOT EXISTS "section_title" varchar;
ALTER TABLE "_case_studies_v_blocks_challenge" ADD COLUMN IF NOT EXISTS "section_label" varchar;
ALTER TABLE "_case_studies_v_blocks_solution" ADD COLUMN IF NOT EXISTS "section_label" varchar;
ALTER TABLE "_case_studies_v_blocks_results" ADD COLUMN IF NOT EXISTS "section_label" varchar;
ALTER TABLE "_case_studies_v_blocks_testimonial" ADD COLUMN IF NOT EXISTS "section_title" varchar;
