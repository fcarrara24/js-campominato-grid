function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let vetQuadrati;
//griglia

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const playground = document.getElementById('playground');
    playground.innerHTML = '';
    let numSquare = document.getElementById('select').value;

    if (numSquare === 'facile') {
        numSquare = 100;
    } else if (numSquare === 'medio') {
        numSquare = 81;
    } else {
        numSquare = 49;
    }

    let indiceBombe = 0;

    for (let i = 1; i <= numSquare; i++) {
        let square = createSquare(numSquare);
        square.innerHTML = i;
        playground.append(square);
    }

    vetQuadrati = document.getElementsByClassName('square');

    let indiceCaselle;

    while (indiceBombe < 8) {

        indiceCaselle = getRndInteger(0, numSquare - 1);


        if (vetQuadrati[indiceCaselle].classList.contains('bomb')) {
            continue;
        } else {
            vetQuadrati[indiceCaselle].classList.add('bomb');
            indiceBombe++;
        }

    }

})

// utility

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createSquare(rowSquare) {
    const squareWidth = Math.sqrt(rowSquare);
    const square = document.createElement('div');

    square.classList.add('square');
    square.style.width = `calc(100% /  ${squareWidth} )`
    square.style.height = `calc(100% /  ${squareWidth} )`
    //square.innerHTML = squareIndex + 1;

    square.addEventListener('click', function () {
        square.classList.toggle('active');

        if (vetQuadrati[square.innerHTML].classList.contains('bomb')) {
            vetQuadrati[square.innerHTML].classList.remove('active');
            vetQuadrati[square.innerHTML].classList.add('red');
            alert('hai perso')
            reset();
            //location.reload();
        } else if (vetQuadrati.length - document.getElementsByClassName('active').length === 8) {
            alert('hai vinto');
            reset();
        }
    })

    return square;
}

function reset() {
    const playground = document.getElementById('playground');

    playground.innerHTML = '';
}