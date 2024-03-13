function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
}

const menuDiv = document.getElementById('menu-mobile')
const animationBtn = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animationMenu)
function animationMenu(){
    menuDiv.classList.toggle('open')
    animationBtn.classList.toggle('active')
}