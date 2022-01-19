const app = Vue.createApp({
    data(){
        return {
            boxA: false,
            boxB: false,
            boxC: false,
        }
    },
    computed: {
        boxC_classes(){
            if((this.boxA || this.boxB) && this.boxC) return { isAnotherSelectedToo: true,  demo: true, backgroundSelected: this.boxC }
            return { demo: true, backgroundSelected: this.boxC }
        }
    },
    methods: {
        boxSelected(box){
            if(box === 'A') this.boxA = !this.boxA;
            if(box === 'B') this.boxB = !this.boxB;
            if(box === 'C') this.boxC = !this.boxC;
        }
    }
})
app.mount('#styling')