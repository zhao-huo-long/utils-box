
const typesFunc = [Array, Set, WeakSet, Map, WeakMap, Date, RegExp, Element]

export const types = ['string',
  'number',
  'bigint',
  'boolean',
  'symbol',
  'null',
  'undefined',
  'object',
  'function',
  'array',
  'set',
  'weakset',
  'map',
  'weakmap',
  'date',
  'regexp',
  'element'
] as const

type ArrayElement<T> = T extends readonly (infer B)[] ? B : never

type ValueTypes = ArrayElement<typeof types>

/**
 * @param target
 */
const getType = (target: unknown): ValueTypes => {
  const typeStr = typeof target
  if (typeStr === 'object') {
    if (typeStr === null) return 'null'
    for (const Func of typesFunc) {
      if (target instanceof Func) {
        return Func.name.toLowerCase() as ValueTypes
      }
    }
    return 'object'
  }
  return typeStr
}

export default getType
