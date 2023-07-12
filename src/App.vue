<script setup>

import TopHeader from './components/topHeader.vue'

</script>

<template>
  <TopHeader />
</template>

<style>
  body {
    margin: 0;
    font-family: sans-serif, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue";
  }

  img {
    max-width: 100%;
  }

  button {
    cursor: pointer;
    color: #fff;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
  }

</style>