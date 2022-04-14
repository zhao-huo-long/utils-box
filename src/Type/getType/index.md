### getType - 获取类型

获取传入参数的类型

### Useage - 🥤

javascript:

```js
import { getType } from 'utils-box';

getType(new Date()); /* => 'date' */
getType(''); /* => 'string' */
getType([]); /* => 'array' */
getType({}); /* => 'object' */
getType(null); /* => 'null' */
getType(false); /* => 'boolean' */
getType(undefined); /* => 'undefined' */
getType(0); /* => 'number' */
getType(() => {}); /* => 'function' */
getType(new Set()); /* => 'set' */
getType(new WeakSet()); /* => 'weakset' */
getType(new Map()); /* => 'map' */
getType(new WeakMap()); /* => 'weakmap' */
getType(new RegExp('')); /* => 'regexp' */
```
