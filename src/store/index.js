import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // Will hold all the jokes from initial query
    initialJokes: [],
    // Will hold jokes that are being displayed on the page
    jokes: [],
    // Active selected category:
    selectedCategory: '',
  },
  mutations: {
    filterJokes(state, category) {
      if (category === 'uncategorized') {
        state.jokes = state.initialJokes.filter(joke => joke.categories.length === 0).slice(0, 6);
      } else {
        state.jokes = state.initialJokes.filter(joke => joke.categories.length > 0 && joke.categories[0] === category).slice(0, 6);
      }
    },
    initializeJokes(state, jokesArray) {
      // Initialize like and dislikes
      jokesArray.forEach(joke => {
        joke.likes = 0;
        joke.dislikes = 0;
      })
      state.initialJokes = jokesArray
    },
    addJokes(state, jokesArray) {
      state.jokes = jokesArray;
    },
    findJoke(state, query) {
      state.jokes = state.initialJokes.filter(joke => joke.value.search(new RegExp(query, "i")) > 0);
    },
    resetJokes(state) {
      state.jokes = state.initialJokes;
    },
    deselectCategory(state) {
      state.selectedCategory = '';
      state.jokes = state.initialJokes;
    },
    loadMoreJokes(state) {
      const amountToAdd = 5
      let filteredJokes = [];
      if (state.selectedCategory === '') {
        state.jokes = [...state.jokes, ...state.initialJokes.slice(state.jokes.length, state.jokes.length + amountToAdd)]
      } else if (state.selectedCategory === 'uncategorized') {
        filteredJokes = state.initialJokes
          .filter(joke => joke.categories.length === 0);
      } 
      else {
        filteredJokes = state.initialJokes
          .filter(joke => joke.categories.length > 0 && joke.categories[0] === state.selectedCategory);
      }
      state.jokes = [...state.jokes, ...filteredJokes.slice(state.jokes.length, state.jokes.length + 5)];
    },
    selectCategory(state, category) {
      state.selectedCategory = category;
    },
    like(state, jokeId) {
      const selectedJoke = state.jokes.find((joke) => {
        return joke.id === jokeId
      })
      selectedJoke.likes++;
    },
    dislike(state, jokeId) {
      const selectedJoke = state.jokes.find((joke) => {
        return joke.id === jokeId
      })
      selectedJoke.dislikes++;
    }
  },
  getters: {
    selectedJoke: (state) => (id) => {
      return state.jokes.find(joke => joke.id === id);
    }
  }
})