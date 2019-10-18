<template>
  <div>
    <categories></categories>
    <jokes></jokes>
  </div>  
</template>

<script>
import Categories from './Categories';
import Jokes from './Jokes';
export default {
  name: 'MainView',

  components: {
    Categories,
    Jokes,
  }
}
</script>
