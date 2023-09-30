
document.getElementById("regraTres").addEventListener("click", calcula);

function calcula(){
    referenciaUm = document.getElementById("referenciaUm").value;
    referenciaDois = document.getElementById("referenciaDois").value;
    referenciaTres = document.getElementById("referenciaTres").value;
    document.getElementById("valor").innerHTML = referenciaDois * referenciaTres / referenciaUm;
}