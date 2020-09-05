btnTeste = document.querySelector("button#test")
btnTeste.onclick = function() {
    var btnVote = document.createElement("button");
    btnVote.id = "vote";
    btnVote.innerText = "Votar";
    document.body.appendChild(btnVote);    
}

var btnVote = document.querySelector("button#vote")

btnVote.onclick = alert("deu certo!!");