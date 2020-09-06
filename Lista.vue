<template>
  <div id="painel-ficha">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    >
    <section id="ficha">
      <div id="title-background">
        <h2 id="title-ficha">Lista de inscritos:</h2>
      </div>
      <div id="painel-nomes">
        <div id="botao-clock">
          <button @click="startCountdown()">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </button>
          <br>
        </div>
        <div id="boxSub" v-for="user in listaFala" :key="user.nome">
          <div>{{user.nome}} - {{user.tempo}}</div>
        </div>
      </div>
      <div id="input-box">
        <input id="conteudoNome" value placeholder="Digite seu nome" v-model="nome">
        <button id="enviarSub" @click="enviarSub()">
          <i class="fa fa-comment" aria-hidden="true"></i>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listaFala: [],
      nome: "",
      tempo: "03:00",
      cronometro: undefined,
      format: undefined,
      seg: 60,
      min: 2
    };
  },
  methods: {
    startCountdown() {
      setTimeout(() => this.countDown(), 1000);
      this.seg = 60;
      this.min = 2;
    },

    countDown() {
      this.seg--;
      alert(this.seg);

      if (this.seg === 0) {
        alert(this.seg);
        this.seg = 59;
        this.min--;
        if (this.min <= 0) {
          alert(this.min);
          this.seg = "0";
          this.format =
            (this.min < 10 ? "0" + this.min : this.min) +
            ":" +
            (this.seg < 10 ? "0" + this.seg : this.seg);
          clearInterval(this.cronometro);
        }
      }
    },

    enviarSub() {
      this.listaFala.push({
        nome: this.nome,
        tempo: this.tempo
      });
    }
  }
};
</script>

<style scoped>
#painel-ficha {
  position: relative;
  margin-left: 100px;
  margin-top: 50px;
}
#painel-nomes {
  position: relative;
  width: 300px;
  min-height: 50px;
  max-height: 100%;
  border: 3px solid #222E73;
  border-radius: 10px;
  background: #BFCDD9;
  overflow: hidden;
}
#title-ficha {
  color: rgb(226, 226, 226);
  text-align: center;
}
#title-background {
  background: #38024D;
  border-radius: 10px;
  width: 305px;
}
#input-box {
  background: #2f3640;
  border-radius: 40px;
  width: 200px;
  margin-top: 7px;
  margin-left: 50px;
  height: 25px;
}
#conteudoNome {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 15px;
  line-height: 25px;
  margin-left: 10px;
  width: 155px;
}
#enviarSub {
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background: #2f3640;
  color: #027373;
  font-size: 18px;
  margin-top: 1px;
}
#startCountDown {
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background: #BFCDD9;
  font-size: 20px;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  transition: 0.5s;
}
#botao-clock {
  width: 100%;
  background: #BFCDD9;
  transition: 0.5s;
  border-radius: 10px;
}
#painel-nomes:hover #botao-clock {
  background: #220B5E;
}
#painel-nomes:hover #startCountDown {
  background: #220B5E;
  color: rgb(226, 226, 226);
}
</style>
