<template>
  <div class="jokes" v-if="jokes.length">
    <div v-show="activeCategory.length" class="jokes__active-category">{{ activeCategory }}</div>
    <joke-card v-for="joke in jokes" :key="joke.id" :category="joke.categories" :content="joke.value" :id="joke.id"></joke-card>
    <button class="jokes__button-more" v-show="jokes.length >= 6" @click="loadMore">View more<img class="jokes__button-more__arrow" src="../assets/icons/path-down.svg"/></button>
  </div>
  <div v-else>
    <div class="nojokes-message">
      <h2>Sorry, no jokes found 😭</h2>
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

    if (this.jokes.length === 1) {
      this.goToSingleJoke();
    }
  },

  updated() {
    if (this.jokes.length === 1) {
      this.goToSingleJoke();
    }
  },

  methods: {
    loadMore() {
      store.commit('loadMoreJokes');
    },
    goToSingleJoke() {
      const joke = this.jokes[0];
      joke.category = joke.categories.length === 0 ? 'Uncategorized' : joke.categories[0];
      this.$router.push({name: 'joke', params:{id: `${joke.id}`, category: `${joke.category}`, content: `${joke.value}`}})
    }
  },

  computed: {
    jokes() {
      return store.state.jokes;
    },
    activeCategory() {
      return store.state.selectedCategory;
    }
  },
}
</script>

<style lang="scss" scoped>
  .jokes {
    display: grid;
    grid-template-columns: 1fr;
    padding: 16px;
    
    &__active-category {
      background-color: $weird-green;
      border-radius: 11px;
      width: 120px;
      padding: 3px;
      color: $white-two;
      text-align: center;
    }
    &__button-more {
      grid-column: 1 / -1;
      border: 1px solid $link-border-color;
      background-color: transparent;
      padding: 14px;
      color: $link-color;
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

      &__active-category {
        grid-column: 1 / -1;
      }

      &__button-more {
        justify-self: center;
        align-self: center;

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