<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  props: {
    /**
     * UI Schema Descriptor to use for rendering.
     *
     * @typeref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
     */
    id: {
      type: String,
      required: true,
    },
    topicName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  inject: ['selectTopic'],
};
</script>