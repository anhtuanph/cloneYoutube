const Bell = document.querySelector('.bell');
const notiBell = document.querySelector('.bell-notify');


Bell.addEventListener('click', handleToggleBell)    

function handleToggleBell() {
    notiBell.classList.toggle('show')
}

console.log(Bell)
console.log(notiBell)