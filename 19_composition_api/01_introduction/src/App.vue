<template>
  <section class="container">
    <div>
      <p>Computed value (uName + uAge)</p>
      <h2>{{ phrase }}</h2>
      <p>
        Only name and age from user reactive (toRefs) <br />
        {{ `${name} - ${age}` }}
      </p>

      <div>
        Add note
        <input type="text" placeholder="Add note" ref="getNote" />
        <button @click="setNote">Add</button>
        <details v-if="notes.length > 0">
          <summary>Notes</summary>
          <p v-for="note in notes" :key="note">
            {{ note }}
          </p>
        </details>
      </div>
      <details v-if="user.changes.length > 0">
        <summary>History</summary>
        <p v-for="change in user.changes" :key="change.newValue">
          {{
            `Old value: ${change.oldValue} was replaced with ${change.newValue}`
          }}
        </p>
      </details>
    </div>
    <div>
      <button @click="setAgeFromBtn">+1 on user.age</button> <br />
      <input
        type="text"
        placeholder="Nome (uName)"
        title="Nome (uName)"
        @input="setName"
      />
      <input
        type="number"
        placeholder="Idade (uAge)"
        title="Idade (uAge)"
        @input="setAge"
      />
    </div>
    <details class="vmodel">
      <summary>v-model</summary>
      Two way data binding!
      <input
        type="text"
        placeholder="Nome (uName)"
        title="Nome (uName)"
        v-model="uName"
      />
      <input
        type="number"
        placeholder="Idade (uAge)"
        title="Idade (uAge)"
        v-model="uAge"
      />
    </details>
    <div style="grid-column: span 2">
      <h2>ComputedData Thourgh Props and Provide + Inject</h2>
      <computed-data @name-changed="getNameChanged" :name="name" :age="age" />
      <injected-data />
    </div>
  </section>
</template>

<script>
import {
  computed,
  isReactive,
  isRef,
  reactive,
  ref,
  toRefs,
  toRaw,
  watch,
  provide,
} from 'vue';
import ComputedData from './components/ComputedData.vue';
import InjectedData from './components/InjectedData.vue';
export default {
  components: {
    ComputedData,
    InjectedData,
  },
  setup() {
    // =======================================================
    // Reactive Data

    const uName = ref('Leonardo Santos');
    const uAge = ref(25); // prefer, singles values
    // const user = ref({ name: 'Leonardo', age: 23 })
    const user = reactive({ name: 'Leonardo', age: 24, changes: [] }); // only objects
    const userToRefs = toRefs(user);
    const notes = ref([]);
    const getNote = ref(null);

    // =======================================================
    // Provide
    provide('userNotes', notes);

    setTimeout(() => {
      console.log('Depois de 1 ano....');
      // user.value.name = 'Leonardo Conceição dos Santos';
      // user.value.age = 24;
      user.name = 'Leonardo Conceição dos Santos';
      user.age = 24;
    }, 2000);
    console.warn(
      `isRef - uName (value): ${isRef(uName.value)}, uAge: ${isRef(uAge)}`
    );
    console.warn(
      `isReactive - user (name): ${isReactive(
        user.name
      )}, user (object): ${isReactive(user)}`
    );
    console.warn(
      `isRef (toRefs) - user (name): ${isRef(
        userToRefs.name
      )}, userToRefs (object): ${isRef(userToRefs)}`
    );

    // =======================================================
    // Functions
    const setAgeFromBtn = () => {
      user.age += 1;
    };
    const setName = ({ target: { value } }) => (uName.value = value);
    const setAge = ({ target: { value } }) => (uAge.value = value);

    const setNote = () => {
      const input = toRaw(getNote.value); // Retorna somente o elemento HTML
      notes.value.push(input.value);
    };

    // =======================================================
    // Emits (nameChanged)
    const getNameChanged = ({ name, age }) => {
      console.error(
        'Foi emitido "nameChanged" e disparado com "getNameChanged"',
        `${name} - ${age}`
      );
    };

    // =======================================================
    // Computed
    const phrase = computed(() => `${uName.value}, com idade de ${uAge.value}`);

    // =======================================================
    // Watch
    // If array, consider index, then newValue[0], oldValue[0] its the first dependency
    // If standalone only newVaue and oldValue
    watch([userToRefs.age, userToRefs.name], (newValue, oldValue) => {
      console.info(`newValue: ${newValue[0]}, oldValue: ${oldValue[0]}`);
      console.info(`newValue: ${newValue[1]}, oldValue: ${oldValue[1]}`);
      user.changes.push({
        newValue: JSON.stringify(newValue),
        oldValue: JSON.stringify(oldValue),
      });
    });
    return {
      user,
      name: userToRefs.name,
      age: userToRefs.age,
      phrase,
      getNameChanged,
      setName,
      setAge,
      setAgeFromBtn,
      setNote,
      uAge,
      uName,
      getNote,
      notes,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 0.5rem auto;
  max-width: 60rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
  display: grid;
  grid: 1fr min-content / 1fr min-content;
}

.container div {
  display: grid;
  gap: 50px;
  margin: 25px;
  padding: 25px;
  box-shadow: 0 10px 5px rgba(0, 0, 0, 0.6);
  border: 2.5px solid black;
}

.vmodel {
  grid-column: span 2;
  margin: 25px;
}
</style>