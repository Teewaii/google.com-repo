const cancel = document.querySelector(".cancel");
const divider = document.querySelector(".divider");
const input = document.querySelector("input");
const toolTip = document.querySelector(".tooltip");
const menuIcon = document.querySelector(".menu");
const menu = document.querySelector(".main-menu");
const container = document.querySelector(".container");




input.addEventListener('input', search)

function search() {
    if (input.value.length > 0) {
        cancel.classList.add('show');
        divider.classList.add('show');
    }
}

cancel.addEventListener('click', canCel)

function canCel() {

    if (input.value.length >= 1) {
        input.value = ""
        cancel.classList.remove('show');
        divider.classList.remove('show');
    }
}

cancel.addEventListener('mouseover', () => {
    toolTip.classList.toggle('show')
})

cancel.addEventListener('mouseleave', () => {
    toolTip.classList.toggle('hide')
})

menuIcon.addEventListener('click', largeMenu)

function largeMenu() {
    menu.classList.toggle('show')
}


// container.addEventListener('click', (event) => {
//     if(menu!==event.target)
//     menu.classList.toggle('hide')
// })