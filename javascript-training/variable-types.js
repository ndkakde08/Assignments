// Variable types are divided into different categories

// 1. Local Variable => The variables which are declared inside the block are called as local variables.
// 2. Global varible => The variable which are declare outside the block are called as global variable.

// Example :
    let empName ="Navnath"  // global variable => can be accessed throughout the file
    {
        let empID = 35;  // Local variable => Can be accessed withing bloack only (wont be visiable out side block)

        // console.log("Employee name:",empName)
        // console.log("Employee ID:",empID)
    }
        console.log("Employee name:",empName)
        console.log("Employee ID:",empID)