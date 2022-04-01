
type Func = (...args: any[]) => any

const debounce = function<T extends Func>(cb: T, delayTime = 0 ) {
  let preTimeid: number | undefined = undefined
  return function(...args: Parameters<T>){
    if(preTimeid) clearTimeout(preTimeid)
    preTimeid = setTimeout(()=> {
      preTimeid = undefined
      cb.call(this, ...args)
    }, delayTime)
  }
}


export default debounce
