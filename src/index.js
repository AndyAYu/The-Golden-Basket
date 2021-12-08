import setEventHandlers from "./scripts/button"

setEventHandlers();

function draw() {
    let ctx = document.getElementById('eggInfo').getContext('2d');
    ctx.font = '20px serif';
    ctx.fillText('Please click to generate either an Egg or a Basket ', 10, 50);
}
draw()