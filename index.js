const hamburger = document.getElementById('hamburger')
const cancel = document.getElementById('cancel')
const mobileheaderLinks = document.getElementById('mobileheaderLinks')

const menu = document.getElementById('menu')
const menuiconitems = document.getElementById('menuiconitems')

menu.addEventListener('click', function(){
    
    if (menuiconitems.style.display === 'flex') {
        menuiconitems.style.display = 'none';
    } else {
        menuiconitems.style.display = 'flex';
    }
})

hamburger.addEventListener('click', function(){
    mobileheaderLinks.style.display = 'flex'
})
cancel.addEventListener('click', function(){
    mobileheaderLinks.style.display = 'none'
})