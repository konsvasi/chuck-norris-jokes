<template>
  <div class="search-input-container">
    <input placeholder="How can we make you laugh today?"/>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
}
</script>

<style lang="scss" scoped>
  $input-color: #b2b2b2;
  $input-color__focus: #000000;

  .search-input-container {
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

    input {
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
    }

    ::placeholder {
      color: $input-color;
    }

    @media (min-width: 600px) {
      min-height: 240px;

      input {
        width: 450px;
        height: 48px;
        font-size: 15px;
        padding: 14px 16px;
      }
    }
  }
</style>