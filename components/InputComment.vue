<template>
    <b-form @submit.prevent="submit" class="pb-2 mb-5">
        <label for="name">Name</label>
        <b-form-input v-model="name" name="name" type="text" />
        <label for="email" class="mt-2">Email</label>
        <b-form-input v-model="email" name="email" type="email" />
        <label for="content">Comment</label>
        <b-form-textarea name="content" cols="30" rows="4" placeholder="Your comment here..." v-model="content"></b-form-textarea>
        <b-button type="submit" block class="mt-3 mb-2">Comment</b-button>
    </b-form>
</template>

<script>
export default {
  name: 'InputComment',
  data() {
    return {
      name: '',
      email: '',
      content: '',
    }
  },
  methods: {
    submit(e) {
      this.$emit('submit', {
        name: this.name,
        email: this.email,
        content: this.content.slice(0, 120),
      })
      this.name = ''
      this.email = ''
      this.content = ''
    },
  },
}
</script>