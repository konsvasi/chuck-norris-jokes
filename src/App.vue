<template>
  <div id="app">
    <navbar></navbar>
    <search-input></search-input>
    <router-view></router-view>
    <footer>
    
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';
export default {
  name: 'app',
  components: {
    Navbar,
    SearchInput,
  }
}
</script>

<style>
  #app {
    display: grid;
    grid-template-columns: 1fr;
  }
</style>
