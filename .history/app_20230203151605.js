// bell
const Bell = document.querySelector('.bell');
const notiBell = document.querySelector('.bell-notify');
// profile
const toggleProfile = document.querySelector('.profile-box')
const toggleInfo = document.querySelector('.profile-info')
// toogle bar
const iconBar = document.querySelector('.icon-bar')
const sidebar = document.querySelector('.sidebar')
const sideItem = document.querySelector('.sidebar-item')


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

// toggle bar
// iconBar.addEventListener('click', handletoggleBars)

// function handletoggleBars() {

//     sidebar.style = 'width:80px'
//     // sidebar.style = "display: grid;font-size: 10px;padding: 0;margin-bottom: 20px;justify-content: center"

// }

// outToggleBell
document.addEventListener('click', handleClickOutToglleBell)

function handleClickOutToglleBell(e) {
        if(!Bell.contains(e.target)){
            notiBell.classList.remove('show')
        }
}

// outToggleProfile
document.addEventListener('click', handleClickOutToglleProfile)

function handleClickOutToglleProfile(e) {
        if(!toggleProfile.contains(e.target)){
            toggleInfo.classList.remove('show')
        }
}