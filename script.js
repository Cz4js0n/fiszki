let fiszki = []
let pole = document.getElementById("powtorz");
let indexFiszki = 0;

function dodajFiszke(){
    przod = document.getElementById("przod").value;
    tyl = document.getElementById("tyl").value;
    let fiszka = {}
    fiszka["key"] = przod;
    fiszka["value"] = tyl;
    fiszki.push(fiszka);
}

function zresetujFiszki(){
    fiszki = {};
}

function kolejnaFiszka(){
    if(indexFiszki < fiszki.length){
        indexFiszki = indexFiszki + 1;
        wyswietlFiszke();
    }
    else{
        let popup = document.createElement('span');
        popup.setAttribute('class', 'popup');
        popup.innerHTML = "Skończyłeś naukę (powtórzono "+dlugosc+" fiszki)";
        pole.appendChild(popup);
    }
}

function wyswietlFiszke(){
    document.getElementById('container').style.display = "none";
    let dlugosc = fiszki.length;
    let fiszkaDoDodania = document.createElement('span');
    fiszkaDoDodania.setAttribute('class', 'fiszka');
    fiszkaDoDodania.setAttribute('id', 'fiszka'+(indexFiszki+1))
    fiszkaDoDodania.innerHTML = fiszki[indexFiszki]["key"];
    pole.appendChild(fiszkaDoDodania);
    fiszkaDoDodania.addEventListener('click', function(){ 
        fiszkaDoDodania.style.webkitTransitionDuration="2s";
        fiszkaDoDodania.style.webkitTransform = 'rotateY(360deg)';
        fiszkaDoDodania.innerHTML = fiszki[indexFiszki]["value"];
        fiszkaDoDodania.removeEventListener('click');
    })
}
