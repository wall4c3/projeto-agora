<template>
  <section id="chat">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    >
    <div class="painel">
      <div class="box1">
        <div class="box-title-chat">
          <h1 class="title-chat">Chat:</h1>
        </div>
        <div id="msgBox">
          <div v-for="message in messages" :key="message.key">
            <div class="tabela">
              <div class="arrow">
                <button id="seta-cima" @click="upVote(message)">
                  <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </button>
                <h3 id="contador">{{message.ups}}</h3>
              </div>

              <div class="icon2">
                <i class="fa fa-comment" aria-hidden="true"></i>
              </div>

              <div class="icon3">
                <i class="fa fa-user" aria-hidden="true"></i>
                <h4 class="user">
                  <span id="user">{{message.user}}</span>
                </h4>
              </div>

              <div class="usuario">
                <span id="content">{{message.content}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="comment-box">
          <input id="msgContent" type="text" placeholder="Coment Here" v-model="inputMessage">
          <button id="send" @click="sendMessage()">
            <i class="fa fa-comment" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div class="box2">
        <div class="box-title-light">
          <h1 class="title-light">Destaques:</h1>
        </div>
        <div id="highlightsBox">
          <div v-for="highlight in highlights" :key="highlight.key">
            <div class="tabela">
              <div class="arrow">
                <button id="seta-cima" @click="upVote(highlight)">
                  <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </button>
                <h3 id="contador">{{highlight.ups}}</h3>
              </div>

              <div class="icon2">
                <i class="fa fa-comment" aria-hidden="true"></i>
              </div>

              <div class="icon3">
                <i class="fa fa-user" aria-hidden="true"></i>
                <h4 class="user">
                  <span id="user">{{highlight.user}}</span>
                </h4>
              </div>

              <div class="usuario">
                <span id="content">{{highlight.content}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: "oscar",
      count: 0,
      messages: [],
      highlights: [],
      inputMessage: ""
    };
  },
  methods: {
    sendMessage() {
      this.messages.push({
        key: this.count,
        content: this.inputMessage,
        user: this.user,
        ups: 0,
        highlighted: false
      });
      this.count++;
    },
    upVote(message) {
      message.ups++;
      if (message.ups >= 10 && !message.highlighted) {
        message.highlighted = true;
        this.highlights.push(message);
      }
    }
  }
};
</script>

<style scoped>
.painel {
  position: relative;
  width: 100%;
  display: flex;
}

.box1 {
  position: relative;
  margin-left: 100px;
}

.box2 {
  position: relative;
  margin-left: 12%;
}

#msgBox {
  position: relative;
  border: 2px solid #490080;
  border-radius: 10px;
  width: 550px;
  height: 800px;
  overflow: auto;
}

#highlightsBox {
  position: relative;
  width: 350px;
  height: 350px;
  border: 2px solid #490080;
  border-radius: 10px;
  overflow: auto;
}

.title-chat {
  text-align: center;
  color: rgb(226, 226, 226);
}

.box-title-chat {
  background: #510E80;
  border-radius: 10px;
}

.title-light {
  text-align: center;
  color: rgb(226, 226, 226);
}

.box-title-light {
  background-color: #510E80;
  border-radius: 10px;
}

.comment-box {
  background: #2f3640;
  border-radius: 40px;
  width: 400px;
  height: 35px;
  margin-top: 5px;
  margin-left: 65px;
}

#msgContent {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 15px;
  line-height: 35px;
  margin-left: 10px;
  width: 340px;
}

#send {
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background: #2f3640;
  color: white;
  margin-top: 2px;
  color: #027373;
  font-size: 25px;
}

.tabela {
  position: relative;
  background-color: #A3B2BF;
  border-radius: 10px;
  border: 1.5px solid #054863;
  height: 20%;
  width: 528px;
  max-height: 100%;
  overflow: hidden;
  margin-left: 10px;
  margin-top: 10px;
}

#highlightsBox .tabela {
  position: relative;
  background-color: #A3B2BF;
  border-radius: 10px;
  border: 1.5px solid #054863;
  height: 20%;
  width: 328px;
  max-height: 100%;
  overflow: hidden;
  margin-left: 10px;
  margin-top: 10px;
}

.tabela .arrow {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #304361;
  transition: 0.5s;
  z-index: 1;
}

.tabela:hover .arrow {
  width: 48px;
}

.fa-arrow-up {
  margin-top: 10px;
  margin-left: 10px;
  transition: 0.5s;
  cursor: pointer;
}

#seta-cima {
  background: #A3B2BF;
  border: none;
  transition: 0.5s;
}

#seta-cima:focus {
  outline: none;
}

.tabela:hover #seta-cima {
  background: #304361;
}

#contador {
  margin-left: 13px;
  font-size: 20px;
}

.tabela .icon2 {
  margin-left: 93%;
  margin-top: 10px;
}

.tabela .icon3 {
  margin-left: 20%;
}

.tabela .usuario {
  margin-left: 60px;
  margin-top: -10px;
}

.tabela .icon3 .user {
  margin-left: 7%;
  margin-top: -19px;
}

