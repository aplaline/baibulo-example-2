<template>
  <div id="app">
    <h1>Hello, world!!!</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{ counter }}</p>
    <button @click="increment">Click me!</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increment () {
      this.counter++
    }
  }
}
</script>

<style>
html, body {
  text-align: center;
}
</style>
