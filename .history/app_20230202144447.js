const Bell = document.querySelector('.ti-bell');
const notiBell = document.querySelector('.bell-notify');

Bell.addEventListener('click', handleToggleBell)

function handleToggleBell() {
    notiBell.classList.toggle('.show')
}