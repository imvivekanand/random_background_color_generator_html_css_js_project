//Generate a random color

const ranColor = function(){
    const hexRange = '0123456789ABCDEF';

    let color = "#";

    for(let i = 0; i < 6; i++){
        color = color + hexRange[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalId;


const startChangingColor = function(){
    function changeBackgroundColor(){
        document.body.style.backgroundColor = ranColor();
    }
    if(!intervalId){
        intervalId = setInterval(changeBackgroundColor, 2000)
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener('click', startChangingColor)
document.querySelector("#stop").addEventListener('click', stopChangingColor)