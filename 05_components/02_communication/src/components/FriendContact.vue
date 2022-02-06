<template>
  <li>
    <h2>{{ name }}</h2>
    <h6 v-if="isFavorite">Favorito!</h6>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
      <li>
        <button @click="toggleFavorite">⭐</button>
      </li>
      <li>
        <button @click="deleteContact">Delete contact</button>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite,
    };
  },
  // props: ["name", "emailAddress", "phoneNumber"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: String,
    phoneNumber: String,
    emailAddress: String,
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['toggle-favorite', 'delelte-contact'],
  // emits: {
    // toggleFavorite(id) {
      // if (id) return true;
      // else {
        // console.warn("FriendContact.vue - Id is missing");
        // return false;
      // }
    // },
  // },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteContact() {
      this.$emit("delete-contact", this.id);
    },
  },
};
</script>