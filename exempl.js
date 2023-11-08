let index = 0;


function FunFab  (index){
  let startNum = [0,1]
  let f = 0;
  let s = 1;
  if (index > startNum.length-1){
    while( startNum.length-1 != index){
      let num = startNum[f] + startNum[s];

      startNum.push(num);
      f+=1;
      s+=1;

    }
    return startNum[index]

  } else {
    return startNum[index]
  }
}
console.log(FunFab(index))
