const sentence = "the quick brown fox jumps over the lazy dog the fox";
let words=sentence.split(" ");
console.log(words);
const wordCount=new Map();

for (let key of words)
    {
if(wordCount.has(key))
    {
        let currentWord=wordCount.get(key);
        let newCount=currentWord+1;
         wordCount.set(key,newCount);
    }
    else 
    {
        wordCount.set(key,1);
    }

    }
    console.log("wordCount:",wordCount);