<template>
    <div class="border border-secondary m-2 p-3">
      <h3>{{ title }}</h3>
      <div>
        <p class="fw-semibold mb-0">Por {{ author }}</p>
        <small class="fst-italic">Fecha de publicación: {{ date }}</small>
      </div>
      <figure>
        <b-img :src="cover" alt="cover" fluid/>
      </figure>
      <div class="actions row justify-content-center">
        <a class="btn btn-secondary btn-post" :href="slug">Ir al post</a>
      </div>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
      name:'ArticleCard',
      props:{
          slug: {
              type: String,
              default: '',
          },
          title: {
              type: String,
              default: '',
          },
          author: {
              type: String,
              default: '',
          },
          date: {
              type: Date,
              default: '',
          },
          cover: {
              type: String,
              default: '',
          },
          description: {
              type: String,
              default: '',
          }
      }
  }
  </script>
  
  <style>
      .btn-post {
          width: 6rem; 
      }
  </style>