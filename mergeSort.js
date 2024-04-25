function sort(arr) {
  if (arr.length < 1) throw new Error('Array cannot be empty');
  if (arr.length === 1) return arr;
  let halfIndex = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, halfIndex);
  let secondHalf = arr.slice(halfIndex);

  sort(firstHalf);
  sort(secondHalf);

  return merge(firstHalf, secondHalf, arr);
}

function merge(leftArr, rightArr, origArr) {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      origArr[k] = leftArr[i];
      i++;
      k++;
    } else if (rightArr[j] < leftArr[i]) {
      origArr[k] = rightArr[j];
      j++;
      k++;
    } else if (leftArr[i] === rightArr[j]) {
      origArr[k] = leftArr[i];
      i++;
      k++;
    }
  }

  while (k < origArr.length) {
    if (i < leftArr.length) {
      origArr[k] = leftArr[i];
      i++;
      k++;
    } else if (j < rightArr.length) {
      origArr[k] = rightArr[j];
      j++;
      k++;
    }
  }

  return origArr;
}

console.log(
  sort([
    34, 7, 23, 32, 5, 62, 346, 123, 123, -123412, 1234123, 1, -9999, 12341,
    656345, 84578, 90, 42, 42,
  ])
);
