const hello = document.getElementById('hello');
const namaha = document.getElementById('name');
const hamburger = document.getElementById('hamburger-container');
const ul = document.querySelector('ul');
const lists = document.querySelectorAll('a');
let toggle = true;

setInterval(()=>{
    if(hello.innerText == "Hello"){
        hello.innerText = "नमस्ते";
        namaha.innerText = "अहं भवितः";
    }
    else{
        hello.innerText = "Hello";
        namaha.innerText = "I'm Bhavith";
    }
},5000)

hamburger.addEventListener('click',()=>{
    ul.classList.toggle('toggle');
})

lists.forEach(li=>{
    li.addEventListener('click',()=>{
        ul.classList.remove('toggle');
    })
})