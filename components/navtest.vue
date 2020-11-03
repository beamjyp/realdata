<template>
  <section>
    <nav id="nav" class="navbar is-transparent is-fixed-top">
      <div id="navbarSupportedContent justify-content-left " class="row hom">
        <a
          class="navbar-brand font-weight-bold home1"
          style="color: white"
          href="/"
          >HOME</a
        >
      </div>

      <div
        id="navbarSupportedContent"
        class="justify-content-center row cen"
      ></div>
      <div id="navbarSupportedContent" class="row right bet">
        <b-button
          squared
          variant="light"
          size="lg"
          class="inbut font-weight-bold but"
          @click="logout"
          ><nuxt-link class="link" to="">LOGOUT</nuxt-link>
        </b-button>
      </div>
    </nav>
  </section>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('scroll', function () {
        const navbar = document.getElementById('nav')
        // eslint-disable-next-line camelcase
        const nav_classes = navbar.classList
        if (document.documentElement.scrollTop >= 50) {
          if (nav_classes.contains('shrink') === false) {
            nav_classes.toggle('shrink')
          }
        } else if (nav_classes.contains('shrink') === true) {
          nav_classes.toggle('shrink')
        }
      })
    })
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/pagelogin')
        })
    },
  },
}
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css';

nav {
  padding: 1rem;
  transition: all 0.5s;
  background: none;
  border: none;
}
nav.shrink {
  padding: 0.4rem;
  background: black;
}
nav a {
  margin-right: 0rem;
}
h1 {
  padding-top: 150px;
  color: blue;
}
h3,
p {
  padding-top: 600px;
}
.cen {
  margin: auto;
}
.bet {
  font-size: 100%;
}
.but {
  margin-right: 20px;
}
.hom {
  margin-left: 5px;
  margin-top: 2.5px;
}
.home1 {
  margin-top: -5px;
  font-size: 150%;
}
.right {
  margin-top: 2px;
}
.ab {
  font-size: 130%;
}
.aa {
  font-size: 100%;
  margin-top: 6px;
  margin-right: -25px;
}
.svg {
  margin-right: 2px;
  margin-top: 9px;
}
.link {
  color: black;
  text-decoration: none;
}
</style>
