let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');

buttons.forEach( button=>{
    button.onclick = () =>{
        if(button.id=="equal")
        {
            const inputValue = eval(input.value);
            input.value = inputValue;
        }
        else{
            if(button.id == "AC")
                input.value = "";
            else
                input.value += button.id;
        }
        if(button.id == "C")
        {
            let arr = Array.from(input.value);
            arr.length = arr.length - 2;
            input.value = arr.join("");
        }
        if(button.id == "sq")
        {
            let arr = Array.from(input.value);
            for(let i=0;i<2;i++)
                arr.pop();
            let num = arr.join("");
            input.value = num * num;
        }
    }
})