function oddNum (n) {
  let arr = n.toString().split("");
  let firstItem = arr.shift();

  if (firstItem % 2 == 0) {
      return false;
  }

  if(arr.length) {
    let newNumber = Number(arr.join(''));
    return oddNum(newNumber);
  } else {
    return true;
  }

}
