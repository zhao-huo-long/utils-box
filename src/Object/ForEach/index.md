### ForEach

遍历复杂嵌套对象, 支持 `array` `set` `map` `object` 四种数据结构的嵌套

### 代码演示 - 🥤

javascript:

```js
import { forEach } from 'utils-box';

const data = {
  name: 'tom',
  arr: [
    'hello',
    9,
    false,
    'bar',
    {
      child: 'utils-box is good',
      o: ['s'],
    },
  ],
  myset: new Set([{ a: 1, b: 'bbll' }]),
  myMap: new Map([['key', 'value']]),
  your: null,
};

forEach(data, (value, keyPath, isLeaf) => {
  console.log(value, keyPath, isLeaf);
});
```

```tsx
import React from 'react';
import { forEach } from 'utils-box';

const data = {
  name: 'tom',
  arr: [
    'hello',
    9,
    false,
    'bar',
    {
      child: 'utils-box is good',
      o: ['s'],
    },
  ],
  myset: new Set([{ a: 1, b: 'bbll' }]),
  myMap: new Map([['key', 'value']]),
  your: null,
};

forEach(data, (value, keyPath, isLeaf) => {
  console.log(value, keyPath, isLeaf);
});

export default () => <>查看console</>;
```

### API

```js
forEach(data, (value, keypath, isLeaf) => void)
```

#### `params`

| 参数      | 说明           | 类型            |
| --------- | -------------- | --------------- |
| `data`    | 需要遍历的对象 | `any`           |
| `value`   | 当前值         | `any`           |
| `keypath` | key 路径       | `Array<string>` |
| `isLeaf`  | 是否为叶子结点 | `boolean`       |
