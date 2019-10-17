<template>
  <div class="joke-card">
    <img src="../assets/icons/thunder-icon.svg" alt="thunder icon"/>
    <h3 class="joke-card__category">{{ category | categoryName }}</h3>
    <p class="joke-card__content">{{ content }}</p>
    <router-link :to="{name: 'joke', params: { id: `${id}`, category: `${this.$options.filters.categoryName(category)}`, content: `${content}`}}" class="joke-card__stats">
      See stats
      <img class="joke-card__stats__icon--right" src="../assets/icons/path.svg" alt="Arrow icon" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'JokeCard',
  props: ['category', 'content', 'id'],

  filters: {
    // Filter to display the category name of the joke
    // if it doesn't belong to a category it returns 'Uncategorized'
    categoryName: (value) => {
      return value.length === 0 ? 'Uncategorized' : `${value[0].toUpperCase()} JOKE`;
    }
  },
}
</script>

<style lang="scss" scoped>
  .joke-card {
    display: grid;
    background-color: white;
    grid-template-columns: 20px 1fr;
    align-items: center;
    padding: 16px;
    border-radius: 2px;
    border: 1px solid #ecebe9;
    margin-bottom: 20px;

    &:hover {
      box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.15);
    }

    &__category {
      font-size: 16px;
      font-weight: 600;
      margin: 0;
    }

    &__content {
      grid-column: 1 / -1;
      font-size: 14px;
      margin: 0;
    }

    &__stats {
      grid-column: 2;
      justify-self: end;
      align-self: end;
      color: #cfb995;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.43;
      text-decoration: none;

      &__icon--right {
        margin-left: 10px;
        vertical-align: middle;
      }
    }

    @media(min-width: 600px) {
      min-height: 240px;
    }
  }
</style>