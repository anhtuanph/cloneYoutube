const Bell = document.querySelector('.header-icon_bell');
const notiBell = document.querySelector('.bell-notify');

function handleToggleBell() {
    notiBell.classList.toggle('.show')
}
Bell.addEventListener('click', handleToggleBell)    
