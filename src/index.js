import setEventHandlers from "./scripts/button"

const splash = document.querySelector('.splash')

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(()=>{
        splash.classList.add('display-none')
    },2000);
})

setEventHandlers();

function draw() {
    let ctx = document.getElementById('eggInfo').getContext('2d');
    ctx.font = '20px serif';
    ctx.fillText('Please click to generate either an Egg or a Basket', 10, 50);
}
draw();