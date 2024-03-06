<script setup>
import Navbar from "./components/Navbar.vue";
import skills from "./assets/skills.js";
</script>

<template>
  <!-- Navbar 영역 -->
  <Navbar />

  <section id="about" class="container">
    <h1>About</h1>
    <div class="row gx-5">
      <figure class="col-md-6">
        <img src="/images/about-1.jpg" alt="profile" />
        <figcaption></figcaption>
      </figure>
      <p class="col-md-6">안녕하세요, 백엔드 개발자 류찬혁입니다.</p>
    </div>
    <article class="row mt-5">
      <h2>skills</h2>
      <div >
        <div class="row" v-for="skillgroup in skills">
          <h4 class="col-md-12">{{skillgroup.name}}</h4>
          <div class="col-md-6"
               v-for="skill in skillgroup.items">
            <dl>
              <dt class="lead">{{ skill.name }}</dt>
              <dd>
                <div class="progress">
                  <div
                    :class="`progress-bar ${skill.color}`"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    :style="{ width: skill.point }"
                  ></div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped lang="scss">
#about {
  div {
    img {
      width: 100%;
    }
  }
}
</style>
