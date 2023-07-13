# Coding-Challenges
function LongestWord(sen) { 

    let senSplit = sen.split(" "); 
    
    for (let i in senSplit){
        senSplit[i] = senSplit[i].replace(/\W/g, '');
       
    }
    
    let longest = 0;
    let longWord = "";
    for (let k in senSplit){ 
        if (senSplit[k].length > longest){
            longest = senSplit[k].length;
            longWord = senSplit[k];
        }
       
    }
    
   
  // code goes here  
  return longWord; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));
