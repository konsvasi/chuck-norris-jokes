<template>
  <div class="search-input">
    <div class="search-input__container">
      <input type="text" v-model="query" placeholder="How can we make you laugh today?"/>
      <button class="search-input__button" @click="searchForJoke"></button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  
  data: function() {
    return {
      query: '',
    }
  },

  methods: {
    async searchForJoke() {
      const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${this.query}`);
      const data = await response.json();
    }
  }
}
</script>

<style lang="scss" scoped>
  $input-color: #b2b2b2;
  $input-color__focus: #000000;

  .search-input {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-image: url('../assets/search-input-bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 140px;

    &__container {
      position: relative;
      width: 100%;
    }

    input[type="text"] {
    border-radius: 4px;
    border: solid 1px #fff;
    background: transparent;
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
    color: $input-color;

      &:focus {
        background: white;
        color: $input-color__focus;
      }

      &:focus + button {
        background-image: url('../assets/search-icon__black.svg');
        background-repeat: no-repeat;
        background-color: transparent;
        background-size: cover;
        border: none;
      }
    }

    ::placeholder {
      color: $input-color;
    }

    &__button {
      position: absolute;
      top: 5px;
      right: 5px;
      background-image: url('../assets/search-icon.svg');
      background-repeat: no-repeat;
      background-color: transparent;
      background-size: cover;
      border: none;
      width: 16px;
      height: 16px;
    }

    @media (min-width: 600px) {
      min-height: 240px;
      &__container {
        width: auto;
      }
      input[type="text"] {
        width: 450px;
        height: 48px;
        font-size: 15px;
        padding: 14px 16px;
      }

      &__button {
        width: 24px;
        height: 24px;
        top: 14px;
        right: 16px;
      }
    }
  }
</style>