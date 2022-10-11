<template>
  <b-container class="bg-light p-2 mt-3">
    <b-row>
      <b
        ><b-col>{{ author }} - {{ authorEmail }}</b-col></b
      >
      <b-col class="text-right"
        ><i>{{ new Date(created).toLocaleDateString() }}</i></b-col
      >
    </b-row>
    <p class="mt-3">{{ content }}</p>
  </b-container>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    author: {
      type: String,
      defaut: "Anonym",
    },
    authorEmail: {
      type: String,
      default: "Unknow email",
    },
    content: {
      type: String,
      default: "",
    },
    created: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
b {
  color: gray;
}
</style>
