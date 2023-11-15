function getCountOfOddNumbers( number ) {
  let count = 0;
  let num = number;
  if(number<0){
    num = Math.abs(number)
  }
  while (num !== 0) {
    if (num % 2 !== 0) {
      count += 1;
    }
    num -= 1;
  }
  return count;
}
console.log(getCountOfOddNumbers(-4))
