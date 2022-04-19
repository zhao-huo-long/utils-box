import { isIteratorType } from '../../Type';

type StackItem = {
  data: any;
  keys?: string[];
};

const entries = {
  value: function () {
    const iterator = function* () {
      for (let i in this) {
        yield [i, this[i]];
      }
    }.bind(this);
    return iterator();
  },
  enumerable: false,
};

type IcallbackFn = (value: any, keyPath: string[], isLeaf: boolean) => void;

const ForEach = (data: any, callbackFn: IcallbackFn) => {
  const statck: StackItem[] = [
    {
      data,
      keys: [],
    },
  ];
  while (statck.length) {
    const { keys = [], data } = statck.pop() ?? {};
    const isIterator = isIteratorType(data);
    if (isIterator && !data.entries) {
      Object.defineProperty(data, 'entries', entries);
    }
    const childKeys = isIterator ? data?.entries() : [];
    let isLeaf = true;
    for (const [key, value] of childKeys) {
      statck.unshift({
        data: value,
        keys: [...keys, key],
      });
      isLeaf = false;
    }
    if (keys.length) {
      callbackFn?.(data, keys, isLeaf);
    }
    if (isIterator) {
      Reflect.deleteProperty(data, 'entries');
    }
  }
};

export default ForEach;
