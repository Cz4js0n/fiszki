let fiszki = []
let pole = document.getElementById("powtorz");

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

function zacznijPowtarzac(){
    document.getElementById('container').style.display = "none";
    let dlugosc = fiszki.length;
    for (let i = 0; i < dlugosc; i++){
        let fiszkaDoDodania = document.createElement('span');
        fiszkaDoDodania.setAttribute('class', 'fiszka');
        fiszkaDoDodania.setAttribute('id', 'fiszka'+i)
        fiszkaDoDodania.innerHTML = fiszki[i]["key"];
        pole.appendChild(fiszkaDoDodania);
        fiszkaDoDodania.addEventListener('click', function(){ 
            fiszkaDoDodania.style.webkitTransitionDuration="2s";
            fiszkaDoDodania.style.webkitTransform = 'rotateY(360deg)';
            fiszkaDoDodania.innerHTML = fiszki[i]["value"];
            fiszkaDoDodania.removeEventListener('click');
        })
    }
}
