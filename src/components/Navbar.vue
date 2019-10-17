<template>
  <nav>
    <img src="../assets/logo-horizontal.svg" alt="Vehiculum logo"/>
    <img class="menu-toggle" 
      src="../assets/icons/menu.svg"
      @click="toggleMenu"
      alt="Menu icon" />
    <ul :class="[isMenuOpen ? 'mobile-menu' : 'desktop-navbar']">
      <li class="nav-links"><a href="#">So funktioniert's</a></li>
      <li class="nav-links"><a href="#">Sonderangebote</a></li>
      <li class="nav-links"><a href="#">Mein Bereich</a></li>
    </ul>
  </nav>  
</template>

<script>
export default {
  name: 'Navbar',

  created() {
    window.addEventListener('resize', () => {
      // Close menu if it is open and user resizes window.
      if (this.isMenuOpen && window.innerWidth >= 600) {
        this.isMenuOpen = false;
      }
    })
  },

  data: function() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      // disable scrolling
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  },
}


</script>

<style lang="scss" scoped>
  nav {
    background-color: #303030;
    color: #ffffff;
    display: grid;
    grid-template-columns: 1fr 50px;
    padding: 16px 24px;

    .menu-toggle {
      margin-left: auto;
      width: 32px;
      height: 32px;
      align-self: center;
      justify-self: end;
    }

    .nav-links {
      margin-bottom: 20px;
      a {
        color: #ffffff;
        text-decoration: none;
      }
    }

    .mobile-menu {
      display: flex;
      flex-direction: column;
      height: 100vh;
      font-size: 20px;
      margin-top: 24px;
    }

    .desktop-navbar {
      display: none;
    }

    @media (min-width: 600px) {
      grid-template-columns: 150px 1fr;
      align-items: center;

      .desktop-navbar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      .nav-links {
        margin: 20px;
      }

      .menu-toggle {
        display: none;
      }
    }
  }
</style>