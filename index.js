function FirstReverse(str) {
let reversed = "";

for (let i = 0; i < str.length; i++){
  reversed = str[i] + reversed;
}
  // code goes here
  return reversed;

}

// keep this function call here
console.log(FirstReverse(readline()));