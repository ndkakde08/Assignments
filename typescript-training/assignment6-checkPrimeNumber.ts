//================ Assignment 6 ===================================

/* Given a number n, determine whether it is a prime number or not. A prime number is a
number greater than 1 that has no positive divisors other than 1 and itself. */



function isPrimeNumber(num1: number):boolean
{
    if (num1 <= 1)
        {
            return false  // 1 and less than 1 are not prime numbers
        }

    else if (num1 == 2)
        {
            return true   // 2 is smallest prime number
        }

            for (let i = 2; i< num1; i++)   //To check the remainder after division upto (num -1)
            {
                if (num1 % i == 0)
                    {
                        return false
                    }   
            }
                return true
       
}
let checkNumber: number = 13;
console.log(`is ${checkNumber} prime number ?:  ${isPrimeNumber(checkNumber)}`) 

