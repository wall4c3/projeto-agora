//variaveis globais de suporte que devem ser alterados a posteriori:
var user = "usuario";
//contador global do numero de mensagens enviadas;
var i = 0;
//Script do chat:
//cria objetos message:
function Message(user, content, id, up=0, didntVote=true) {
    this.user = user;
    this.content = content;
    this.id = id;
    this.up = up;
    this.didntVote = didntVote;
};

Message.prototype.upVote = function () {
    if(this.didntVote) {
        this.up++;
        this.didntVote = false;
    } else {
        this.up--;
        this.didntVote = true;
    }
};

//Add funcionalidade ao botão enviar:
var btnSend = document.querySelector("button#send");
btnSend.onclick = function () {
    var contentBox = document.querySelector("input#msgContent");

    var msg = new Message(user, contentBox.value, i);

    i++;
    contentBox.value = "";
    pushMsg(msg);
};


//printa a mensagen na tela:
function pushMsg(msg) {
    var msgBox = document.querySelector("div#msgBox");
    
    var msgField = document.createElement("div");
    msgField.className = "msgField";
    var msgId = `${msg.id}`
    msgField.id = msgId;
    msgField.innerHTML += `<span class=\"msgContent\">${msg.content}</span><br>`;
    msgField.innerHTML += `<span class=\"username\">${msg.user}</span>`;
    
    var btnUpVote = document.createElement("button");
    var btnUpId = `btnUp${msg.id}`;
    btnUpVote.id = btnUpId;
    btnUpVote.innerText = `UP: ${msg.up}`;
    btnUpVote.onclick = function () {
        msg.upVote();
        btnSelector = `button#${btnUpId}`;
        document.querySelector(btnSelector).innerText = `UP: ${msg.up}`;
    };
    msgField.appendChild(btnUpVote);

    msgBox.appendChild(msgField);
}