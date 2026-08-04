//=======Assignment -4 (Conditional Statements & Loops) ======
/* Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction

    Transactions Table:  
    1 → 50000
    2 → -2000
    3 → 3000
    4 → -15000
    5 → -200
    6 → -300
    7 → 4000
    8 → -3000

Tasks:
Print total number of credit and debit transactions completed.
Print the total amount credited and debited in account.
Print total amount remaining at the end in Bank Account.
If any transaction limit exceeds +/- 10000 then print the message:
"Suspicious credit/ debit Transaction with Amount"  
and also print total number of suspicious transactions. */

let transactionAmount:number[] = [50000, -2000, 3000, -15000, -2000, -300, 4000, -3000]
let creditTransactionCount:number = 0;
let debitTransactionCount:number = 0;
let totalAmountCredited:number = 0;
let totalAmountdebited:number = 0;
let creditSuspiciousTransactionCount = 0;
let debitSuspiciousTransactionCount = 0;


for (let i = 0; i < transactionAmount.length; i++)
    {
        if (transactionAmount[i] > 0)
            {
                creditTransactionCount ++ ;
                totalAmountCredited =  totalAmountCredited + transactionAmount[i]
                if (transactionAmount[i] > 10000)
                    {
                        console.log (`${transactionAmount[i]} is the suspicious credit transactions `)
                        creditSuspiciousTransactionCount ++ ;
                    }
            }
        else if (transactionAmount[i] < 0)
            {
                debitTransactionCount ++ ;
                totalAmountdebited = totalAmountdebited - transactionAmount[i]
                if (transactionAmount[i] < -10000)
                    {
                        console.log (`${transactionAmount[i]} is the suspicious debit transactions `)
                        debitSuspiciousTransactionCount ++ ;
                    }
            }
    }
        console.log (`Total number of credit transactions completed: `, creditTransactionCount)
        console.log (`Total number of debit transactions completed: `, debitTransactionCount)
        console.log (`Total amount credited:`, totalAmountCredited)
        console.log (`Total amount debited :`, totalAmountdebited)
        console.log (`Total number of suspicious transactions :`, creditSuspiciousTransactionCount + debitSuspiciousTransactionCount)
