// Find all pairs in an array that sum to a target value
const arr7 = [1, 2, 3, 4, 5, 6];
const target1 = 7;

for (let i = 0; i <= arr7.length-1; i++) {
    for (let j = 0; j < i; j++) {
        for(let k=0;k<j;k++)
            {
                 if (arr7[i] + arr7[j]+arr7[k] == 7) {
            
            let sum;
            sum = arr7[i] + arr7[j]+arr7[k];
            console.log("Sum of ", arr7[i], " ",arr7[k], "and ", arr7[j], " equals ", sum)
        }
            }
        if (arr7[i] + arr7[j] == 7) {
            
            let sum;
            sum = arr7[i] + arr7[j];
            console.log("Sum of ", arr7[i], "and ", arr7[j], " equals ", sum)
        }
    }
 }

 for (let key in arr7)
    {
        console.log("Printed",key,arr7);
    }

