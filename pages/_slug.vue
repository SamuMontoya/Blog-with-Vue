<template>
    <b-container class="mt-5">
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
    asyncData ({ params, $http }){
      const {slug} = params
      const article = $http.$get(`http://localhost:9999/.netlify/functions/article?slug=${slug}`)
      return article
    }, 
    data() {
      return {
      }
    },
    head() {
      return {
       title : this.post?.title,
       meta: [{ name: 'description', content: this.post?.description || '' }]
      }
    },
    computed: {
      post() {
        return {
          slug: this.article?.slug,
          title: this.article?.title,
          author: this.article['author-name'][0],
          updated: new Date(this.article?.updated).toLocaleDateString(),
          description: this.article?.description,
          cover: this.article?.cover[0].thumbnails.full.url,
          content: this.article?.content
        }
      }
    }
  }
  </script>