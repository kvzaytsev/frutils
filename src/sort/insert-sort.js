import { _swap } from '../internal';

const insertSort = (array) => {
  const input = [].concat(array);
  
  for (let i = 0, n = input.length; i < n; i++ ) {
    for (let j = i; j > 0 && input[j] < input[j-1]; j-- ) {
        _swap(input, j, j-1);
    }
  }

  return input;
}

export default insertSort;