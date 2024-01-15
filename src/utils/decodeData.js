import { decode } from 'js-base64'

export const decodeData = (value) => (value ? decode(value) : '')
