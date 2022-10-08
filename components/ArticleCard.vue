<template>
    <div class="border border-secondary m-2 p-3">
      <NuxtLink class="text-dark" :to="slug"><h3>{{ title }}</h3></NuxtLink>
      <div class="mb-4">
        <p class="fw-semibold mb-0"><b>Por {{ author }}</b></p>
        <small><i>Fecha de publicación: {{ date.toLocaleDateString() }}</i></small>
      </div>
      <figure>
        <b-img :src="cover" alt="cover" fluid/>
      </figure>
      <p>{{ description }}</p>
      <div class="actions row justify-content-center">
        <NuxtLink  class="btn btn-secondary btn-post" :to="slug">Ir al post</NuxtLink>
      </div>
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
    .border {
        border-radius: 0.5rem;
    }
      .btn-post {
          width: 6rem; 
      }
  </style>