function findEven (n,m) {
  let current = [];
  let result = [];
  let arr = [];
   for (let i = n; i < m; i++){
     if(i % 2 == 0){
       current.push(i);
     }
   }
   for (let i = 0;i < current.length; i++){
      arr = current[i].toString().split("");
      let bool = true;
      for (let j = 0; j < arr.length; j++){
        if (arr[j] % 2 != 0){
          bool = false;
          break;
        }
      }
      if (bool){
        result.push(current[i]);
      }
    }
      return result.length===0 ? "Such numbers does not exist." : result;
}
