<template>
  <a href="/" class="logo">Company</a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
/* See https://css-tricks.com/the-image-replacement-museum/ */
/* 2012: Scott Kellum Method */
.logo {
  content: url("https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d");
  display: inline-block;
  font-size: 0;
  line-height: 0;
  height: 100px;
  width: 100px;
}
/* 2012: H5BP Image Replacement */
/* .logo {
  content: url("https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d");
  display: inline-block;
  border: 0;
  font: 0/0 a;
  text-shadow: none;
  color: transparent;
  width: 100px;
  height: 100px;
} */
/* 2010: Improved NIR (Nash Image Replacement) */
/* .logo:before {
  content: url("https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d");
  display: inline-block;
  font-size: 0;
  line-height: 0;
} */
/* 2007: Yet Another Image Replacement Method */
/* .logo {
  display: inline-block;
  text-indent: -3000px;
  font: 0/0 Arial;
  overflow: hidden;
  color: rgba(255, 255, 255, 0);

  width: 50px;
  height: 50px;
  content: url("https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d");
} */
</style>
