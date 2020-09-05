<template>
    <section id="chat">
        
        <div id="highlightsBox">
            <div v-for="highlight in highlights" :key="highlight.key">
                <span id="content">{{highlight.content}}</span>---@<span id="user">{{highlight.user}}</span>
                <button @click="upVote(highlight)">UP:{{highlight.ups}}</button>
            </div>
        </div>
        <h1>Chat:</h1>
        <div id="msgBox">
            <div v-for="message in messages" :key="message.key">
                <span id="content">{{message.content}}</span>---@<span id="user">{{message.user}}</span>
                <button @click="upVote(message)">UP:{{message.ups}}</button>
            </div>
        </div>
        <div>
            <input type="text" placeholder="Insira sua mensagem aqui" v-model="inputMessage">
            <button @click="sendMessage()">enviar</button>
        </div>
    </section>    

</template>

<script>
export default {

    data(){
        return {
            user: "oscar",
            count: 0,
            messages:[],
            highlights:[],
            inputMessage: "",
        }

    },

    methods:{
        sendMessage() {
            this.messages.push({key: this.count,
                                content: this.inputMessage,
                                user: this.user,
                                ups: 0,
                                highlighted: false});
            this.count++;
        },

        upVote(message) {
            message.ups++;
            if (message.ups >= 10 && !message.highlighted) {
                message.highlighted = true;
                this.highlights.push(message);};
        },
    },

}
</script>

<style scoped>
    #msgBox {
            width:  350px;
            height: 400px;
            border-style: solid;
            overflow: auto;
        }
    
    #highlightsBox {
            width:  350px;
            height: 200px;
            border-style: solid;
            overflow: auto;
        }
</style>