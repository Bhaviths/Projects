let whitePawns = Array.from(document.querySelectorAll('.white-pawn-assemble'));
let blackPawns = Array.from(document.querySelectorAll('.black-pawn-assemble'));
let whiteRooks = Array.from(document.querySelectorAll('.white-rook-assemble'));
let blackRooks = Array.from(document.querySelectorAll('.black-rook-assemble'));
let whiteHorses = Array.from(document.querySelectorAll('.white-horse-assemble'));
let blackHorses = Array.from(document.querySelectorAll('.black-horse-assemble'));
let whiteBishops = Array.from(document.querySelectorAll('.white-bishop-assemble'));
let blackBishops = Array.from(document.querySelectorAll('.black-bishop-assemble'));
let whiteQueen = document.querySelector('.white-queen-assemble');
let blackQueen = document.querySelector('.black-queen-assemble');
let whiteKing = document.querySelector('.white-king-assemble');
let blackKing = document.querySelector('.black-king-assemble');
let letter,number,word;
let i=0;
let alpha = ['a','b','c','d','e','f','g','h'];

    
whitePawns.forEach((e)=>{
    let pawn = document.createElement('div');
    pawn.style.height = "100%";
    pawn.style.width = "100%";
    pawn.style.backgroundImage = "url('white/pawn.png')";
    pawn.style.backgroundPosition = "center";
    pawn.style.backgroundSize = "cover";
    pawn.id = `white-pawn-${alpha[i]}2`;
    pawn.classList.add("pawn");
    pawn.title = "White Pawn";
    i++;
    
    e.append(pawn)
})

i=0;

whiteRooks.forEach((e)=>{
    let pawn = document.createElement('div');
    pawn.style.height = "100%";
    pawn.style.width = "100%";
    pawn.style.backgroundImage = "url('white/rook.png')";
    pawn.style.backgroundPosition = "center";
    pawn.style.backgroundSize = "cover";
    pawn.classList.add("rook");
    pawn.title = "White Rook";
    i++;
    
    e.append(pawn)
})

i=0;

whiteHorses.forEach((e)=>{
    let pawn = document.createElement('div');
    pawn.style.height = "100%";
    pawn.style.width = "100%";
    pawn.style.backgroundImage = "url('white/knight.png')";
    pawn.style.backgroundPosition = "center";
    pawn.style.backgroundSize = "cover";
    pawn.classList.add("knight");
    pawn.title = "White Knight";
    i++;
    
    e.append(pawn)
})

i=0;

whiteBishops.forEach((e)=>{
    let pawn = document.createElement('div');
    pawn.style.height = "100%";
    pawn.style.width = "100%";
    pawn.style.backgroundImage = "url('white/bishop.png')";
    pawn.style.backgroundPosition = "center";
    pawn.style.backgroundSize = "cover";
    pawn.classList.add("bishop");
    pawn.title = "White Bishop";
    i++;
    
    e.append(pawn)
})

let WhiteQueen = document.createElement('div');
WhiteQueen.style.height = "100%";
WhiteQueen.style.width = "100%";
WhiteQueen.style.backgroundImage = "url('white/queen.png')";
WhiteQueen.style.backgroundPosition = "center";
WhiteQueen.style.backgroundSize = "cover";
WhiteQueen.classList.add("queen");
WhiteQueen.title = "White Queen";
whiteQueen.append(WhiteQueen);

let WhiteKing = document.createElement('div');
WhiteKing.style.height = "100%";
WhiteKing.style.width = "100%";
WhiteKing.style.backgroundImage = "url('white/king.png')";
WhiteKing.style.backgroundPosition = "center";
WhiteKing.style.backgroundSize = "cover";
WhiteKing.classList.add("king");
WhiteKing.title = "White King";
whiteKing.append(WhiteKing);

i=0;

blackPawns.forEach((e)=>{
    let pawn = document.createElement('div');
    pawn.style.height = "100%";
    pawn.style.width = "100%";
    pawn.style.backgroundImage = "url('black/pawn.png')";
    pawn.style.backgroundPosition = "center";
    pawn.style.backgroundSize = "cover";
    pawn.id = `black-pawn-${alpha[i]}7`;
    pawn.classList.add("pawn");
    pawn.title = "Black Pawn";
    i++;
    e.append(pawn)
})

i=0;

blackRooks.forEach((e)=>{
    let pawn = document.createElement('div');
    pawn.style.height = "100%";
    pawn.style.width = "100%";
    pawn.style.backgroundImage = "url('black/rook.png')";
    pawn.style.backgroundPosition = "center";
    pawn.style.backgroundSize = "cover";
    pawn.classList.add("rook");
    pawn.title = "Black Rook";
    i++;
    
    e.append(pawn)
})

i=0;

blackHorses.forEach((e)=>{
    let pawn = document.createElement('div');
    pawn.style.height = "100%";
    pawn.style.width = "100%";
    pawn.style.backgroundImage = "url('black/knight.png')";
    pawn.style.backgroundPosition = "center";
    pawn.style.backgroundSize = "cover";
    pawn.classList.add("knight");
    pawn.title = "Black Knight";
    i++;
    
    e.append(pawn)
})

i=0;

blackBishops.forEach((e)=>{
    let pawn = document.createElement('div');
    pawn.style.height = "100%";
    pawn.style.width = "100%";
    pawn.style.backgroundImage = "url('black/bishop.png')";
    pawn.style.backgroundPosition = "center";
    pawn.style.backgroundSize = "cover";
    pawn.classList.add("bishop");
    pawn.title = "Black Bishop";
    i++;
    
    e.append(pawn)
})

