// bell
const Bell = document.querySelector('.bell');
const notiBell = document.querySelector('.bell-notify');
// profile
const toggleProfile = document.querySelector('.profile-box')
const toggleInfo = document.querySelector('.profile-info')


// toogle bell
Bell.addEventListener('click', handleToggleBell)    

function handleToggleBell() {
    notiBell.classList.toggle('show')
}


// toggle profile
toggleProfile.addEventListener('click', handleToggleProfile)

function handleToggleProfile() {
    toggleInfo.classList.toggle('show')
}

document.addEventListener('click', handleClickOutToglle)

function handleClickOutToglle(e) {
    if(!notiBell.contains(e.target)){
        Bell.classList.remove('show')
    }
}