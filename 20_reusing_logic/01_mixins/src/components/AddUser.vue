<template>
  <div>
    <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
      <p>Do you want to continue with adding a user?</p>
    </user-alert>
    <section>
      <h2>Add a User</h2>
      <button @click="showAlert">Add User</button>
    </section>
  </div>
</template>

<script>
import UserAlert from '../components/UserAlert.vue';
import alertMixin from '../mixins/alert.js';
export default {
  data(){
    return {
        name: 'add-user',
    }
  },
  components: {
    UserAlert,
  },
  mixins: [alertMixin],
};
</script>