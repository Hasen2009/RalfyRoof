let body = document.getElementsByTagName('body')

window.onload = e=>{
    let loader = document.getElementById('loader');
    body[0].classList.remove('noflow')
    loader.style.display = 'none'
}

let reveal = document.getElementsByClassName('nav-reveal')[0]
reveal.addEventListener('click', e=>{
    body[0].classList.add('noflow')
    let hideList = document.getElementById('hide')
    hideList.style.display = 'block'
})
let cross = document.getElementsByClassName('fa-times')[0]
cross.addEventListener('click', e=>{
    let hideList = document.getElementById('hide')
    hideList.style.display = 'none'
    body[0].classList.remove('noflow')
})
new WOW().init();
