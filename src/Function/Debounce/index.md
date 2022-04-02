### debounce - 函数防抖

对函数进行防抖处理  

### Useage - 🥤   

javascript:
```js
import { debounce } from 'utils-box';

const foo = () => console.log('hello world')
const debounceFoo = debounce(foo, 500)
debounceFoo()
debounceFoo()
debounceFoo()
/* 只会打印一次 hello world */
```

react:
```tsx
import React, { useState } from 'react';
import { debounce } from 'utils-box';

export default () => {
  const [time, setTime] = useState(0)
  const onClick = debounce(()=>setTime(s => s+1), 500)
  return <div>
    <button type="button" onClick={onClick} >
      快速点击
    </button>
    <div>生效次数: {time}</div>
  </div>
};
```
