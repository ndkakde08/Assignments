// Operators are nothing but a set of special characters used in Javascript to perform different types of operations.

// Operators in Javascript are mainly categorized into five different categories

// 1. Arithmetic operators
// 2. Assignment operators
// 3. Comparison operators
// 4. Logical Operators
// 5. Ternary operators

// 1. Arithmetic operators => The special characters used to perform arithmetic operations 
// +  Addition
// - Substraction
// * Multiplication
// / Division
//  % modulus (remainder)
// ++ increament (Increase the previous value by 1)
// -- Decreament (Decrase the previous value by 1)

    let a =10;
    let b =20;

    console.log(a++);
    console.log(b--);

    // a++ => Post increament (Post execution of current line, increase the value by 1.)
    // b++ => Post cecreament (Post execution of current line, decrease the value by 1.)
    console.log(a);
    console.log(b);

    let c = 100;
    let d = 200;

    console.log(++c);  // ++c => pre increament the value by 1 fisrt, then execute the line.
    console.log(--d);  // --dd => pre decreament the value by 1 fisrt, then execute the line.


// 2. Assignment operators => The operators or the special characters used to assign value to a variable.
    // =, +=, -+, *=, /=, %=

    let i=10;
    console.log("Initial value of 'i' is :",i)

    i+=10; // i= i+10 => 10+10 =20;
    console.log("After using '+=' value of i is: ", i)

    i -= 5  // i= i-5 => 20-5
    console.log("After using '-=' value of i is: ", i)

    i *= 10; // i= i *10 => 15*10
    console.log("After using '*=' value of i is: ",i)

    i /= 20; // i= i /20 => 150/20
    console.log("After using '/=' value of i is: ",i)

// 3. Comparison operators => Special characters used to compare the different values
// ==, ===, >, <, >=, <=, !=, !==

    // == Represent loose equality, Loose equality meaning a compare only data
    // === Represent strict equality, strict equality meaning it compare data along with data type

    let x = 10; // Stroing as number
    let y = 10; // Stroing as number
    let z = "10";// Stroing as string

    console.log(x == y) //true
    console.log(x == z) //true

    console.log(x === y)  //true
    console.log(x === z)  // False - It comparing data along with data types







