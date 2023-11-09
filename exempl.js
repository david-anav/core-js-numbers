function getCountOfOddNumbers(number) {
  let count = 0;
  while(number !== 0){
    number%2 !== 0 ? count+=1 : false;
    number-=1;
  }
  return count;
}

console.log(getCountOfOddNumbers(5))
