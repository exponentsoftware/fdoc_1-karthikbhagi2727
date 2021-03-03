/*this function is used to count which word is appeared more number of times*/
let countWords = (str, word1, word2) => { 
    if(str.split(word1).length-1 > str.split(word2).length-1){
        return word1;
    }
    else{
        return word2;
    }
}
let paragraph =
  "This paragraph contains some unrelated data created just for the sake of counting the occurrences of the words in this paragraph so will add some random strings now for for created paragraph paragraph";

console.log(countWords(paragraph, "for","this"));
