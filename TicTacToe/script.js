let boxs = document.querySelectorAll('.box');
let reset = document.getElementById('reset');
let result = document.getElementById("result");
let player = document.getElementById("player");
let b = ["b1","b2","b3","b4","b5","b6","b7","b8","b9"];
let count=0;
var playerTurn = "X";
player.innerText = "X";

let winnerPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

function checkWinner() {
    for(let pattern of winnerPattern)
    {
        let position1Value = boxs[pattern[0]];
        let position2Value = boxs[pattern[1]];
        let position3Value = boxs[pattern[2]];

        if(position1Value.innerText != "" && position2Value.innerText != "" && position3Value.innerText != ""){
            if(position1Value.innerText === position2Value.innerText && position2Value.innerText === position3Value.innerText){
                result.innerText = `Winner Is Player ${position1Value.innerText}`;
                result.style.color = "green"
                reset.innerText = "New Game";

                position1Value.style.backgroundColor = "green";
                position2Value.style.backgroundColor = "green";
                position3Value.style.backgroundColor = "green";

                position1Value.style.color = "white";
                position2Value.style.color = "white";
                position3Value.style.color = "white";

                boxs.forEach((box)=>{
                    box.disabled = true;
                })
            }
            else    if(count == 9 && result.innerText == "")
                    {
                        result.innerText = "Tie";
                        result.style.color = "red";
                        if(result.innerText == "Tie")
                            reset.innerText = "New Game";
                    }
                }

    }
}

function playO(){
    let box = document.getElementById(b[Math.floor(Math.random()*b.length)]);
        if(box.innerText != "X" && b.length != 1 && box != null)
        {
            box.innerText = "O";
            player.innerText = "X";
            playerTurn = "X";
            b.splice(b.indexOf(box.id),1);
            box.disabled = true;
            count++;
            checkWinner();
        }
}

boxs.forEach((box)=>{
    box.addEventListener('click',()=>{

        
        if(playerTurn == "X")
        {
            box.innerText = "X";
            player.innerText = "O";
            playerTurn = "O";
            b.splice(b.indexOf(box.id),1);
            box.disabled = true;
            count++;
            checkWinner();
        }
        playO();
    })
})


reset.addEventListener('click',restart);

function restart(){
    window.location.reload();
}