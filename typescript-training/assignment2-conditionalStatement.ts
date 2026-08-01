// ========Assignment 2 - Conditional Statements =============

/* Problem Statement: A bank evaluates loan applicants based on the following criteria:

1. Credit Score
    If the credit score is above 750, the loan is automatically approved.
    If the credit score is between 650 and 750, additional checks are performed.
    If the credit score is below 650, the loan is denied.

2. Income
    For credit scores between 650 and 750, the customer's income must be at least $50,000 for the loan to be considered.

3. Employment Status
    If the customer's income is at least $50,000, the system checks whether the customer is employed.
    If the customer is unemployed, the loan is denied.

4. Debt-to-Income Ratio
    If the customer is employed, the system checks the debt-to-income (DTI) ratio.
    If the DTI ratio is less than 40%, the loan is approved.
    If the DTI ratio is 40% or greater, the loan is denied. */

    let customerName:string;
    let creditScore:number;
    let income:number;
    let employmentStatus:boolean;
    let debtToIncomeRatio:number;

    customerName = "John Doe";
    creditScore = 720;
    income = 55000;
    employmentStatus = true;
    debtToIncomeRatio = 35.0;

    
    if (creditScore >= 750)
        {
            console.log("Loan is auto approved")
        }
    else if (creditScore >= 650)
        {
            if (income >= 50000)
            {
                if (employmentStatus)
                {
                    if (debtToIncomeRatio < 40 )
                    {
                        console.log("Loan is approved")
                    }
                    else
                    {
                        console.log("Loan is denied as customer Debt-to-Income Ratio is more than 40% ")
                    }
                }
                else
                {
                    console.log("Loan is denied due to customer is unemployed.")
                }
            }
            else
            {
                console.log("Loan is denied as customer income below $50,000.")
            }
        }
    else
    {
        console.log("Loan is denied as customer Credit score below 650.")
    }
