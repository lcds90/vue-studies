const app = Vue.createApp({
	data() {
		return {
			enteredGoal: '',
			goals: [],
			showGoals: false,
			person: { name: 'Leonardo', age: 24 },
		};
	},
	watch: {
		goals() {
			if (this.goals.length > 0) this.showGoals = true;
			else this.showGoals = false;
		},
	},
	methods: {
		addGoal() {
			this.goals.push(this.enteredGoal);
		},
		removeGoal(index){
			this.goals.splice(index, 1)
		}
	},
});

app.mount('#user-goals');
console.log('ok');