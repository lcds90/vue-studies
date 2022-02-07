<template>
  <div>
    <p>Computed Data Component</p>
    <span>{{ nameAndAge }}</span>
    <hr />
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ['name', 'age'],
  setup(props, context) {
    console.dir(context);
    const nameAndAge = computed(() => {
      context.emit('nameChanged', { name: props.name, age: props.age });
      return props.name + ' com idade de: ' + props.age;
    });

    return {
      nameAndAge,
    };
  },
};
</script>