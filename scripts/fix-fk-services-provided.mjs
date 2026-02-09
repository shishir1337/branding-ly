#!/usr/bin/env node
/**
 * Runs fix-fk-services-provided.sql to fix FK constraint failure on
 * _services_v_blocks_services_provided_items_features.
 * Usage: pnpm run fix:fk
 */
import 'dotenv/config'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const sqlPath = path.join(__dirname, '..', 'fix-fk-services-provided.sql')

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
  console.log('FK fix completed. Restart dev server and reload /services/web-design-development')
} catch (err) {
  console.error('Fix failed:', err.message)
  process.exit(1)
} finally {
  await client.end()
}
