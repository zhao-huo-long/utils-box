/**
 *
 * @param data
 * @returns
 */
const simpleDeepClone = <T extends any> (data: T): T=> {
  return JSON.parse(JSON.stringify(data))
}

export default simpleDeepClone
