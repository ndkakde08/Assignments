/* ============Assignment 7 C: ===================== 
Assignment: Write a program to print * in triangle pattern
/* 1. If I will pass int rows = 5 then it should print triangle with 5 Rows
    *
   **
  ***
 ****
***** */
let num1:number =5


for (let i = 1; i<=num1; i++){

    let line:string = ""

    //To print the " "
    for(let k= i; k < num1; k++)
        {
            line = line + " "
        }
    
    //To print * 
    for (let j= 1; j<=i; j++){  
        
            line = line + "*"
            
    }
        console.log(line)
}




