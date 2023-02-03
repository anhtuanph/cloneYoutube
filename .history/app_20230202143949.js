const Bell = document.querySelector('.ti-bell');
const notiBell = document.querySelector('.bell-notify');

Bell.addEventListener('onclick', () => {
    Bell.classList.toggle('notiBell')
})