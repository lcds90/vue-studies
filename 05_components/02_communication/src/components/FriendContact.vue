<template>
  <li>
    <h2>{{ name }}</h2>
    <h6 v-if="friendIsFavorite">Favorito!</h6>
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
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
    };
  },
  // props: ["name", "emailAddress", "phoneNumber"],
  props: {
    name: String,
    phoneNumber: String,
    emailAddress: String,
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite;
    },
  },
};
</script>