const lamp = document.getElementById('lamp')

function lampOn(){
    lamp.src = './img/ligada.jpg'
}

function lampOff (){
    if (!lampOn()){
        lamp.src = './img/desligada.jpg'
    }
}


lamp.addEventListener('mouseover',lampOn)
lamp.addEventListener('mouseleave',lampOff)