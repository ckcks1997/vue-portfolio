<script setup>
import data from '../assets/portfolio.js'
</script>

<template>
  <section id="portfolio" class="container">
    <h1>Portfolio</h1>
    <ul class="list row">
      <li class="col-md-4" v-for="(portfolioData, i) in data" key="portfolioData.id">
        <img :src="portfolioData.imgUrl" alt="">
        <h3>{{ portfolioData.title }}</h3>
        <p>{{ portfolioData.desc }}</p>
        <small class="mb-3 text-secondary">{{portfolioData.skills}}</small>
        <router-link class="btn btn-primary" :to='"/detail/"+portfolioData.id'>상세보기</router-link>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
#portfolio {
  h1 { margin-bottom: 1rem; }
  .list {
    list-style-type: none;
    padding: 0;

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 10vh;
      img {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        object-position: top;
      }
      h4 { margin-top: 1rem; }
    }
  }
}
</style>