### getType - 获取类型

获取传入参数的类型

### 代码演示 - 🥤

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

### API

```js
const typeStr = getType(data);
```

#### `params`

| 参数   | 说明             | 类型  |
| ------ | ---------------- | ----- |
| `data` | 需要获取类型的值 | `any` |

#### `return`

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| `typeStr` | 类型字符串 | `"number" \| "bigint" \| "boolean" \| "symbol" \| "null" \| "undefined" \| "string" \| "object" \| "function" \| "array" \| "set"\| "weakset" \| "map" \| "weakmap" \| "date" \| "regexp" \| "element"` |
