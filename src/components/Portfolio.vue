<script setup>
import data from '../assets/portfolio.js'

const gotoLink = (e) =>{
  window.open(e.currentTarget.getAttribute('link_data'))
}
</script>

<template>
  <section id="portfolio" class="container">
    <h1>Portfolio</h1>
    <ul class="list row">
      <li class="col-md-4" v-for="(portfolioData, i) in data" key="portfolioData.id">
        <img :src="portfolioData.imgUrl" alt="" style="align-content: center; margin-bottom: 10px;">
        <h3>{{ portfolioData.title }}</h3>
        <p>{{ portfolioData.desc }}</p>
        <small class="mb-3 text-secondary">{{portfolioData.skills}}</small>
        <button @click="gotoLink" class="btn btn-primary" :link_data="portfolioData.link">상세보기</button>
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