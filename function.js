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

/*this function is used to clear the text*/
let  cleanText = (str) => str.replace(/[^a-zA-Z ]/g, "");

let paragraph2 = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

console.log(cleanText(paragraph2));