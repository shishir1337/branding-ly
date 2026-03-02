#!/usr/bin/env node
/**
 * Converts _case_studies_v.version_client from text to jsonb so Payload schema push succeeds.
 * Run once: pnpm run fix:case-studies-client-jsonb
 */
import 'dotenv/config'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const sqlPath = path.join(__dirname, 'fix-case-studies-version-client-jsonb.sql')

const connectionString = process.env.DATABASE_URL || process.env.DATABASE_URI
if (!connectionString) {
  console.error('Missing DATABASE_URL or DATABASE_URI in .env')
  process.exit(1)
}

let pg
try {
  pg = await import('pg')
} catch (e) {
  console.error('Install pg to run this script: pnpm add -D pg')
  process.exit(1)
}

const sql = readFileSync(sqlPath, 'utf8')
const client = new pg.default.Client({ connectionString })

try {
  await client.connect()
  await client.query(sql)
  console.log('Case studies version_client → jsonb migration completed. Restart dev server.')
} catch (err) {
  console.error('Fix failed:', err.message)
  process.exit(1)
} finally {
  await client.end()
}
