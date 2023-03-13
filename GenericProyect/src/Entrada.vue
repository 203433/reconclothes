<script>
import Inicio from './Inicio.vue'
import Contactanos from './Contacto.vue'
import Nosotros from "./Nosotros.vue"
import TCondiciones from "./TCondiciones.vue"

const routes = {
  '/': Inicio,
  '/contactanos': Contactanos,
  '/nosotros': Nosotros,
  '/condiciones': TCondiciones


}
export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
};
</script>
<template>
      <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#/">
        <img src="./assets/Logo.png" alt="logo" style="padding-left: 22%" />

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-center">
        <!-- Here I have created the navbar-center class -->
        <a class="navbar-item" href="#/">
          <v-icon name="gi-corn" scale="2.0" />
          <h1 style="font-size: 1.25rem">Productos</h1>
        </a>
        <a class="navbar-item" href="#/nosotros">
          <v-icon name="bi-graph-up" scale="2.0"  />
          <h1 style="font-size: 1.25rem">Nosotros</h1>
        </a>
        <a class="navbar-item"  href="#/contactanos">
          <v-icon name="md-mailoutline-twotone" scale="2.0" />

          <h1 style="font-size: 1.25rem">Contactanos</h1>
        </a>
      </div>
    </div>
  </nav>

  <component :is="currentView" />

  <footer class="footer" style="background-color: black">
    <div class="content has-text-centered">
      <div class="columns">
        <div class="column">
          <img src="./assets/Logo.png" alt="logo" style="width: 70%" />
          <div
            class="subtitle"
            style="justify-content: space-evenly; display: flex"
          >
          <a href="https://www.facebook.com/"><v-icon name="bi-facebook" scale="2.5"  inverse /></a>
          <a href="https://twitter.com/home"><v-icon name="co-whatsapp" scale="2.5" inverse /></a>
        <a href="https://www.instagram.com/"><v-icon name="bi-instagram" scale="2.5" inverse /></a>
        <a href="https://linkedin.com/"><v-icon name="bi-linkedin" scale="2.5" inverse /></a>
          </div>
        </div>

        <div class="column" style="color: white; font-size: x-large">
          <div class="block"><a href="#/condiciones" style="color:white">Terminos y condiciones</a></div>

          <div class="block"> <a href="#/nosotros" style="color:white">Acerca de nuestros productos</a></div>

          <div class="block"> <a href="#/condiciones" style="color:white"> Política de privacidad </a> </div>
          <div class="block"><a href="#/contactanos" style="color:white"> Haznos saber tu opinión </a></div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style>
@import "./assets/bulma.css";
</style>