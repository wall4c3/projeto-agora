//Variaveis globais de auxilio que devem ser alteradas:
var usuario = "usuario";

// cria objetos mensagem:
function Mensagem(usuario, conteudo, upVotes=0, downVotes=0) {
    this.usuario = usuario;
    this.conteudo = conteudo;
    this.upVotes = upVotes;
    this.downVotes = downVotes;};
Mensagem.prototype.oneUp = function () {
    this.upVotes += 1;};
Mensagem.prototype.oneDown = function () {
    this.downVotes += 1;};


//Enviar uma mensagem:
var i = 0; //contador global do numero de mensagens no chat
var btnEnviar = document.querySelector("button#enviar");
btnEnviar.onclick = function criarMensagem() {
    
    var msgInput = document.querySelector("input#msg");

    var mensagem = new Mensagem(usuario, msgInput.value);

    pullMsg(mensagem, i);
    i++;
}

//Cria a estrutura da mensagem.
function pullMsg(mensagem, i) {
    var msgId = `msg${i}`
    var msgBox = document.querySelector("#msgBox");
    var msgContent = document.createElement("div");
    msgContent.id = msgId;
    msgContent.innerText = `${mensagem.conteudo}---@${mensagem.usuario}`;
    var msgUpVotes = document.createElement("button");
    msgUpVotes.id = msgId;
    msgUpVotes.innerText = `UP:${mensagem.upVotes}`;
    msgUpVotes.onclick = function () {
        mensagem.oneUp();
        msgUpVotes.innerText = `UP:${mensagem.upVotes}`
    };  
    msgContent.appendChild(msgUpVotes);
    msgBox.appendChild(msgContent);
}

//Cria a funcionalidade do botão de UpVote