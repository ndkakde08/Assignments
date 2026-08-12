/*
Assignment 5 (Conditional Statements & Loops)

Employee Table:
----------------------------------------------------------
S.No | Name          | Base Salary | Experience | Rating
----------------------------------------------------------
1    | Alice Johnson | 75000.0     | 5.1 years  | 4.2
2    | Bob Smith     | 68000.0     | 3.2 years  | 3.8
3    | Carol Davis   | 82000.0     | 7.1 years  | 4.5
4    | David Brown   | 90000.0     | 10.2 years | 2.5
5    | Eva Green     | 60000.0     | 2.4 years  | 3.5

----------------------------------------------------------
Hike Rules:
----------------------------------------------------------
Rating >= 4.0        → Variable Pay = 15% of Base Salary, Bonus = 1500
Rating >= 3 and < 4  → Variable Pay = 10% of Base Salary, Bonus = 1200
Rating < 3.0         → Variable Pay = 3% of Base Salary, Bonus = 300

----------------------------------------------------------
Extra Perks:
----------------------------------------------------------
Employees with Experience >= 5 Years → Extra Reward = 5000

----------------------------------------------------------
Task:
----------------------------------------------------------
- Calculate the hike percentage of each employee.
- Store values in a Map with EmployeeName → HikePercentage.
- Print the results.

----------------------------------------------------------
Formulas:
----------------------------------------------------------
Hike   = (Base Salary × Variable Pay %) + Bonus + Reward
Hike % = Hike ÷ Base Salary
==========================================================
*/

// let employeeDetail : Map <number, string, number, number, number> = new Map();

// Create object to store the data
interface empinfo {
    name :string,
    basicSalary: number,
    experience:number,
    rating:number
}

// create arrey of object to hold data of multiple employees
let employeeDetail: empinfo [] = [
    {   name:"Alice Johnson", 
        basicSalary: 75000.0, 
        experience: 5.1, 
        rating:4.2
    },

    {   name:"Bob Smith",
        basicSalary: 68000.0, 
        experience: 3.2, 
        rating: 3.8
    },

    {   name:"Carol Davis",
        basicSalary: 82000.0, 
        experience: 7.1, 
        rating: 4.5
    },

    {   name:"David Brown ",  
        basicSalary: 90000.0, 
        experience: 10.2, 
        rating: 2.5
    },

    { 
        name:"Eva Green",    
        basicSalary: 60000.0, 
        experience: 2.4, 
        rating: 3.5
    }]

// Declare an empty map to hold the data of empoyee nad percentage hike after each iteration
let empHike: Map<string, number> = new Map()

//Create an for loop to iterate for each employee and store the Name and Hike percentage of each employee
for (let employee= 0; employee < employeeDetail.length; employee++ )
    {
        //Get the salary of each employee 
        let Salary = employeeDetail[employee]!.basicSalary
        
        //Get the experience of each employee 
        let exp = employeeDetail[employee]!.experience

        //Get the rating of each employee
        let rating = employeeDetail[employee]!.rating

        //Get the name of each employee
        let empName = employeeDetail[employee]!.name

        //Get the hikepercentage of each employee by providing details
        let hikepercentage= calculateHike(Salary,exp,rating)

        //Store the employee hike details in map
        empHike.set(empName, hikepercentage)
    }

    // To print the hike details on console
    console.log(empHike)

 // create an function to calculate the Hike from taking input
function calculateHike(
        basicSalary:number, 
        experience:number,
        rating:number): number {

        let bonus:number=0
        let variablePayPercentage:number =0
        let reward:number =0;
   
    if (rating >= 4.0)
        {
            variablePayPercentage = 15
            bonus=1500
        }
    else if(rating >= 3 && rating < 4)
        {
           variablePayPercentage = 10
            bonus=1200
        }
    else 
        {
            variablePayPercentage = 3
            bonus=300
        }
    if (experience >= 5)
        {
            reward=5000
        }

    //calculate the hike as per employee details and conditions
    const hike = (basicSalary * variablePayPercentage/100) + bonus + reward

    //calculate Hike percentage
    const hikePercenatge = (hike /basicSalary) *100

    //function return the value
    return hikePercenatge
}