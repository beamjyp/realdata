<template>
  <section>
    <nav id="nav" class="navbar is-transparent is-fixed-top">
      <div id="navbarSupportedContent justify-content-left " class="row hom">
        <svg
          style="color: white"
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          class="bi bi-shield-lock-fill svg"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 .5c-.662 0-1.77.249-2.813.525a61.11 61.11 0 0 0-2.772.815 1.454 1.454 0 0 0-1.003 1.184c-.573 4.197.756 7.307 2.368 9.365a11.192 11.192 0 0 0 2.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586a11.191 11.191 0 0 0 2.418-2.3c1.611-2.058 2.94-5.168 2.367-9.365a1.454 1.454 0 0 0-1.003-1.184 61.09 61.09 0 0 0-2.772-.815C9.77.749 8.663.5 8 .5zm.5 7.415a1.5 1.5 0 1 0-1 0l-.385 1.99a.5.5 0 0 0 .491.595h.788a.5.5 0 0 0 .49-.595L8.5 7.915z"
          />
        </svg>
        <a
          class="navbar-brand font-weight-bold home1"
          style="color: white"
          href="/"
          >LOCKPICK</a
        >
      </div>

      <div id="navbarSupportedContent" class="justify-content-center row cen">
        <nuxt-link class="nav-link bet" style="color: white" to="/">
          HOME</nuxt-link
        >
        <nuxt-link class="nav-link bet" style="color: white" to="/About">
          ABOUT</nuxt-link
        >
        <nuxt-link class="nav-link bet" style="color: white" to="/Contact">
          CONTACT</nuxt-link
        >
      </div>
      <div id="navbarSupportedContent" class="row right bet">
        <nuxt-link class="nav-link aa" style="color: white" to="/pagelogin">
          LOGIN</nuxt-link
        >
        <b-button
          squared
          variant="light"
          size="lg"
          class="inbut font-weight-bold but"
          ><nuxt-link class="link" to="register">GET STARTED</nuxt-link>
        </b-button>
      </div>
    </nav>
  </section>
</template>

<script>
import firebase from 'firebase/app'
export default {
  data() {
    return { img: '' }
  },
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
    loginGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = result.credential.accessToken
          // The signed-in user info.
          const user = result.user
          this.user = result.user
          // ...
          console.log('token : ' + token)
          console.log('user : ' + user)

          const userc = firebase.auth().currentUser
          let name, email, photoUrl, uid, emailVerified

          if (userc != null) {
            name = userc.displayName
            email = userc.email
            photoUrl = userc.photoURL
            emailVerified = userc.emailVerified
            uid = userc.uid
            console.log('ชื่อ' + name)
            console.log('email' + email)
            console.log('รูป' + photoUrl)
            console.log('สถานะ' + emailVerified)
            console.log('id' + uid)
            this.$router.replace('/Getstarted')
          }
        })
        .catch(function (error) {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          // The email of the user's account used.
          const email = error.email
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential
          // ...
          console.log('errorCode= ' + errorCode)
          console.log('errorMessage= ' + errorMessage)
          console.log('email= ' + email)
          console.log('credential' + credential)
        })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function () {
          alert('Signout')
        })
        .catch(function (error) {
          const errorMessage = error.message
          console.log('what' + errorMessage)
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
  font-size: 200%;
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
