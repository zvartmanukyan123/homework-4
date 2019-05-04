function smallestNum (arr) {
  let sm = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (sm > arr[i] && arr[i] >= 0) {
        sm = arr[i];
      }
  }
  if(sm < 0) {
    return -1;
  }
  return sm;
}


smallestNum([1,2,3,4, -1, 0, -3]);
