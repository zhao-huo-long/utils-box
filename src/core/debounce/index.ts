import assert from 'assert-tiny'

type Func = (...args: any[]) => any

const debounce = function<T extends Func>(cb: T, delayTime = 0 ) {
  assert(cb).isTypeOf(Function, 'debounce callback expect function type')
  assert(delayTime).isTypeOf(Number, 'debounce parameter delayTime expect number type')
  let preTimeid = undefined
  return function(...args: Parameters<T>){
    if(preTimeid) clearTimeout(preTimeid)
    preTimeid = setTimeout(()=> {
      preTimeid = undefined
      cb.call(this, ...args)
    }, delayTime)
  }
}


export default debounce

