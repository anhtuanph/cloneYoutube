// bell
const Bell = document.querySelector('.bell');
const notiBell = document.querySelector('.bell-notify');
// profile
const toggleProfile = document.querySelector('.profile-box')
const toggleInfo = document.querySelector('.profile-info')



Bell.addEventListener('click', handleToggleBell)    

function handleToggleBell() {
    notiBell.classList.toggle('show')
}


