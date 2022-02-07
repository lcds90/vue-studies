<template>
  <div>
    <h2>Injected Data Component</h2>
    <p v-for="d in injectedData" :key="d">{{ d }}</p>
  </div>
</template>

<script>
import { inject, onUpdated } from 'vue';
export default {
  setup() {
    const injectedData = inject('userNotes');
    onUpdated(() => {
        console.log(`onUpdated disparado, ${JSON.stringify(injectedData.value)}`);
    })
    return { injectedData };
  },
};
</script>