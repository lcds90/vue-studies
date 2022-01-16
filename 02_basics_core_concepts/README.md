# Vue instance

To create a Vue application we need to use the gloal object `Vue`, after initialize with **_createApp_** function, we can pass the functions into the object and this are called options API

```js
const app = Vue.createApp({
	data() {
		return {
			// data
		};
	},
	methods: {
		// methods allow to declare functions which should execute when something happens
	},
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
        <!-- in attribute via v-bind -->
        <a v-bind:href="vueLink">Learn more</a>
        </p>
```

# Events

## Methods
Use with event binding or data binding
Data binding: Method is executed for every "re-render" cycle of the component
Use for events or data that really needs to be re-evaluated all the time

## v-on

Has the responsability to listen to any events that you use as HTML attribute
$event reserved word can be used to access the event default parameter that the browser offers when passing a custom argument on v-on

```HTML
<input type="text" v-on:input="setFirstName">
<input type="text" v-on:input="setLastName($event, 'Santos')">
<p>Full Name: {{ `${firstName} ${lastName}` }}</p>
```

```js
setFirstName(event){
    this.firstName = event.target.value;
},
setLastName(event, lastNameStr){
    this.lastName = `${event.target.value} ${lastNameStr}`
}
```

## Events Modifiers
Vue offers some ways to do some tasks that are normally used in web development
Like the ```event.preventDefault()``` that prevents to like a form html to send the submitted informations to a server and refresh the web page
The way to use is to declare after the event that we want to handle

**Example:** Prevent default from form
```HTML
<form v-on:submit.prevent="submitForm">
        <input type="text" v-on:input="setFirstName">
        <input type="text" v-on:input="setLastName($event, 'Santos')">
        <p>Full Name: {{ `${firstName} ${lastName}` }}</p>
        <button>Sign Up</button>
</form>
```

**Example:** *Only react in the right click*
```HTML
<button v-on:click.right="multiply">Multiply</button>
```

**Example:** *Only on enter pressed change the name*
> Hint: You can use multiples v-on on the same input
```HTML
<input type="text" v-on:input="setFirstName" v-on:keyup.enter="confirmInput">
```

## v-once
You can lock content and preseve the initial state

```HTML
<p v-once>Starting Counter: {{ counter }}</p>
<p>Result: {{ counter }}</p>
```
> The only affected element by render gonna be the second paragraph

## v-model
Two way data binding

# Computed properties

Something important to know about Vue when you declare a function in your HTML template it will be executed again event if other part to be rendered
It will execute the function only if the dependecie was been changed
Even if it as function it is used as like as data property
Used with data binding, data that depends on other data

```HTML
<p>
    Output name (Method vs Computed) <br>
    Method: {{ outputFullname() }} <br>
    Computed: {{ fullname }}
</p>
```

```js

// this code is only executed when firstName or lastName are changed, they are the dependecies
computed: {
    fullname(){
      console.log('fullname in computed being executed');
      if (this.firstName === '' || this.lastName) return ''
      return `${this.firstName} ${this.lastName}`
    }
}

methods: {
// this code will always be executed even if its other data property that is changed
    outputFullname(){
        console.log('fullname in computed being executed');
        if (this.firstName === '' || this.lastName) return ''
        return `${this.firstName} ${this.lastName}`
    }
}
```

# Watch properties

Not used directly in template
Only one data propertie can be used to identified the change in the object declaration
Use for any non-data update you want to make
```js
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
}
```

# Shorthands

For **v-on**: *@* ***(@click, @input, etc)***

For **v-bind**: *:* ***(:value, :src, etc)***