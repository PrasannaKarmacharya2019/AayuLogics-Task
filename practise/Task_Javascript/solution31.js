// Chunk an array into smaller arrays of specified size

const arr10 = [1, 2, 3, 4, 5, 6, 7, 8,9,10,14,166,156];
const chunkSize = 3;

arr=[];
for (i=0;i<=arr10.length-1;i=i+3)
    {
    arr=arr10.slice(i,i+3);
    console.log(arr);
    }



