let ul = document.querySelector('ul');
let i = 0;
let list = [];

document.querySelector('input').addEventListener('keypress',e => {
    if(e.key == "Enter")
        buttonClick();
})

document.querySelector('button').addEventListener('click',buttonClick);

for(let j=0;j<=25;j++)
{
    if(localStorage.getItem(`Item${j}`)){
        let li = document.createElement('li');
        li.textContent = localStorage.getItem(`Item${j}`);
        li.id = localStorage.getItem(`Id${j}`);
        ul.append(li);
        i++;
    }
}

function removeLi(){
    document.querySelectorAll('li').forEach(li=>{
        li.onclick = () => {
            localStorage.removeItem("Item" + li.id);
            localStorage.removeItem("Id" + li.id);
            ul.removeChild(li);
        }
    })
}

// localStorage.removeItem('Item0')

function buttonClick(){
    
    //For adding the list item
    if(i==25)
        return;
    
    let input = document.querySelector('input').value;
    input = input[0].toUpperCase() + input.slice(1);
    let li = document.createElement('li');
    localStorage.setItem(`Item${i}`,input);
    localStorage.setItem(`Id${i}`,i);
    li.textContent = localStorage.getItem(`Item${i}`);
    li.id = localStorage.getItem(`Id${i}`);
    i++;
    document.querySelector('input').value = "";
    ul.append(li);

    removeLi();
    
}

removeLi();