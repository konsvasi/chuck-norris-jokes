<template>
  <div class="categories">
    <div v-for="category in displayedCategories" class="categories__entry categories__entry--color" @click="selectCategory(category)" :key="category">
      <p>{{ category }}</p>
    </div>
    <button class="categories__showbutton" @click="viewAll" v-show="displayedCategories.length != categories.length">View all</button>
  </div>
</template>

<script>
import { store } from '../store';
export default {
  name: 'Categories',

  async created() {
    const response = await fetch('https://api.chucknorris.io/jokes/categories');
    this.categories = await response.json();
    this.categories.push('uncategorized');
    // Display the first five categories at the beginning
    this.displayedCategories = this.categories.slice(0, 5);
  },

  data: function() {
    return {
      categories: [],
      displayedCategories: [],
    }
  },

  methods: {
    viewAll() {
      this.displayedCategories = [...this.displayedCategories, ...this.categories.slice(this.displayedCategories.length, this.categories.length)]
    },
    selectCategory(category) {
      store.commit('selectCategory', category);
      store.commit('filterJokes', category)
    }
  },
}
</script>

<style lang="scss" scoped>
  $categoryColors:$my-red, $pastel-orange, $my-orange, $light-gold, $kiwi-green, $weird-green, $sea-blue;
  $categoryColorsLength: length($categoryColors);

  .categories {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 48px;
    grid-gap: 15px;
    padding: 16px;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;

    &__entry {
      border-radius: 2px;
      color: white;
      text-align: center;

      // Assign color to each category element
      @for $i from 1 through $categoryColorsLength {
        &:nth-of-type(#{$categoryColorsLength}n+#{$i}) {
          background-color: nth($categoryColors, $i);     
        }
        &:nth-of-type(#{$categoryColorsLength}n+#{$i}):hover {
          background-color: darken(nth($categoryColors, $i), 10%)
        }
        
      }
    }

    &__showbutton {
      border: 1px solid $link-color;
      background-color: transparent;
      color: $link-color;
      font-size: 14px;
      font-weight: 600;
      border-radius: 2px;
    }

    @media(min-width: 600px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
</style>