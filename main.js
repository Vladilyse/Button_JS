// let text = document.querySelector('h1')
// let block = document.getElementById('block')
// let in_block = document.querySelector('.in_block')
// let created_button = document.getElementById('button')
//     created_button.addEventListener('click',function(){
//         text.style.color='red'
//         block.style.background='green'
//         in_block.style.display='block'
//     })


let block1 = document.getElementById('block1')
let created_button = document.getElementById('button_block1')
    created_button.addEventListener('click',function(){
        block1.style.display='block'
    })


let block2 = document.getElementById('block2')
let create_button = document.getElementById('button_block2')
    create_button.addEventListener('click',function(){
        block2.style.display='block'
    })

let text = document.getElementById('block1')
let text2 = document.getElementById('block2')
let creater_button = document.getElementById('button_block4')
    creater_button.addEventListener('click',function(){
        text.style.color='red'
        text.style.fontSize='35px'
        text2.style.color='white'
    })

let background = document.getElementById('block1')
let background2 = document.getElementById('block2')
let createm_button = document.getElementById('button_block3')
    createm_button.addEventListener('click',function(){
        background.style.background='linear-gradient(rgb(60, 235, 60), rgb(152, 207, 195)'
        background2.style.background='linear-gradient(45deg, rgb(107, 107, 107), rgb(71, 61, 61))'
    })