@media screen and (max-width: 1200px) {
  #msgBox {
    position: relative;
    border: 2px solid #490080;
    border-radius: 10px;
    width: 500px;
    height: 700px;
    overflow: auto;
  }

  #highlightsBox {
    position: relative;
    width: 300px;
    height: 300px;
    border: 2px solid #490080;
    border-radius: 10px;
    overflow: auto;
  }

  .comment-box {
    background: #2f3640;
    border-radius: 40px;
    width: 350px;
    height: 30px;
    margin-top: 5px;
    margin-left: 58px;
  }

  #msgContent {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 15px;
    line-height: 30px;
    margin-left: 10px;
    width: 300px;
  }

  #send {
    cursor: pointer;
    border: none;
    border-radius: 50%;
    background: #2f3640;
    color: white;
    margin-top: 2px;
    color: #027373;
    font-size: 20px;
  }

  .tabela {
    position: relative;
    background-color: #A3B2BF;
    border-radius: 10px;
    border: 1.5px solid #054863;
    height: 20%;
    width: 477px;
    max-height: 100%;
    overflow: hidden;
    margin-left: 10px;
    margin-top: 10px;
  }

  #highlightsBox .tabela {
    position: relative;
    background-color: #A3B2BF;
    border-radius: 10px;
    border: 1.5px solid #054863;
    height: 20%;
    width: 277px;
    max-height: 100%;
    overflow: hidden;
    margin-left: 10px;
    margin-top: 10px;
  }
}

@media screen and (max-width: 1050px) {
  #msgBox {
    position: relative;
    border: 2px solid #490080;
    border-radius: 10px;
    width: 400px;
    height: 600px;
    overflow: auto;
  }

  #highlightsBox {
    position: relative;
    width: 250px;
    height: 250px;
    border: 2px solid #490080;
    border-radius: 10px;
    overflow: auto;
  }

  .comment-box {
    background: #2f3640;
    border-radius: 40px;
    width: 270px;
    height: 25px;
    margin-top: 5px;
    margin-left: 55px;
  }

  #msgContent {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 15px;
    line-height: 25px;
    margin-left: 10px;
    width: 220px;
  }

  #send {
    cursor: pointer;
    border: none;
    border-radius: 50%;
    background: #2f3640;
    color: white;
    margin-top: 1px;
    color: #027373;
    font-size: 18px;
  }

  .tabela {
    position: relative;
    background-color: #A3B2BF;
    border-radius: 10px;
    border: 1.5px solid #054863;
    height: 20%;
    width: 377px;
    max-height: 100%;
    overflow: hidden;
    margin-left: 10px;
    margin-top: 10px;
  }

  #highlightsBox .tabela {
    position: relative;
    background-color: #A3B2BF;
    border-radius: 10px;
    border: 1.5px solid #054863;
    height: 20%;
    width: 215px;
    max-height: 100%;
    overflow: hidden;
    margin-left: 10px;
    margin-top: 10px;
  }
}

@media screen and (max-width: 900px) {
  .box1 {
    margin-left: 20px;
  }

  #msgBox {
    position: relative;
    border: 2px solid #490080;
    border-radius: 10px;
    width: 400px;
    height: 600px;
    overflow: auto;
  }

  #highlightsBox {
    position: relative;
    width: 250px;
    height: 250px;
    border: 2px solid #490080;
    border-radius: 10px;
    overflow: auto;
  }

  .comment-box {
    background: #2f3640;
    border-radius: 40px;
    width: 270px;
    height: 25px;
    margin-top: 5px;
    margin-left: 45px;
  }

  #msgContent {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 15px;
    line-height: 25px;
    margin-left: 10px;
    width: 220px;
  }

  #send {
    cursor: pointer;
    border: none;
    border-radius: 50%;
    background: #2f3640;
    color: white;
    margin-top: 1px;
    color: #027373;
    font-size: 18px;
  }

  .tabela {
    position: relative;
    background-color: #A3B2BF;
    border-radius: 10px;
    border: 1.5px solid #054863;
    height: 20%;
    width: 377px;
    max-height: 100%;
    overflow: hidden;
    margin-left: 10px;
    margin-top: 10px;
  }

  #highlightsBox .tabela {
    position: relative;
    background-color: #A3B2BF;
    border-radius: 10px;
    border: 1.5px solid #054863;
    height: 20%;
    width: 215px;
    max-height: 100%;
    overflow: hidden;
    margin-left: 10px;
    margin-top: 10px;
  }
}

@media screen and (max-width: 768px) {
  .painel {
    position: relative;
    width: 100%;
    display: block;
  }

  .box-title-chat {
    width: 300px;
    background: #510E80;
    border-radius: 10px;
  }

  .box-title-light {
    width: 250px;
    background-color: #510E80;
    border-radius: 10px;
  }

  .box2 {
    position: relative;
    margin-left: 80px;
    margin-top: 40px;
  }

  .comment-box {
    background: #2f3640;
    border-radius: 40px;
    width: 290px;
    height: 25px;
    margin-top: 5px;
    margin-left: 45px;
  }

  #msgContent {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 15px;
    line-height: 25px;
    margin-left: 10px;
    width: 250px;
  }

  #send {
    cursor: pointer;
    border: none;
    border-radius: 50%;
    background: #2f3640;
    color: white;
    margin-top: 1px;
    color: #027373;
    font-size: 18px;
  }
}
</style> 