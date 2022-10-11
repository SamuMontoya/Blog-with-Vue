<template>
  <div>
    <b-container fluid>
      <AboutMe /><!-- Bring the Component -->
      <main class="p-5">
        <b-row class="justify-content-center">
          <b-col sm="6" lg="4" v-for="article in articles" :key="article.slug">
            <ArticleCard v-bind="article" />
          </b-col>
        </b-row>
      </main>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      articles: [],
    };
  },
  async mounted() {
    const baseUrl =
      location.hostname === "localhost"
        ? "http://localhost:9999"
        : "https://samublog.netlify.app";
    const url = `${baseUrl}/.netlify/functions/articles`;
    const { articles } = await this.$http.$get(url);
    this.articles = articles.map((a) => ({
      ...a,
      author: a["author-name"][0],
      date: new Date(a.updated),
      cover: a.cover[0]?.thumbnails.large.url,
    }));
  },
};
</script>
