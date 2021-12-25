const board = document.querySelector('.board');

// console.log(document);

let number = 500;

for(let i = 0; i < number; i++) {
    let div = document.createElement('div');

    div.classList.add('box');

    div.addEventListener('mouseover', () => { /* Событие наведения мыши */
        div.style.background = getRandomColor()
        div.style.boxShadow = '0 0 2px red';
    })

    div.addEventListener('mouseleave', () => { /* Событие когда мышь уводим */
        div.style.background = '#1d1414';
        div.style.boxShadow = '0 0 2px #000';
    })

    board.appendChild(div);
}



function getRandomColor(){
    var letters = '0123456789ABCDEF'
    var color = '#';

    for(var i = 0; i < 6; i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}
getRandomColor();