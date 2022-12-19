var boxDepoimentos = document.querySelector("#depoimentos");
var btnMostraDepoimentos = document.querySelector("#btn-depo");
var btnFechaDepoimentos = document.querySelector("#btn-direitos");
var verMais = document.querySelector(".ver-mais");

function renderizaDepo() {
    console.log("clicou")
    verMais.classList.add("hide-el")
    for (let i = 4; i <= 20; i++) {
      var img = document.createElement("img");
      img.src = `./img/depo/depo${i}.jpg`;
      boxDepoimentos.appendChild(img);
      btnFechaDepoimentos.classList.add("show-el")
    }
    renderizado = true;
}

btnMostraDepoimentos.addEventListener("click", renderizaDepo)







