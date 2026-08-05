// =======Assignment -3 (Arrays/Datatypes/Operators)========

/*  Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and marks [75, 80, 82].
    Add 10 marks to each student using assignment operators and store it into another array.
    After adding 10 marks, identify the average marks of all students.

Expected Output:  
    Updated Marks:
    Suresh: 85
    Mahesh: 90
    Naresh: 92
    Average Marks: 89.0
*/

let studentNames:string [] = ["Suresh","Mahesh","Naresh"];
let studentMarks:number [] = [75, 80, 82];
let updatedMarks:number [] = [];
let totalMarks:number = 0;

for(let i =0; i < studentNames.length; i++) // to calculate the updated marks 
    {
       updatedMarks[i] = studentMarks[i] +10 ;
       if (i == 0){ console.log("Updated Marks:")}
  
       console.log(`${studentNames[i]} : ${updatedMarks[i]}`)

    }

for (let i =0; i < updatedMarks.length; i++) // to calculate the Total marks
    {
        totalMarks = totalMarks + updatedMarks[i];
    }
    console.log(`Average marks:`, totalMarks/updatedMarks.length)   // calculate and print the average marks

































