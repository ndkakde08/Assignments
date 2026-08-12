/*================== Assignment 7: String methods=======================

1.  Write a program to perform the following tasks: 
    1. Count the total number of words in the sentence. 
    2. Print the sentence words in reverse order. 
    3. Convert the first character of each word to uppercase and print original sentence String 

sentence = "Java programming is fun and challenging";  */

let sentence: string = "Java programming is fun and challenging";

// 1. Count the total number of words in the sentence.
console.log("1. Count the total number of words in the sentence.")
let countOfTotalNumberOfwords:number = sentence.split(" ").length;
console.log(`Count the total number of words in the sentence is : ${countOfTotalNumberOfwords}`);


// 2. Print the sentence words in reverse order.
console.log("--------------------------------------------------------------------------")
console.log("2. Print the sentence words in reverse order.")
let seperatedWords:string [] = sentence.split(" ");
let sentenceWordsInReverseOrder :string  = "";
for (let i = seperatedWords.length-1; i >= 0; i--)
    {  
        sentenceWordsInReverseOrder = sentenceWordsInReverseOrder + " " + seperatedWords [i];
    }
console.log(`Print the sentence words in reverse order. : ${sentenceWordsInReverseOrder}`);

// 3. Convert the first character of each word to uppercase and print original sentence String 

console.log("--------------------------------------------------------------------------")
console.log("3. Convert the first character of each word to uppercase and print original sentence String")
let cababCaseString:string =""
for (let i = 0; i < seperatedWords.length; i++)

    {
        // first letter is capital of each word + remaining word
        cababCaseString = cababCaseString + (seperatedWords[i]?.charAt(0).toUpperCase()) + seperatedWords[i]?.slice(1) + " "
    }
console.log(`Original string with first character of each word to uppercase : `,cababCaseString.trim())


/* ============Assignment 7 B: =====================
Write a program to search for all occurrences of a “Java” word in the paragraph and print their
indexes.
    1. Find total number of occurrences
    2. Print count and Indexes of the word */

    let paragraph: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
    let words:string [] = paragraph.split(" ")
    let counter:number = 0
    console.log("--------------------------------------------------------------------------")
    console.log("Asignment 7B: Write a program to search for all occurrences of a “Java” word in the paragraph and print their indexes")

    for(let i =0; i <words.length ; i++){
        
        if (words[i]?.toLowerCase() === "java")
            {
                console.log("Indexe of the word 'Java' is:",i)
                counter++;
            }
    }
        console.log("total number of occurrences of 'java:'",counter )



