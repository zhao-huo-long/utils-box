export const primitivesType = [
  'number',
  'bigint',
  'boolean',
  'symbol',
  'null',
  'undefined',
] as const;

export const refsType = [
  'string',
  'object',
  'function',
  'array',
  'set',
  'weakset',
  'map',
  'weakmap',
  'date',
  'regexp',
  'element',
] as const;

export const iteratorType = ['array', 'object', 'set', 'map'];

export const types = [...primitivesType, ...refsType] as const;
