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

// outToggleBell
document.addEventListener('click', handleClickOutToglle)

function handleClickOutToglle(e) {
        if(!Bell.contains(e.target)){
            notiBell.classList.remove('show')
        }
}

// outToggleProfile
document.addEventListener('click', handleClickOutToglle)

function handleClickOutToglle(e) {
        if(!Bell.contains(e.target)){
            notiBell.classList.remove('show')
        }
}