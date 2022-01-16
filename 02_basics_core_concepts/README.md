# Vue instance
To create a Vue application we need to use the gloal object ```Vue```, after initialize with ***createApp*** function, we can pass the functions into the object and this are called options API 
```js
const app = Vue.createApp({
	data() {
		return {
			// data
		};
	},
    methods: {
        // methods allow to declare functions which should execute when something happens
    }
});
```

# Interpolation

Interpolation is the way we declare functions/variables in data Vue component into HTML or HTML attributes

```HTML
    <!-- in HTML -->
    <p>{{ courseGoal }}</p>
    <!-- you canl call functions but nothing so complex, you can use ternary expressions -->
    <p>{{ outputGoal() }}</p>
    <p>
        <!-- in attribute -->
        <a v-bind:href="vueLink">Learn more</a>
        </p>
```
