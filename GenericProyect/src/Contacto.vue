<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";


export default {
  name: "Inicio",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
<template>

  <div class="columns" style="padding-left: 2%; padding-right: 2%">
    <div class="column">
      <div class="columns is-mobile" style="padding-top: 1.5%">
        <div class="column" style="margin-left: 2.5%;margin-right: 1.5%">
        <div style="background-color: antiquewhite;"> 
          <div style="display: flex;padding-left: 15%;padding-bottom: 8%;padding-top: 4%;">
            <v-icon name="bi-telephone-fill" scale="2.0"  />
            <h1 style="font-size: 1.25rem; padding-left: 15%;"  >+52 961 603 5773</h1>
          </div>
          <div style="display: flex;padding-left: 15%;padding-bottom: 8%;">
            <v-icon name="io-location-sharp" scale="2.0" />
            <h1 style="font-size: 1.25rem; padding-left: 15%;">
              Primera norte, entre octava y novena sur, Villacorzo, Chiapas
            </h1>
          </div>
          <div style="display: flex;padding-left: 15%;padding-bottom: 8%;">
            <v-icon name="md-email" scale="2.0" />
            <h1 style="font-size: 1.25rem; padding-left: 15%;">verdicruze@gmail.com</h1>
          </div>
          <div style="display: flex;padding-left: 15%;padding-bottom: 4%;">
            <v-icon name="bi-clock-fill" scale="2.0" />
            <h1 style="font-size: 1.25rem; padding-left: 15%;">Lunes a viernes, de 5 am a 8 pm</h1>
          </div>
        </div>
          <section class="hero is-small is-link" style="width: 100%;margin-top: 4%;">
            <figure class="image is-2by1">
              <img src="./assets/contact.jpg" />
            </figure>
          </section>
        </div>
        <div class="column" style="text-align: center; background-color:antiquewhite">
            <h3 class="title is-3">Dejanos saber tu opinión</h3>
            <form action="https://formsubmit.co/d602f3ba738f24b48e5bd7976b84f0ab" method="POST" style="margin-left: 5%;margin-right: 5%">
                <div  class="block">
                    <input class="input" type="text" name="name" placeholder="Nombre" required style="font-size: x-large">

                </div>
                <div  class="block">
                    <input class="input" type="text" style="font-size: x-large" name="email" placeholder="Correo electrónico" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" required>

                </div>
                <div  class="block">
                    <input class="input" type="text" style="font-size: x-large" name="subject" placeholder="Telefono (opcional)" pattern="[0-9]{10}">

                </div>
                <div  class="block">
                    <textarea class="textarea" style="font-size: x-large" name="comments" placeholder="Comentarios"  required></textarea>

                </div>
                <div  class="block">
                    <input class="button is-success is-fullwidth is-large" type="submit" value="Enviar">

                </div>
                                    <input type="hidden"  name="_next" value="http://localhost:5173">
                <input type="hidden" name="_captcha" value="false" style="display: flex;">


            </form>

        </div>
      </div>
    </div>
  </div>


</template>

<style>
@import "./assets/bulma.css";
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
  margin: 0px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}
</style>
