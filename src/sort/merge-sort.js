const getCpSrc = (left, right) => (left[0] <= right[0] ? left : right);

const merge = (left, right) => {
    const result = [];
    
    while (left.length && right.length) {
      result.push(getCpSrc(left, right).shift());
    }
 
    result.push(...left, ...right);
 
    return result;
}

const mergeSort = array => {
  if (array.length < 2) {
    return array;
  }
 
  const middle = Math.floor(array.length / 2);

  return merge(mergeSort(array.slice(0, middle)), mergeSort(array.slice(middle, array.length)));
}

export default mergeSort;