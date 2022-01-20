const randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const app = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			currentHit: 0,
			resultOfGame: null,
			logs: [],
		};
	},
	computed: {
		playerHealthBar() {
			if (this.monsterHealthBar < 0) return { width: '0%' };
			return { width: `${this.playerHealth}%` };
		},
		monsterHealthBar() {
			if (this.playerHealth < 0) return { width: '0%' };
			return { width: `${this.monsterHealth}%` };
		},
		mayUseSpecialAttack() {
			return this.currentHit % 3 !== 0;
		},
		isGameOver() {
			return this.resultOfGame !== null;
		},
	},
	watch: {
		playerHealth(pHealth) {
			if (pHealth < 0 && this.monsterHealth <= 0) {
				this.resultOfGame = 'draw';
			} else if (pHealth < 0) {
				this.resultOfGame = 'monster';
			}
		},
		monsterHealth(eHealth) {
			if (eHealth < 0 && this.playerHealth <= 0) {
				this.resultOfGame = 'draw';
			} else if (eHealth < 0) {
				this.resultOfGame = 'player';
			}
		},
	},
	methods: {
		startGame() {
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.resultOfGame = null;
			this.currentHit = 0;
		},
		attackMonster() {
			this.currentHit++;
			const hit = randomValue(3, 12);
			this.monsterHealth -= hit;
			this.addLogMessage('player', 'attack', hit);
			this.attackPlayer();
		},
		attackPlayer() {
			const hit = randomValue(10, 25);
			this.addLogMessage('monster', 'attack', hit);
			this.playerHealth -= hit;
		},
		healPlayer() {
			const heal = randomValue(40, 80);
			if (this.playerHealth + heal > 100) {
				this.playerHealth = 100;
			} else {
				this.playerHealth += heal;
			}
			this.addLogMessage('player', 'heal', heal);
			this.attackPlayer();
		},
		specialAttackMonster() {
			this.currentHit++;
			const hit = randomValue(10, 25);
			this.addLogMessage('player', 'special attack', hit);
			this.monsterHealth -= hit;
			this.attackPlayer();
		},
		surrender() {
			this.resultOfGame = 'monster';
		},
		addLogMessage(who, what, value) {
			this.logs.unshift({
				actionBy: who,
				actionType: what,
				actionValue: value,
			});
		},
		dynamicColorCharacter(who){
			if(who === 'player') return 'log--player'
			else return 'log--monster'
		}
	},
});

app.mount('#game');
