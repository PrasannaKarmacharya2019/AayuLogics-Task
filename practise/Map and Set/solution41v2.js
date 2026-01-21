const sentence = "the quick brown fox jumps over the lazy dog the fox";
const words=sentence.split(" ")
// console.log(words);
const wordCount=new Map();

for (let word of words)
{
    console.log("-----------------New Iteration------------------------")
    // console.log(word,wordCount);
    if(wordCount.has(word))
        { 
            console.log("If case Execution")
 // get the current count of the word
         let currentCount = wordCount.get(word);
         console.log("Current Count:",currentCount);

        // add 1 to the count
        let newCount = currentCount + 1;
console.log("newCount:",newCount);

        // update the map with new count
        wordCount.set(word, newCount);
console.log(wordCount);
        }
        else {
            console.log("Else case execution")
                    wordCount.set(word, 1);
                    console.log("wordCount:",wordCount);
                    console.log("wordCount.get:",wordCount.get(word));
    }

}


