const app = Vue.createApp({
    data(){
        return {
            name: 'Leonardo',
            age: 24,
            imgSrc: 'https://br.vuejs.org/images/logo.png',
        }
    },
    methods: {
        randomNumber(){
            return Math.floor(Math.random() * 5);
        },
        calculateAge(){
            return this.age + 5;
        }
    }
})
app.mount('#assignment')