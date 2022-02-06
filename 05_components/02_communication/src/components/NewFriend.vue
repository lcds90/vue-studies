<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">
        Name
        <input type="text" id="name" v-model="name" />
      </label>
    </div>
    <div>
      <label for="phone">
        Phone
        <input type="tel" id="phone" v-model="phone" />
      </label>
    </div>
    <div>
      <label for="email">
        Email
        <input type="email" id="email" v-model="email" />
      </label>
    </div>
    <div>
        <button>Add</button>
    </div>
  </form>
</template>

<script>
export default {
    data(){
        return {
            name: '',
            phone: '',
            email: '',
        }
    },
    emits: ['add-contact'],
    methods: {
        submitData(){
            const friend = {
                id: new Date().toISOString(),
                name: this.name,
                phone: this.phone,
                email: this.email,
                isFavorite: false,
            }
            this.$emit('add-contact', friend)
        }
    }
};
</script>

<style>
</style>