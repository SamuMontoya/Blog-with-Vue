<template>
  <b-container class="mt-5">
    <article>
      <h1>{{ post.title }}</h1>
      <div>
        <b class="mb-0">By {{ post.author }}</b
        ><br />
        <i
          ><small>Publication date: {{ post.updated }}</small></i
        >
      </div>
      <p class="mt-3">{{ post.description }}</p>
      <figure>
        <b-img :src="post.cover" fluid-grow :alt="post.cover" />
        <i
          ><small
            ><figcaption class="text-right mt-1 text-secondary">
              Cover - {{ post.title }}
            </figcaption></small
          ></i
        >
      </figure>
      <VueMarkdown>{{ post.content }}</VueMarkdown>
      <b-container style="background-color:rgb(238, 238, 238)">
        <div class="text-center p-3">
          <h3>Comments</h3>
          <small>There are {{ article["total-comments"] || 0 }} comment(s)</small>
        </div>
        <div>
          <CommentItem
            v-for="comment in comments"
            :key="comment._id"
            v-bind="comment"
          />
        </div><hr />
        <div>
          <InputComment  @submit="createComment" />
        </div>
      </b-container>
    </article>
  </b-container>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "ArticlePage",
  components: { VueMarkdown },
  asyncData({ params, $http, isDev }) {
    const { slug } = params
    const url = isDev ? 'http://localhost:9999' : 'https://samublog.netlify.app';
    const article = $http.$get(
      `${url}/.netlify/functions/article?slug=${slug}`
    )
    return article
  },
  head() {
    return {
      title: this.post?.title,
      meta: [{ name: "description", content: this.post?.description || "" }],
    };
  },
  computed: {
    post() {
      return {
        slug: this.article?.slug,
        title: this.article?.title,
        author: this.article["author-name"][0],
        updated: new Date(this.article?.updated).toLocaleDateString(),
        description: this.article?.description,
        cover: this.article?.cover[0].thumbnails.full.url,
        content: this.article?.content,
      };
    },
  },
  methods: {
    async createComment(comment) {
      this.$nuxt.$loading.start()
      const url =
        location.hostname === 'localhost'
          ? 'http://localhost:9999'
          : 'https://samublog.netlify.app'
      await fetch(
        `${url}/.netlify/functions/comment?article=${this.article._id}`,
        { method: 'post', body: JSON.stringify(comment) }
      )
      this.$nuxt.refresh()
      this.$nuxt.$loading.finish()
    },
  },
};
</script>