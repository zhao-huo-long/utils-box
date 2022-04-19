### ForEach

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

export default () => <></>;
```
