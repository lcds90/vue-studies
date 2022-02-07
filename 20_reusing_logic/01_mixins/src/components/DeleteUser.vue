<template>
  <div>
    <user-alert v-if="alertIsVisible" :title="title" @close="hideAlert">
      <p>Do you want to continue with deleting a user?</p>
    </user-alert>
    <section>
      <h2>Delete a User</h2>
      <button @click="showAlert">Delete User</button>
    </section>
  </div>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixin from '../mixins/alert.js';
export default {
  components: {
    UserAlert,
  },
  data() {
    return {
      name: 'delete-user',
      title: 'Delete the User?',
    };
  },
  mixins: [alertMixin],
};
</script>