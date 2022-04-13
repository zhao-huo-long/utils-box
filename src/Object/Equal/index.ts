import { getType } from '../../Type'
import forEach from '../ForEach'
/**
 *  equal
 */
const equal = (sourceA: unknown, sourceB: unknown) => {
  if(Object.is(sourceA, sourceB)) return true
  if(getType(sourceA) !== getType(sourceB)) return false
  forEach(
    sourceA,
    (item, keys, parent) => {
      const key = keys.pop()

    }
  )
}

export default equal
