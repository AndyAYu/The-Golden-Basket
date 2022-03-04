import setEventHandlers from "./scripts/button"

const splash = document.querySelector('.splash')

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(()=>{
        splash.classList.add('display-none')
    },2000);
})
setEventHandlers();