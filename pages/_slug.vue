<template>
    <b-container class="mt-4">
      <article>
        <h1>{{ post.title }}</h1>
        <div>
          <b class="mb-0">By {{ post.author }}</b><br />
          <i><small>Publication date: {{ post.updated }}</small></i>
        </div>
        <p class="mt-3">{{ post.description }}</p>
        <figure>
            <b-img :src="post.cover" fluid-grow :alt="post.cover" />
            <i><small><figcaption class="text-right mt-1 text-secondary">Cover - {{ post.title }}</figcaption></small></i>
        </figure>
        <VueMarkdown>{{ post.content }}</VueMarkdown>
      </article>
    </b-container>
  </template>
  
  <script>
    import VueMarkdown from 'vue-markdown'
  export default {
    name: 'ArticlePage',
    components: { VueMarkdown },
    data() {
      return {
        post:{
          slug: 'my-first-post',
          title: 'My First Post',
          author: 'Samuel Montoya',
          updated: '29/09/2022',
          description: 'Here is the description of the article',
          cover: 'https://via.placeholder.com/1024x420',
          content: '# Title\n\n## Second title\n\nHere is the content of the blog'
        }
      }
    },
    head() {
      return {
       title : this.post?.title,
       meta: [{ name: 'description', content: this.post?.description || '' }]
      }
    },
  }
  </script>