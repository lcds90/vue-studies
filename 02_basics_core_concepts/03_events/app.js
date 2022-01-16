const app = Vue.createApp({
	data() {
		return {
			counter: 0,
      firstName: '',
      lastName: '',
      confirmedName: '',
		};
	},
  computed: {
    fullname(){
      console.log('fullname in computed being executed');
      if(this.firstName === '' || this.lastName) return ''
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    // whenever the confirmedName in computed or data properties change this code will be executed
    confirmedName(value, oldValue){
      console.table([`New name: ${value}`, `Old name: ${oldValue}`], ['Confirmed names']);
    },
    counter(v){
      if(v > 50){
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000)
      }
    }
  },
	methods: {
		add() {
			this.counter = this.counter + 20;
		},
		remove(n) {
			this.counter = this.counter - n;
		},
    setFirstName(event){
      this.firstName = event.target.value;
    },
    setLastName(event, _lastNameStr){
      this.lastName = event.target.value
    },
    submitForm(){
      console.info(`User logged as ${this.confirmedName}`)
    },
    submitName(){
      this.confirmedName = `${this.firstName} ${this.lastName}`
    },
    outputFullname(){
      console.log('outputFullname in methods being executed (even if firstName or lastName not changing');
      if(this.firstName === '' || this.lastName) return ''
      return `${this.firstName} ${this.lastName}`
    },
    resetInput(){
      this.firstName = '';
      this.lastName = '';
      this.confirmedName = '';
    }
	},
});

app.mount('#events');
