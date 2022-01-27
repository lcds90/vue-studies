const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: 'fabio',
					name: 'Fabio Cleiton',
					phone: '20139 019230129',
					email: 'email@email.com',
				},
				{
					id: 'leonardo',
					name: 'Leonardo Santos',
					phone: '21312 32139',
					email: 'email@email.com',
				},
			],
		};
	}
});

app.component('friend-contact', {
    template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button>Show Details</button>
    <ul>
        <li><strong>Phone:</strong>{{ friend.phone }}</li>
        <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
</li>`,
    data(){
        return {
            detailsAreVisible: false,
            friend: {}
        }
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
})

app.mount('#app');