let BlackQueen = document.createElement('div');
BlackQueen.style.height = "100%";
BlackQueen.style.width = "100%";
BlackQueen.style.backgroundImage = "url('black/queen.png')";
BlackQueen.style.backgroundPosition = "center";
BlackQueen.style.backgroundSize = "cover";
BlackQueen.classList.add("queen");
BlackQueen.title = "Black Queen";
blackQueen.append(BlackQueen);

let BlackKing = document.createElement('div');
BlackKing.style.height = "100%";
BlackKing.style.width = "100%";
BlackKing.style.backgroundImage = "url('black/king.png')";
BlackKing.style.backgroundPosition = "center";
BlackKing.style.backgroundSize = "cover";
BlackKing.classList.add("king");
BlackKing.title = "Black King";
blackKing.append(BlackKing);

function pawnFirstMoveOption(pawn){
    let optionBlock;
    number = Number(pawn.id.slice(1,2));
    letter = pawn.id.slice(0,1);

    if(number == 2)
    {
        let option = document.createElement('div');
        option.style.height = "2.5vw";
        option.style.width = "2.5vw";
        option.style.backgroundColor = "blue";
        option.style.borderRadius = "100%";
        option.id = "blueDot";

        number += 2;
        optionBlock = document.getElementById(`${letter}${number}`)
        
        
        
        if(optionBlock.hasChildNodes(option))
        {
                if(optionBlock.firstElementChild.id == "blueDot")
                {
                    optionBlock.removeChild(optionBlock.firstElementChild)
                }
        }
        else{
                optionBlock.appendChild(option);
        }

    }

    else{
        if(number == 7)
        {
            let option = document.createElement('div');
            option.style.height = "2.5vw";
            option.style.width = "2.5vw";
            option.style.backgroundColor = "blue";
            option.style.borderRadius = "100%";
            option.id = "blueDot";

            number -= 2;
            optionBlock = document.getElementById(`${letter}${number}`)



            if(optionBlock.hasChildNodes(option))
            {
                    if(optionBlock.firstElementChild.id == "blueDot")
                    {
                        optionBlock.removeChild(optionBlock.firstElementChild)
                    }
            }
            else{
                    optionBlock.appendChild(option)
                }
        }

    }

    optionBlock.onclick = ()=>{
        if(pawn.firstElementChild != null){
        let shift = document.getElementById(pawn.firstElementChild.id)
        pawn.removeChild(shift)
        optionBlock.removeChild(optionBlock.firstElementChild)
        optionBlock.appendChild(shift)
        
        let nextBlockNumber = Number(shift.id.slice(-1));
        let alphaOfBlock = shift.id.slice(-2).slice(0,1)
        word = shift.id.slice(0,-2);

        if(word == "white-pawn-")
            nextBlockNumber += 2;
        else
            nextBlockNumber -= 2;
        
        shift.id = word + alphaOfBlock + nextBlockNumber

        if(word == "white-pawn-")
            nextBlockNumber--;
        else
            nextBlockNumber++;

        let nextBlock = document.getElementById(`${alphaOfBlock}${nextBlockNumber}`)
        nextBlock.removeChild(nextBlock.firstElementChild)

        }
    }
}

let pawns = Array.from(document.getElementsByClassName("pawn"));

pawns.forEach(pawn=>{
    pawn.onclick = () => {
        pawnMove(pawn)
    }
})

function pawnMove(pawn){
    number = Number(pawn.id.slice(-1));
    letter = pawn.id.slice(-2);
    letter = letter.slice(0,1)
    word = pawn.id.slice(0,-3)
    let option = document.createElement('div');
    option.style.height = "2.5vw";
    option.style.width = "2.5vw";
    option.style.borderRadius = "100%";
    option.style.backgroundColor = "yellow";
    option.id = "yellowDot";
    if(word == "white-pawn")
    {
        number++;
        let nextBlock = document.getElementById(`${letter}${number}`)
        if(nextBlock.hasChildNodes(option))
        {
            if(nextBlock.firstElementChild.id == "yellowDot"){
                nextBlock.removeChild(nextBlock.firstElementChild)
            }
        }
        else{
            nextBlock.appendChild(option)
        }
    }
    else{
        number--;
        let previousBlock = document.getElementById(`${letter}${number}`)
        if(previousBlock.hasChildNodes(option))
        {
            if(previousBlock.firstElementChild.id == "yellowDot"){
                previousBlock.removeChild(previousBlock.firstElementChild)
            }
        }
        else{
            previousBlock.appendChild(option)
        }
    }
    
    optionBlock = document.getElementById('yellowDot').parentElement
    if(optionBlock != null){
    number = optionBlock.id.slice(1,2);
    letter = optionBlock.id.slice(0,1);
    
    
    number--;
    let pawnParent = document.getElementById(`${letter}${number}`);
    number++;
    number++;
    let blueOption = document.getElementById(`${letter}${number}`)
    let Pawn = pawnParent.firstElementChild;
    optionBlock.onclick = () => {
        Pawn.id = Pawn.id.slice(0,-1) + (Number(Pawn.id.slice(-1))+1)
        blueOption.removeChild(blueOption.firstElementChild);
        if(document.getElementById('yellowDot') != null)
            optionBlock.removeChild(document.getElementById('yellowDot'))
        pawnParent.removeChild(Pawn)
        optionBlock.appendChild(Pawn)
    }
    }
}