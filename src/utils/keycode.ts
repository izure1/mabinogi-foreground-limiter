import { KeyboardRegularButton, KeyboardSpecButton } from 'keysender'

type Keys = KeyboardRegularButton|KeyboardSpecButton

const keycodeMap: Record<string, Keys> = {
  "1": "escape",
  "2": "1",
  "3": "2",
  "4": "3",
  "5": "4",
  "6": "5",
  "7": "6",
  "8": "7",
  "9": "8",
  "10": "9",
  "11": "0",
  "12": "-",
  "13": "=",
  "14": "backspace",
  "15": "tab",
  "16": "q",
  "17": "w",
  "18": "e",
  "19": "r",
  "20": "t",
  "21": "y",
  "22": "u",
  "23": "i",
  "24": "o",
  "25": "p",
  "26": "[",
  "27": "]",
  "28": "enter",
  "29": "lCtrl",
  "30": "a",
  "31": "s",
  "32": "d",
  "33": "f",
  "34": "g",
  "35": "h",
  "36": "j",
  "37": "k",
  "38": "l",
  "39": ";",
  "40": "'",
  "41": "`",
  "42": "lShift",
  "43": "\\",
  "44": "z",
  "45": "x",
  "46": "c",
  "47": "v",
  "48": "b",
  "49": "n",
  "50": "m",
  "51": ",",
  "52": ".",
  "53": "/",
  "54": "rShift",
  "56": "lAlt",
  "57": "space",
  "58": "capsLock",
  "59": "f1",
  "60": "f2",
  "61": "f3",
  "62": "f4",
  "63": "f5",
  "64": "f6",
  "65": "f7",
  "66": "f8",
  "67": "f9",
  "68": "f10",
  "87": "f11",
  "88": "f12",
  "102": "home",
  "103": "up",
  "104": "pageUp",
  "105": "left",
  "106": "right",
  "107": "end",
  "108": "down",
  "109": "pageDown",
  "110": "insert",
  "111": "delete",
}

export function fromLinuxKeycode(code: number): (typeof keycodeMap[keyof typeof keycodeMap])|undefined {
  const key = code.toString() as keyof typeof keycodeMap
  return keycodeMap[key]
}
