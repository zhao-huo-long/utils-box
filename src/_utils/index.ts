type StackItem = {
  refs: any,
  key?: string,
  parent: any
}

const ObjectForEach = (data: any, cb: (...args: any[]) => void) => {
  const statck: StackItem[] = [{ refs: data, key: undefined, parent: undefined }]
  while (statck.length) {
    const { key, refs, parent } = statck.pop() ?? {}
    if (key) cb?.(refs, key, parent)
    if (typeof refs === 'string') continue
    Object.keys(refs).forEach(key => {
      statck.push({
        refs: refs[key],
        key,
        parent: refs
      })
    })
  }
}

ObjectForEach({ a: ['hello', 'sss', { name: 'test' }] }, ((a, b, c) => {
  console.log(a, b, c)
}))


export default ObjectForEach
