const randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const app = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			currentHit: 0,
		};
	},
	computed: {
		playerHealthBar() {
			return { width: `${this.playerHealth}%` };
		},
		monsterHealthBar() {
			return { width: `${this.monsterHealth}%` };
		},
		mayUseSpecialAttack() {
			return this.currentHit % 3 !== 0;
		},
	},
	methods: {
		attackMonster() {
			this.currentHit++;
			const hit = randomValue(3, 12);
			this.monsterHealth -= hit;
			this.attackPlayer();
		},
		attackPlayer() {
			const hit = randomValue(10, 25);
			this.playerHealth -= hit;
		},
		healPlayer() {
			const heal = randomValue(0, 20);
			if (this.playerHealth + heal > 100) {
				this.playerHealth = 100;
			} else {
				this.playerHealth += heal;
			}
		},
		specialAttackMonster() {
			this.currentHit++;
			const hit = randomValue(10, 25);
			this.monsterHealth -= hit;
			this.attackPlayer();
		},
	},
});

app.mount('#game');
