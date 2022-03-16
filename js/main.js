let arrowBtn = document.getElementById('arrow');
let insider = document.querySelector('.wrapper');

arrowBtn.addEventListener('click',()=>{
    insider.classList.toggle('translate')
});

let windOut = document.getElementById('window')
let btns = document.querySelectorAll('button');
let divide = document.getElementById('devide')
let x = document.getElementById('x')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
divide.addEventListener('click', () => {
    windOut.textContent += '/'
})
x.addEventListener('click', () => {
    windOut.textContent += '*'
})
plus.addEventListener('click', () => {
    windOut.textContent += '+'
})
minus.addEventListener('click', () => {
    windOut.textContent += '-'
})

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',()=>{
        if (windOut.textContent==0) {
            windOut.textContent=btns[i].textContent
        }else{
            windOut.textContent += btns[i].textContent
        }
    })
    
}



let ac = document.getElementById('ac')  
ac.addEventListener('click', () => {
    windOut.textContent = '0'
})


let ans = document.getElementById('ans');
ans.addEventListener('click',()=>{
    let answer = (eval(windOut.innerHTML))
    windOut.textContent = answer
})



