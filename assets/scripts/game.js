let dynamicList = [];
let words = [];
let wordCategory;
let wordRaffle;
let attempts = 6;

loadingWords();

createSecretWord();
function createSecretWord() {
    const wordIndex = Math.floor(Math.random() * words.length);;
    wordRaffle = words[wordIndex].name;
    wordCategory = words[wordIndex].category;
}

displayWord();
function displayWord() {
    const category = document.querySelector('#category');
    category.innerHTML = wordCategory;

    const printWord = document.querySelector('.secret-word');
    printWord.innerHTML = '';  

    for(i=0; i < wordRaffle.length; i++) {
        if(dynamicList[i] === undefined) {
            dynamicList[i] = '&nbsp';
            printWord.innerHTML += `<li class="words__secret" id="secret-word">${dynamicList[i]}</li>`;
        } else {
            printWord.innerHTML += `<li class="words__secret" id="secret-word">${dynamicList[i]}</li>`;
        }
    }
}

function keyIsSelected(letter) {
    if(attempts > 0) {
        changeColorLetter('letter-'+letter, false);
        compareLists(letter);
        displayWord();
    }  
}

function changeColorLetter(key, condition) {
    if(condition === false) {
        document.getElementById(key).style.backgroundColor = 'rgb(223, 100, 100)';
        document.getElementById(key).style.color = 'white';
    } else {
        document.getElementById(key).style.backgroundColor = 'rgb(115, 235, 151)';
        document.getElementById(key).style.color = 'white';
    }

}

function compareLists(letter) {
    const pos = wordRaffle.indexOf(letter);
    
    if(pos < 0) {
        attempts--;
        loadHangman();

        if(attempts === 0) {
            openModal('Ops!!!', 'Suas tentavivas acabaram e você não completou a palavra.. <br> PALAVRA SECRETA: ' + wordRaffle);
        }
    } else {
        changeColorLetter('letter-'+letter, true);
        for(i=0; i < wordRaffle.length; i++) {
            if(wordRaffle[i] === letter) {
                dynamicList[i] = letter;
            }
        }
    }

    let victory = true;

    for(i=0; i < wordRaffle.length; i++) {
        if(wordRaffle[i] !== dynamicList[i]) {
            victory = false;
        } 
    }

    if(victory === true) {
        openModal('Parabéns!!!', 'Você acertou a palavra!');
        attempts = 0;
    }
}

function loadHangman() {
    switch(attempts) {
        case 5: 
            document.querySelector('.forca__img').style.background = "url('./assets/img/1.png') no-repeat top / 150px";
            break;
        case 4: 
            document.querySelector('.forca__img').style.background = "url('./assets/img/2.png') no-repeat top / 150px";
            break;
        case 3: 
            document.querySelector('.forca__img').style.background = "url('./assets/img/3.png') no-repeat top / 150px";
            break;
        case 2: 
            document.querySelector('.forca__img').style.background = "url('./assets/img/4.png') no-repeat top / 150px";
            break;
        case 1: 
            document.querySelector('.forca__img').style.background = "url('./assets/img/5.png') no-repeat top / 150px";
            break;
        case 0: 
            document.querySelector('.forca__img').style.background = "url('./assets/img/6.png') no-repeat top / 150px";
            break;
        default: 
        document.querySelector('.forca__img').style.background = "url('./assets/img/forca.png') no-repeat top / 150px";
        break;
    }
}


function openModal(title, msg){
    let modalTitle = document.querySelector('#modalLabel');
    modalTitle.innerText = title;

    let modalBody = document.querySelector('#modalBody');
    modalBody.innerHTML = msg;

    $("#myModal").modal({
        show: true
    });
}

function loadingWords() {
    words = [
        word1 = {
            name: 'JAVASCRIPT',
            category: 'PROGRAMAÇÃO'
        },
        word2 = {
            name: 'CPU',
            category: 'HARDWARE'
        },
        word3 = {
            name: 'FIGMA',
            category: 'SOFTWARE'
        },
        word4 = {
            name: 'PHOTOSHOP',
            category: 'SOFTWARE'
        },
        word5 = {
            name: 'EXCEL',
            category: 'SOFTWARE'
        },
        word6 = {
            name: 'POWERPOINT',
            category: 'SOFTWARE'
        },
        word7 = {
            name: 'WORD',
            category: 'SOFTWARE'
        },
        word8 = {
            name: 'SSD',
            category: 'HARDWARE'
        },
        word9 = {
            name: 'HDD',
            category: 'HARDWARE'
        },
        word10 = {
            name: 'TRANSISTORES',
            category: 'HARDWARE'
        },
        word11 = {
            name: 'GPU',
            category: 'HARDWARE'
        },
        word12 = {
            name: 'JAVA',
            category: 'PROGRAMAÇÃO'
        },
        word13 = {
            name: 'NODE',
            category: 'PROGRAMAÇÃO'
        },
        word14 = {
            name: 'PYTHON',
            category: 'PROGRAMAÇÃO'
        },
        word15 = {
            name: 'CSHARP',
            category: 'PROGRAMAÇÃO'
        },
        word16 = {
            name: 'REACT',
            category: 'PROGRAMAÇÃO'
        },
        word17 = {
            name: 'SHELL',
            category: 'PROGRAMAÇÃO'
        },
        word18 = {
            name: 'DRIVERS',
            category: 'SOFTWARE'
        },
    ];
}