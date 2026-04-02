#!/usr/bin/env node
/**
 * Copies Vite `dist/` into `docs/` for GitHub Pages, keeping markdown in docs/.
 * Run after `vite build` (see npm run build:pages).
 */
import { cpSync, rmSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const docs = join(root, 'docs')

if (!existsSync(dist)) {
  console.error('Missing dist/. Run vite build first.')
  process.exit(1)
}

rmSync(join(docs, 'assets'), { recursive: true, force: true })
for (const file of ['index.html', 'vite.svg']) {
  rmSync(join(docs, file), { force: true })
}

cpSync(join(dist, 'assets'), join(docs, 'assets'), { recursive: true })
cpSync(join(dist, 'index.html'), join(docs, 'index.html'))
cpSync(join(dist, 'vite.svg'), join(docs, 'vite.svg'))

console.log('Synced dist/ → docs/ (DESIGN_SYSTEM.md and other .md files untouched).')
