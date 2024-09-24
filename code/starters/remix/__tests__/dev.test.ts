import { spawn } from 'node:child_process'
import { expect, test } from 'vitest'
import path from 'node:path'

test('Remix/Vite dev server starts', async () => {
  const devProcess = spawn('yarn', ['dev'], {
    cwd: path.resolve(__dirname, '..'),
    stdio: 'pipe',
    shell: true,
  })

  let output = ''
  devProcess.stdout.on('data', (data) => {
    output += data.toString()
  })

  try {
    // Wait for the server to start (adjust timeout as needed)
    await new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Timeout waiting for dev server to start'))
      }, 30000)

      devProcess.stdout.on('data', (data) => {
        if (data.toString().includes('Network: use --host to expose')) {
          clearTimeout(timeout)
          resolve()
        }
      })
    })

    // Check for expected output
    expect(output).toContain('➡ [tamagui] built config and components')
    expect(output).toContain('Local:   http://')
    expect(output).toContain('Network: use --host to expose')

    // Additional checks can be added here
  } finally {
    // Ensure the dev server is killed
    devProcess.kill()

    // Wait for the process to fully terminate
    await new Promise<void>((resolve) => {
      devProcess.on('exit', () => {
        resolve()
      })
    })
  }
}, 30_000)
