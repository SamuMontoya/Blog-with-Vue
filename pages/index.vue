<template>
  <div>
    <b-container fluid>
      <AboutMe /><!-- Bring the Component -->
      <main class="p-5">
        <b-row class="justify-content-center">
          <b-col sm="6" lg="4" v-for="article in articles" :key="article.slug">
            <ArticleCard 
              v-bind="article"
            />
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
      articles: [
        {
          title:'My First Post',
          slug: 'my-first-post',
          date: new Date()
        }
      ],
    };
  },
};
</script>
