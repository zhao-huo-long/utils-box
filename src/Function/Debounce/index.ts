type Func = (...args: any[]) => any

/**
 * debounce
*/
const debounce = function<T extends Func>(cb: T, delayTime = 0 ) {
  let preTimeid: number | undefined = undefined
  return function(...args: Parameters<T>): void{
    if(preTimeid) clearTimeout(preTimeid)
    preTimeid = setTimeout(()=> {
      preTimeid = undefined
      cb.call(this, ...args)
    }, delayTime)
  }
}

export default debounce
