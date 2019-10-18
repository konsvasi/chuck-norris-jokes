<template>
  <div class="jokes" v-if="jokes.length">
    <div class="jokes__active_category">Category</div>
    <joke-card v-for="joke in jokes" :key="joke.id" :category="joke.categories" :content="joke.value" :id="joke.id"></joke-card>
    <button class="jokes__button-more" v-show="jokes.length >= 6" @click="loadMore">View more<img class="jokes__button-more__arrow" src="../assets/icons/path-down.svg"/></button>
  </div>
  <div v-else>
    <div class="nojokes-message">
      <h2>Sorry, no jokes found</h2>
    </div>
  </div>
</template>

<script>
import { store } from '../store';
import JokeCard from './JokeCard';
export default {
  name: 'Jokes',

  components: {
    JokeCard,
  },

  async created() {
    if (store.state.initialJokes.length === 0) {
      const response = await fetch('https://api.chucknorris.io/jokes/search?query=all');
      const data = await response.json();
      store.commit('initializeJokes', data.result);
      store.commit('addJokes', data.result.slice(0, 6));
      }
  },

  methods: {
    loadMore() {
      store.commit('loadMoreJokes');
    }
  },

  computed: {
    jokes() {
      return store.state.jokes;
    }
  },
}
</script>

<style lang="scss" scoped>
  .jokes {
    display: grid;
    grid-template-columns: 1fr;
    padding: 16px;
    
    &__button-more {
      grid-column: 1 / -1;
      border: 1px solid #d1bb91;
      background-color: transparent;
      padding: 14px;
      color: #cfb995;
      font-size: 14px;
      font-weight: 600;
      border-radius: 2px;

      &__arrow {
        margin-left: 14px;
      }
    }

    @media(min-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 15px;

      &__active_category {
        grid-column: 1 / -1;
      }

      &__button-more {
        justify-self: center;
        align-self: center;
        border: 1px solid #d1bb91;
        background-color: transparent;
        color: #cfb995;
        font-size: 14px;
        font-weight: 600;
        border-radius: 2px;

        &__arrow {
          width: 11px;
          height: 16px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
  .nojokes-message {
    h2 {
      text-align: center;
    }
  }
</style>