var bttnEnviar = document.querySelector("button#enviar");
var caixaMensagens = document.querySelector("#boxMessages");
var usuario = "@user";
var conteudo = document.querySelector("input#conteudoMsg");

bttnEnviar.onclick = function enviarMensagem() {
    if(conteudo.value) {
    var mensagem = new Mensagem(usuario, conteudo.value);
    var novaMensagem = document.createElement("div");
    novaMensagem.className = "mensagens";
    novaMensagem.innerHTML =
    `<span class:"conteudoMensagem">${mensagem.conteudo}</span>
    <span class:"userName">${mensagem.usuario}</span>
    <button onclick="mensagem.oneUp()">Up</button>
    <span>${mensagem.upVotes}</span>`
    caixaMensagens.appendChild(novaMensagem);      

}}

// cria objetos mensagem:
function Mensagem(usuario, conteudo, upVotes=0, downVotes=0) {
    this.usuario = usuario;
    this.conteudo = conteudo;
    this.upVotes = upVotes;
    this.downVotes = downVotes;}
Mensagem.prototype.oneUp = function () {
    this.upVotes += 1;}
Mensagem.prototype.oneDown = function() {
    this.downVotes += 1;}