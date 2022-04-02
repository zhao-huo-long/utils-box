

/**
 *```js
 * {
 *  a: {
 *    b: {
 *      c: 1
 *    },
 *    z: [1]
 *  },
 *  d: {
 *    e: {
 *      f:1
 *    }
 *  }
 *  g: {
 *    h: 2
 *  }
 *  m: 1
 * }
 *```
 * */
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
 * observe
 */
const observe = <T extends object = {}>(data: T) => {
  const watch = () => {}
  const subject = {}
  return [subject, watch]
}


export default observe
