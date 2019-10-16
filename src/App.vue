<template>
  <div id="app">
    <navbar></navbar>
    <div>

    </div>
    <router-view></router-view>
    <footer>
    
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
  #app {
    display: grid;
    grid-template-columns: 1fr;
  }
</style>
