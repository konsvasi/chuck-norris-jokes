<template>
  <div class="joke">
    <div class="joke__back-button" @click="$router.push('/')"><img src="../assets/icons/arrow-left.svg" alt="back button"/></div>
    <div class="joke__card">
      <div class="joke__card__header">
        <div class="joke__card__header__category">{{ category }}</div>
          <ul class="joke__card__header__popularity"
         :class="popularityStyleObject">
            <li>{{ popularity }}</li>
          </ul>
      </div>
      <div class="joke__card__content">{{ content }}</div>
    </div>
    <div class="joke__stats">
      <div class="joke__stats__item" @click="like()">
        <div class="joke__stats__item__button joke__stats__item__button--like"></div>
        <p class="joke__stats__item__number">{{ likes }}</p>
      </div>
      <div class="joke__stats__item joke__stats__item--last" @click="dislike()">
        <div class="joke__stats__item__button joke__stats__item__button--dislike"></div>
        <p class="joke__stats__item__number">{{ dislikes }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store';
export default {
  name: 'SingleJoke',

  props: [
    'id',
    'category',
    'content',
  ],

  methods: {
    like(){
      store.commit('like', this.id);
    },
    dislike() {
      store.commit('dislike', this.id);
    }
  },
  computed: {
    popularity() {
      if (this.dislikes > this.likes) {
        return "Chestnut";
      }

      if (this.likes <= 50) {
        return "New in town"
      } else if (this.likes > 50 && this.likes < 100) {
        return "Trending";
      } else {
        return "Hall of fame";
      }
    },
    popularityStyleObject() {
      if (this.likes < this.dislikes) {
        return {
          'joke__card__header__populatiry--chestnut': true
        }
      } else {
        return {
          'joke__card__header__popularity--new': this.likes <= 50,
          'joke__card__header__popularity--trending': this.likes > 50,
          'joke__card__header__popularity--epic': this.likes > 100
        }
      }
    },
    likes() {
      return store.getters.selectedJoke(this.id).likes;
    },
    dislikes() {
      return store.getters.selectedJoke(this.id).dislikes;
    }
  }
}
</script>

<style lang="scss" scoped>
  .joke {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr max-content;
    padding: 16px;

    &__back-button {
      justify-self: start;
      grid-row: 1;
      background-color: #000;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__card {
      background-color: $white-two;
      padding: 24px 16px;
      border-radius: 4px;
      border: 1px solid $white-three;
      color: $black-two;
      margin-top: 15px;

      &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        font-size: 14px;
        font-weight: 600;
        
        &__popularity {
          list-style: initial;
          &--chestnut {
            color: #000;
          }

          &--new {
            color: $dodger-blue;
          }

          &--trending {
            color: $macaroni-and-cheese
          }

          &--epic {
            color: $tomato;
          }
        }
      }
    }

    &__stats {
      grid-column: 1 / -1;
      padding: 16px;
      display: flex;
      margin-top: 15px;

      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        &--last {
            margin-left: 22px;
        }
        
        &__button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-position: center;
          background-repeat: no-repeat;

          &--like {
            background-color: $tea;
            background-image: url('../assets/icons/like.svg');

            &:hover {
              background-color: $light-forest-green;
            }
          }

          &--dislike {
            background-color: $lightish-red;
            background-image: url('../assets/icons/dislike.svg');
            &:hover {
              background-color: $faded-red;
            }
          }

        }
      }
    }

    @media(min-width: 600px) {
      grid-template-columns: 200px 60px 60px 1fr 200px;

      &__back-button {
        grid-column: 2 / 3;
        grid-row: 1;
        padding: 0;
      }

      &__card {
        grid-column: 2 / 5;
        grid-row: 2;
      }

      &__stats {
        grid-column: 2 / 4;
        padding: 0;
      }
    }
  }
</style>