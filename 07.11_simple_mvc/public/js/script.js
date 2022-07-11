console.log(12345)

const h1 = document.querySelector('h1')
const body = document.querySelector('body')

h1.addEventListener('click', e=>{
    h1.innerText="oh! I'm blooding!!"
})

body.addEventListener('click', e=>{
    e.target.style.backgroundColor='red'
})