import { createThrottling } from '../../utils/timer.js'
import { getMacroMap } from '../../db/macro.js'
import { handle as mainToRenderer } from './mainToRenderer.js'
import { stop as stopMacroRunner, start as startMacroRunner } from '../../macroRunner.js'

const throttling = createThrottling()

export function sendMacroUpdateSignal() {
  throttling(async () => {
    mainToRenderer('macro-on-update', getMacroMap())
    stopMacroRunner().then(startMacroRunner)
  }, 100)
}
