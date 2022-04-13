import { primitivesType } from '../../constant'
import getType from '../GetType'


const isPrimitive = (value: unknown) => {
  return primitivesType.includes(getType(value) as any)
}


export default isPrimitive
