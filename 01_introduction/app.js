Vue.createApp({
    data(){
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue)
        }
    }
}).mount('.container');

// =========================== VUE VERSION

/* const listEl = document.querySelector('ul');
const inputEl = document.querySelector('#input')
const addGoal = () => {
    const value = inputEl.value;
    const li = document.createElement('li');
    li.textContent = value;
    listEl.appendChild(li)
    inputEl.value = '';
}

inputEl.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) addGoal()
}) */