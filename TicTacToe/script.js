let boxs = document.querySelectorAll('.box');
let reset = document.getElementById('reset');
let result = document.getElementById("result");
let player = document.getElementById("player");
let count=0;
var playerTurn;

function choosePlayer(choice){
    playerTurn = choice.id;
    player.innerText = choice.id;
    let cover = document.getElementById("cover-prompt")
    let prompt = document.getElementById("prompt");

    document.body.removeChild(cover);
    document.body.removeChild(prompt)
}

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

boxs.forEach((box)=>{
    box.addEventListener('click',()=>{

        count++;
        
        if(playerTurn == "X")
        {
            box.innerText = "X";
            player.innerText = "O";
            playerTurn = "O";
        }
        else{
            box.innerText = "O";
            player.innerText = "X";
            playerTurn = "X";
        }

        box.disabled = true;
        
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
        checkWinner();
    })
})


reset.addEventListener('click',restart);

function restart(){
//     boxs.forEach(box=>{
//         box.innerText = "";
//         box.disabled = false;

//         box.style.backgroundColor = "black";
//         box.style.backgroundColor = "black";
//         box.style.backgroundColor = "black";

//         box.style.color = "darkgrey";
//         box.style.color = "darkgrey";
//         box.style.color = "darkgrey";
//   })
//   result.innerText = "";
//   reset.innerText = "Reset";

    window.location.reload();
}