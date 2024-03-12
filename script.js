let fiszki = []
let pole = document.getElementById("fiszki-pole");
let lista = document.getElementById('lista');
let aktualnaFiszkaIndex = 0;
let dlugosc = fiszki.length;

function dodajFiszke(){
    przod = document.getElementById("przod").value;
    tyl = document.getElementById("tyl").value;
    let fiszka = {}
    fiszka["key"] = przod;
    fiszka["value"] = tyl;
    fiszki.push(fiszka);
    dlugosc += 1;
    let dodana = document.createElement('li');
    dodana.innerHTML = przod + " &#8594; " + tyl;
    lista.appendChild(dodana);
}

function zresetujFiszki(){
    fiszki = {};
}

function wyswietlFiszke(index=aktualnaFiszkaIndex){
    document.getElementById('nastepna').style.display = 'flex';
    document.getElementById('container').style.display = "none";
    let fiszkaDoDodania = document.createElement('span');
    fiszkaDoDodania.setAttribute('class', 'fiszka');
    fiszkaDoDodania.setAttribute('id', 'fiszka'+index)
    fiszkaDoDodania.innerHTML = fiszki[index]["key"];
    pole.innerHTML = "";
    pole.appendChild(fiszkaDoDodania);
    fiszkaDoDodania.addEventListener('click', function(){ 
        fiszkaDoDodania.style.webkitTransitionDuration="2s";
        fiszkaDoDodania.style.webkitTransform = 'rotateY(360deg)';
        fiszkaDoDodania.innerHTML = fiszki[index]["value"];
        fiszkaDoDodania.removeEventListener('click');
    })
}

function nastepnaFiszka(){
    if(aktualnaFiszkaIndex < dlugosc){
        aktualnaFiszkaIndex = aktualnaFiszkaIndex+1;
        wyswietlFiszke(aktualnaFiszkaIndex);
    }
    else{
        document.getElementById('powtorz').innerHTML="<h1>Koniec fiszek</h1>";
    }
}
