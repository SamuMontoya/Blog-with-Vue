<template>
  <div>
    <b-container fluid>
      <AboutMe /><!-- Bring the Component -->
      <main class="p-5">
        <b-row class="justify-content-center">
          <b-col sm="6" lg="4" v-for="article in articles" :key="article.slug">
            <ArticleCard />
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
      articles: [1, 2, 3, 4],
    };
  },
};
</script>
