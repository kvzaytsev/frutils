const _swap = (input, i, j) => input.splice(j, 1, input.splice(i, 1, input[j])[0]);

const selectSort = (array) => {
  const input = [].concat(array);
  
  for (let i = 0, n = input.length; i < n; i++ ) {
    for (let j = i + 1; j < n; j++ ) {
      if (input[i] > input[j]) {
        _swap(input, i, j);
      }
    }
  }

  return input;
}

export default selectSort;