import { getType } from '../../Type'
import { primitivesType, refsType } from '../../constant'

// const deepObj = (data) => {
//   const rootDest = {}
//   let clonePool = [{source: data, dest: rootDest}]
//   while(clonePool.length){
//     const {source, dest} = clonePool.pop()
//     for(let key in source){
//       const value = source[key]
//       switch(typeof value){
//         case 'object':
//           dest[key] = {}
//           clonePool.push({source: value, dest: dest[key]})
//           break
//         default:
//           dest[key] = value
//           break;
//       }
//     }
//   }
//   return rootDest
// }


/**
 * deepClone
 */
const deepClone = <T extends any> (target: T) => {
  const typeStr = getType(target)
  if(primitivesType.includes(typeStr as any)){
    return target
  }
  const stack = [{ source: target, dest: undefined}]
  while(stack.length){
    const op = stack.pop() as { source: T, dest: any}
    switch(getType(op.source)){
      case 'array':
        op.dest = []
        // (op.source as any[]).forEach((item, key) => {
        //   stack.push({source:item, dest: a })
        // })
        // stack.push
        // for(op.source)
        break
      case 'date':
        break;
      case 'map':
        break
      case 'object':
        break
      default:

        break
    }
  }
  return target
}



export default deepClone
