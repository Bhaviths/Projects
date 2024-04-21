let ul = document.querySelector('ul');

document.querySelector('input').addEventListener('keypress',e => {
    if(e.key == "Enter")
        buttonClick();
})

document.querySelector('button').addEventListener('click',buttonClick);

function buttonClick(){

    //For adding the list item

    let input = document.querySelector('input').value;
    input = input[0].toUpperCase() + input.slice(1);
    let li = document.createElement('li');
    li.textContent = input;
    
        // // Set Item
        // let count = 0;
        // count++;
        // localStorage.setItem("task" + count, input);
        // // Retrieve
        // li.textContent = localStorage.getItem("task" + count);

    document.querySelector('input').value = "";
    ul.append(li);

    //For removing the list item the user clicks on 

    document.querySelectorAll('li').forEach(li=>{
    li.onclick = () => {
        ul.removeChild(li);
    }
    })
}

document.querySelectorAll('li').forEach(li=>{
    li.onclick = () => {
        ul.removeChild(li);
    }
    })
