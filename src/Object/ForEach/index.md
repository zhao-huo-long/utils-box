### ForEach

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
  your: null,
};

forEach(data, (a, b, c) => {
  console.log(a, b, c);
});

export default () => {
  return <div>1</div>;
};
```
