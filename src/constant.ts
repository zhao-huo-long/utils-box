
export const primitivesType = [
  'string',
  'number',
  'bigint',
  'boolean',
  'symbol',
  'null',
  'undefined',
  'function'
] as const

export const refsType = [
  'object',
  'array',
  'set',
  'weakset',
  'map',
  'weakmap',
  'date',
  'regexp',
  'element'
] as const

export const types = [
  ...primitivesType,
  ...refsType
] as const
