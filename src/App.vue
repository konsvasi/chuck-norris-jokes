<template>
  <div id="app">
    <nav>

    </nav>
    <div>

    </div>
    <router-view></router-view>
    <footer>
    
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
  #app {
    display: grid;
    grid-template-columns: 1fr;
  }
</style>
