#!/usr/bin/env node
/**
 * Runs fix-migration.sql to convert _services_v.version_description from text to jsonb.
 * Requires: pnpm add -D pg dotenv  (dotenv already in deps)
 * Usage: pnpm run fix:migration
 */
import 'dotenv/config'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const sqlPath = path.join(__dirname, '..', 'fix-migration.sql')

const connectionString = process.env.DATABASE_URI
if (!connectionString) {
  console.error('Missing DATABASE_URI in .env')
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
  console.log('Migration completed. You can run pnpm dev again.')
} catch (err) {
  console.error('Migration failed:', err.message)
  process.exit(1)
} finally {
  await client.end()
}
