<template>
  <div>
    <user-alert
      v-if="isVisible"
      title="Delete the User?"
      @close="hide"
    >
      <p>Do you want to continue with deleting a user?</p>
    </user-alert>
    <section>
      <h2>Delete a User</h2>
      <button @click="show">Delete User</button>
    </section>
  </div>
</template>

<script>
import UserAlert from './UserAlert.vue';
import { useAlert } from '../composables';
export default {
  components: {
    UserAlert,
  },
  setup() {
    const [isVisible, show, hide] = useAlert();

    return {
      isVisible,
      show,
      hide
    };
  },
};
</script>