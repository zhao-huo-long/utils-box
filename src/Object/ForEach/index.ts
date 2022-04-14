import { isPrimitive } from '../../Type';
// import { } from '../../constant'
type StackItem = {
  data: any;
  keys?: string[];
};

type IcallbackFn = (item: any, key: string[], isLeaf: boolean) => void;

const ForEach = (data: any, callbackFn: IcallbackFn) => {
  const statck: StackItem[] = [
    {
      data,
      keys: [],
    },
  ];
  while (statck.length) {
    const { keys = [], data } = statck.pop() ?? {};
    const childKeys = isPrimitive(data) ? [] : Object.keys(data);
    if (keys.length) {
      callbackFn?.(data, keys, !childKeys.length);
    }
    childKeys.forEach((itemKey) => {
      statck.unshift({
        data: data[itemKey],
        keys: [...keys, itemKey],
      });
    });
  }
};

export default ForEach;
