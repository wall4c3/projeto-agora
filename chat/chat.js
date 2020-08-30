//Variaveis globais de auxilio que devem ser alteradas:
var usuario = "usuario";

// cria objetos mensagem:
function Mensagem(usuario, conteudo, upVotes=0, upStatus=true, downVotes=0, downStatus=true) {
    this.usuario = usuario;
    this.conteudo = conteudo;
    this.upVotes = upVotes;
    this.upStatus = upStatus;
    this.downVotes = downVotes;
    this.downStatus = downStatus;
};
Mensagem.prototype.oneUp = function () {
    if (this.upStatus) {
        this.upVotes += 1;
        this.upStatus = false;
    } else {
        this.upVotes -= 1;
        this.upStatus = true;
    }};
Mensagem.prototype.oneDown = function () {
    if (this.downStatus) {
        this.downVotes += 1;
        this.downStatus = false;
    } else {
        this.downVotes -= 1;
        this.downStatus = true;
    }
}

Mensagem.prototype.highlightMsg = function () {
    var highlightsBox = document.querySelector("div#highlightsBox");
    var highlightMsg = document.createElement("div"); 
    highlightMsg.id = "highlightMsg" //falta diferenciar as mensagens destacadas entre si;
    highlightMsg.innerText = `${this.conteudo}---@${this.usuario}`
    highlightsBox.appendChild(highlightMsg);    
};


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
    //Cria a funcionalidade do botão de UpVote
    var msgUpVotes = document.createElement("button");
    msgUpVotes.id = msgId;
    msgUpVotes.innerText = `UP:${mensagem.upVotes}`;
    msgUpVotes.onclick = function () {
        mensagem.oneUp();
        msgUpVotes.innerText = `UP:${mensagem.upVotes}`
        //destaca a mensagem dependendo do engajamento
        if (mensagem.upVotes + mensagem.downVotes >= 2) {
            mensagem.highlightMsg();
        }
    };  
    msgContent.appendChild(msgUpVotes);
    //Cria a funcionalidade do botão de DownVote
    var msgDownVotes = document.createElement("button");
    msgDownVotes.id = msgId;
    msgDownVotes.innerText = `DOWN:${mensagem.downVotes}`;
    msgDownVotes.onclick = function () {
        mensagem.oneDown();
        msgDownVotes.innerText = `DOWN:${mensagem.downVotes}`
        //destaca a mensagem dependendo do engajamento
        if (mensagem.upVotes + mensagem.downVotes >= 2) {
            mensagem.highlightMsg();
        }};
    msgContent.appendChild(msgDownVotes);
    msgBox.appendChild(msgContent);
}