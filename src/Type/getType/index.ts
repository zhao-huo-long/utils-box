import { types } from '../../constant'

const typesFunc = [Array, Set, WeakSet, Map, WeakMap, Date, RegExp, Element]

type ValueTypes = ArrayElement<typeof types>

/**
 * @param target
 */
const getType = (target: unknown): ValueTypes => {
  const typeStr = typeof target
  if (typeStr === 'object') {
    if (target === null) return 'null'
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
