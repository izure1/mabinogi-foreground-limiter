import { ipcMain } from 'electron'
import { getConfig } from '../../db/config'

export async function handle() {
  return getConfig()
}

export function ipc() {
  ipcMain.handle('config-get', async () => {
    return await handle()
  })
}
