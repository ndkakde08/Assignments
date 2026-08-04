// 1. check if character is uppercase
let character:string = 'A'
    if ( character >= 'A' && character <= 'Z'){
            console.log(`${character} is in uppercase`)
        }

    else{
            console.log(`${character} is in lowercase`)
    }

// 2. Check if number is a multiple of 10
let givenNumber:number=20;
    if (givenNumber % 10 == 0){
            console.log(`${givenNumber} is multiple of 10`)
        }
    else{
            console.log(`${givenNumber} is not multiple of 10`)
    }

//3. Check if a person is a teenager (age between 13 and 19)
let personAge:number = 10;
    if (personAge >= 13 && personAge <= 19)
        {
            console.log("person is teenager age")
        }
    else if(personAge < 13)
        {
            console.log("person is child")
        }
    else{
            console.log("person is younger")
    }

// 4. Compare two numbers and print the larger number
    let n1:number =16 
    let n2:number =16
    if(n1 > n2)
        {
            console.log(`${n1} is the larger number`)
        }
    else if(n2 > n1)
        {
            console.log(`${n2} is the larger number`)
        }
    else{ 
            console.log(`Numbers are same`)
        }

// 5. Check if a number is positive, negative, or zero
        let num:number = -10;
        if (num > 0)
            {
                console.log("positive number")
            }
        else if (num < 0)
            {
                console.log("Negative number")
            }
        else
            {
                console.log("Number is zero")
            }

// 6. Check if a person is eligible for a senior citizen discount (age >= 60)
        let age:number = 62;
        if (age >= 60)
            {
                console.log("Person is eligible for a senior citizen discount")
            }
        else
            {
                console.log("Person is not eligible for a senior citizen discount")
            }

// 7. check number is positive and even
        let  checkNumber = -15
        if (checkNumber > 0){
            if (checkNumber % 2 == 0){
                console.log("number is positive and even")
            }
            else{
                console.log("number is positive and but not even")
            }
        }
        else{
                console.log("number is Negative")
        }

// 8. Check if character is upperCase Vowel
        let char:string = 'b'
        if (char >= 'A' && char < 'Z'){
            if( char == 'A' ||char == 'E' ||char == 'I' ||char == 'O' ||char == 'U'){
                console.log(`Given character ${char} is Uppercase and vowel`)
            }
        }

// 9. Find largest of Three numbers
        let numb1:number =50;
        let numb2:number =30;
        let numb3:number =70;
        if ( numb1 > numb2 && numb1 > numb3)
            {
                console.log(`${numb1} is largest`)
            }
        else if ( numb2 > numb1 && numb2 > numb3)
            {
                console.log(`${numb2} is largest`)
            }
        else
            {
                console.log(`${numb3} is largest`)
            }

// 10. Check if number is Multiple of both 5 and 10
        let number1:number = 100;
        if( number1 % 5 == 0 && number1 % 10 == 0){
            console.log(`${number1} is Multiple of both 5 and 10 `)
        }

// 11. Check if the character is vowel or consonant
        char = 'D'
        if (char == 'A'|| char == 'E' ||char == 'I' ||char == 'O'||char == 'U' )
            {
                console.log(`${char} is the vowel`)
            }
        else if(char == 'a'|| char == 'e' ||char == 'i' ||char == 'o'||char == 'u')
            {
                console.log(`${char} is the vowel`)
            }
        else 
            {
                console.log(`${char} is the consonant`)
            }

//12. Check if a number is divisible by both 2 and 3.
        num = 12;
        if (num % 2 == 0 && num % 3 == 0)
            {
                console.log(`${num} is divisible by by both 2 and 3`)
            }

//13 Print the corresponding month name for a given month number.
            let month:number = 5;
            switch(month){
                case 1 : console.log(`${month} is january`);  break;
                case 2 : console.log(`${month} is February`);  break;
                case 3 : console.log(`${month} is March`);  break;
                case 4 : console.log(`${month} is April`);  break;
                case 5 : console.log(`${month} is May`);  break;
                case 6 : console.log(`${month} is June`);  break;
                case 7 : console.log(`${month} is July`);  break;
                case 8 : console.log(`${month} is August`);  break;
                case 9 : console.log(`${month} is September`);  break;
                case 10 : console.log(`${month} is Octomber`);  break;
                case 11 : console.log(`${month} is November`);  break;
                case 12 : console.log(`${month} is December`);  break;
                default : console.log(`${month} is invalid month number`);  break;
            }

//14. Perform basic arithmetic operations based on user input.
            let userInput:string = '&'
            numb1 = 10;
            numb2 = 5;

            switch(userInput){
                case '+': console.log(`Addition of ${numb1} and ${numb2} is :`,numb1 + numb2); break
                case '-': console.log(`Substraction of ${numb1} and ${numb2} is :`,numb1 - numb2); break
                case '*': console.log(`Multiplication of ${numb1} and ${numb2} is :`,numb1 * numb2); break
                case '/': console.log(`Division of ${numb1} and ${numb2} is :`,numb1 / numb2); break
                case '%': console.log(`Remainder of division of ${numb1} and ${numb2} is :`,numb1 % numb2); break
                default :console.log(`Invalid user input`)
            }

//15.Print the season based on the month number.
            month = 2;
            switch (month){
                case 1: 
                case 2: 
                case 11:
                case 12: console.log("winter season"); break
                case 3: 
                case 4:  
                case 5: 
                case 6: console.log("Summer season"); break
                case 7: 
                case 8: 
                case 9: 
                case 10: console.log("Rainy season"); break

            }