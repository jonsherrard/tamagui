import { execSync } from 'node:child_process'
import { expect, test } from 'vitest'
import path from 'node:path'

test('Vite.js build completes', () => {
  const buildOutput = execSync('yarn build', {
    encoding: 'utf-8',
    cwd: path.resolve(__dirname, '..'),
  })

  // Check for yarn build output
  expect(buildOutput).toContain('building SSR bundle for production')
  expect(buildOutput).toContain('modules transformed')
  expect(buildOutput).toContain('build/server/.vite/manifest.json')
  expect(buildOutput).toContain('build/server/assets/server-build-')
  expect(buildOutput).toContain('build/server/index.js')
  expect(buildOutput).toContain('✓ built in')
})
