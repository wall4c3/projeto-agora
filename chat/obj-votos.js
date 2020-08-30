var bttnEnviar = document.querySelector("button#enviar");
var caixaMensagens = document.querySelector("#boxMessages");
var usuario = "@user";
var conteudo = document.querySelector("input#conteudoMsg");

bttnEnviar.onclick = function enviarMensagem() {
    if(conteudo.value) {
    var mensagem = new Mensagem(usuario, conteudo.value);
    var novaMensagem = document.createElement("div");
    novaMensagem.className = "mensagens";
        var conteudoMsg = document.createElement("div");
            var msgSpan = document.createElement("span");
            msgSpan.textContent = mensagem.conteudo;
            conteudoMsg.appendChild(msgSpan);
            var userSpan = document.createElement("span");
            userSpan.textContent = mensagem.usuario;
            conteudoMsg.appendChild(userSpan);
        novaMensagem.appendChild(conteudoMsg);
        var votesMsg = document.createElement("div");
            var upsMsg = document.createElement('span');
            upsMsg.textContent = `upvotes = ${mensagem.upVotes}`;
            votesMsg.appendChild(upsMsg); 
            var downMsg = document.createElement('span');
            downMsg.textContent = `downvotes = ${mensagem.downVotes}`;
            votesMsg.appendChild(downMsg);
        novaMensagem.appendChild(votesMsg);    
    caixaMensagens.appendChild(novaMensagem);}
}

function Mensagem(usuario, conteudo, upVotes=0, downVotes=0) {
    this.usuario = usuario;
    this.conteudo = conteudo;
    this.upVotes = upVotes;
    this.downVotes = downVotes;}
Mensagem.prototype.oneUp = function () {
    this.upVotes += 1;}
Mensagem.prototype.oneDown = function() {
    this.downVotes += 1;}