const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.nav-ul')

toggle.addEventListener('click', () =>{
    menu.classList.toggle('show')
})



const news = document.querySelector('.news')
const menuNews = document.querySelector('.nav-news')

news.addEventListener('click', () =>{
    menuNews.classList.toggle('shownews')
})



const cotacao = document.querySelector('.cotacao')
const menucota = document.querySelector('.nav-cotacao')

cotacao.addEventListener('click', () =>{
    menucota.classList.toggle('showcotacao')
    
})


const ferramenta = document.querySelector('.ferramenta')
const menuferramenta = document.querySelector('.nav-ferramenta')

ferramenta.addEventListener('click', () =>{
    menuferramenta.classList.toggle('showferramenta')
})