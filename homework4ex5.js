function findIndex (arr) {
  let result =-1;
  for (let i = 1; i < arr.length; i++){
    if (arr[i] < arr[i -1]) {
      result = arr.indexOf(arr[i]);
    }
  }
  return result;
}
