<template>
  <div class="page-wrap">

    <h1>Make This Responsive</h1>

    <p>While maintaining the hierarchy of importance.</p>

    <article class="main-story">

      <img src="/she-ra.jpg" alt="Sha Ra Rocking"/>

      <div class="story-intro">
        <h1>Most Important Story</h1>
        <p>This article has the most visual weight. <a href="http://nebezial.deviantart.com/art/she-ra-115867096">image source.</a></p>
      </div>

    </article>

    <section class="sub-stories">

      <article class="sub-story">
        <img src="/kitten.jpg"/>
        <div class="story-intro">
          <h2>Less Important Story</h2>
          <p>This story has less visual weight.</p>
        </div>
      </article>

      <article class="sub-story">
        <img src="/nick-cage.jpg"/>
        <div class="story-intro">
          <h2>Less Important Story</h2>
          <p>This story has less visual weight.</p>
        </div>
      </article>

      <article class="sub-story last">
        <img src="/bears.jpg"/>
        <div class="story-intro">
          <h2>Less Important Story</h2>
          <p>This story has less visual weight.</p>
        </div>
      </article>

    </section>

  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
.page-wrap {
  width: 100%;
  margin: 20px auto;
}

.main-story {
  padding-top: 25px;
}

.main-story img {
  aspect-ratio: 16 / 9;
  min-height: 400px;
}

img {
  aspect-ratio: 1;
}

img {
  width: 100%;
}

a {
  color: lightblue;
}

.story-intro {
  position: relative;
  bottom: 80px;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
  padding: 20px;
  color: white;
}

.main-story .story-intro {
  bottom: 120px;
}

h1 {
  font-size: 4em;
  text-align: center;
}
h1,
h2 {
  margin: 0 0 10px 0;
}

p {
  text-align: center;
}

.story-intro h1 {
  font-size: 2.5em;
}
.story-intro p {
  margin: 0;
}

.sub-stories {
  display: flex;
  flex-wrap: wrap;
  margin-top: -100px;
}

@media only screen and (min-device-width: 768px) {
  .sub-stories {
    flex-wrap: nowrap;
  }
  .sub-story {
    padding: 10px;
  }
}

.sub-story {
  flex-grow: 1;
  font-size: 80%;
}
</style>
