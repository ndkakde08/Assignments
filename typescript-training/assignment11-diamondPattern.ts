let num :number =5;


// To print upper Triangle
for (let i=1; i <= num; i++)
    {
        let line: string =""

        //To print " "
        for (let j= i; j<num; j++)
        {
            line = line + " "
        }

        //To print number and one extra space
        for (let k= 1; k <=i; k++)
        {
            line = line + k + " "
        }

        console.log(line)
    }

//To print lower trianle
 for (let i= num-1; i>= 1 ; i--){

    let line:string=""
   
    //To print " "
    for (let j= i; j<num; j++)
        {
            line = line + " "
        }
    //To print number and one extra space
    for (let k= 1; k <=i; k++)
        {
            line = line + k + " "
        }

        console.log(line)
 }
    