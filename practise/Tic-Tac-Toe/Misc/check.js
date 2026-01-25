const winPattern = [
  [0,1,2],[0,3,6],[0,4,8],
  [3,4,5],[1,4,7],[2,4,6],
  [6,7,8],[2,5,8]
];
let winner;

let board = ['X','X','X','X','O','X','O','X','O'];

for (let key of winPattern)
{

   let [a,b,c]=key;
   if(board[a]=="O" && board[b]=="O" && board[c]=="O" )
{
    
    console.log("Winner is O");
    winner=true;
    break;
}
else if(board[a]=="X" && board[b]=="X" && board[c]=="X" )
{
console.log("Winner is x");

winner=true;
break;
}
else 
    winner=false;
}
if (winner==false)
    {
        console.log("This match is a draw!!!")
    }