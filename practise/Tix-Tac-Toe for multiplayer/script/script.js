const scorepart=document.body;
const score=document.getElementById("allScores");


let scores=JSON.parse(localStorage.getItem("scores"))||{};
console.log(scores);
   
 const gameButton=document.createElement("button");
gameButton.innerText="Start game";
gameButton.className="btnBack";
 gameButton.addEventListener("click",()=>{
   window.location.href='game.html'
})



if (Object.keys(scores).length===0)
{
   score.innerHTML="<p>No current Scores available</p>";
}


const list=document.getElementById("scorePage");
const listScore=document.createElement("li");

   

Object.entries(scores).forEach(([key, value]) => {
//   console.log(key,value); 
  const keys = Object.keys(scores); 
// console.log("keys",keys);
const values = Object.values(scores); 
console.log("values are:",values);




function displayAllScores(scores) {
  const scoreBoardDiv = document.getElementById("allScores");
 
  scoreBoardDiv.innerHTML = "";


  Object.entries(scores).forEach(([username, record]) => {
    const allScores = document.createElement("div");
    allScores.className="allScores";
    allScores.innerHTML = `
    <span class="username">${username} </span>
    <span class="stats"> Wins: ${record.wins}, Losses: ${record.losses}</span>`
    scoreBoardDiv.appendChild(allScores);
  

  });
}
displayAllScores(scores);
 scorepart.appendChild(gameButton);

});