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
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

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