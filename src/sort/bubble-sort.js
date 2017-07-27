import { _swap } from '../internal';

const bubbleSort = (array) => {
  const input = [].concat(array);
  let swapped = true;

  while(swapped) {
    swapped = false;
    for (let i = 0, n = input.length; i < n; i++ ) {
      if (input[i] > input[i+1]) {
        _swap(input, i, i+1);
        swapped = true;
      }
    }
  }
  
  return input;
}

export default bubbleSort;