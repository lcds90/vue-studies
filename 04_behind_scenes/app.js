const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      console.log('refs', this.$refs);
      console.dir(this.$refs.userText);
      const value = this.$refs.userText.value
      this.message = value;
      
    },
  },
  beforeCreate(){
    console.log('beforeCreate() is executed even before Vue app is initialized');
  },
  created(){
    console.log('created() is executed when its created but not mounted');
  },
  beforeMount(){
    console.log('beforeMount() is executed before mounted')
  },
  mounted(){
    console.log('mounted() is executed when the instance is mounted');
    const that = this;
    setTimeout(() => {
      that.message = 'Love Vue!'
    }, 2000)
  },
  beforeUpdate(){
    console.log('beforeUpdate() is executed before updating when something changes');
  },
  updated(){
    console.log('update() is executed when something changes');
  },
  beforeUnmount(){
    console.log('beforeUnmount() is executed before the instance is unmounted');
  },
  unmounted(){
    console.log('unmounted() is executed when the instance is "killed"');
  }
});

app.mount('#app');

setTimeout(() => {
  app.unmount();
}, 4000)

const app2 = Vue.createApp({
  template: `
    <p>{{favoriteMeal}}</p>`,
  data(){
    return {
      favoriteMeal: 'Strongonoff'
    }
  },
})

app2.mount('#app2');
/* 
LINK https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463370 
const data = { 
  message: 'Hello!',
  longMessage: 'Hello World'
}

const handler = {
  set(target, key, value){
    console.log(target);
    console.log(key);
    console.log(value);
    if(key === 'message'){
      target.longMessage = value + ' World'
    }
    target.message = value;
  }
}

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';
console.log(proxy.longMessage);
*/