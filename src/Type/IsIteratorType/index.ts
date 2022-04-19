import { iteratorType } from '../../constant';
import getType from '../GetType';

const isIteratorType = (value: unknown) => {
  return iteratorType.includes(getType(value) as any);
};

export default isIteratorType;
