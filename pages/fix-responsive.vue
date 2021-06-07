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
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.page-wrap {
  width: 800px;
  margin: 20px auto;
}

.main-story {
  position: relative;
  margin: 0 0 25px 0;
}

img {
  display: block;
}

a {
  color: lightblue;
}

.story-intro {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
  padding: 20px;
  color: white;
}

h1 {
   font-size: 4em;
}
h1, h2 {
  margin: 0 0 10px 0;
}

.story-intro h1 {
  font-size: 2.5em;
}
.story-intro p {
  margin: 0;
}

.sub-stories {
  overflow: hidden;
  margin: 0 0 25px 0;
}

.sub-story {
  float: left;
  width: 250px;
  margin-right: 25px;
  position: relative;
  font-size: 80%;
}

.last {
  margin-right: 0;
}
</style>
