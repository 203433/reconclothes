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
  <carousel :items-to-show="1">
    <slide :key="1">
      <img src="./assets/carrousel_1.jpg" width="1400" />
    </slide>
    <slide :key="2">
      <img src="./assets/carrousel_2.jpg" width="1400" />
    </slide>
    <slide :key="3">
      <img src="./assets/carrousel_3.jpg" width="1400" />
    </slide>
    <slide :key="4">
      <img src="./assets/carrousel_4.png" width="1400" />
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>

  <carousel :items-to-show="4"  style="height: %;" >
<div >
  <slide :key="1" >
      <div class="container" style="padding-left: 8%;padding-right: 8%;"  >
        <div class="card"  >
            <div class="card-image" >
                <figure class="image is-1by1">
                    <img src=
"./assets/Slider_1_1.jpg"
                        alt="GeeksforGeeks logo">
                </figure>
            </div>
            <div class="card-content">
                <p>
                  <h3 style="font-size:1.5rem;">Mazorca</h3>
                  <h3 style="font-size:1.5rem;"><strong>$2</strong></h3>
                </p>
            </div>
  
        </div>
    </div>
    </slide>
    <slide :key="2">
      <div class="container" style="padding-left: 8%;padding-right: 8%;" >
        <div class="card" >
            <div class="card-image">
                <figure class="image is-1by1">
                    <img src=
"./assets/Slider_1_2.jpg"
                        alt="GeeksforGeeks logo">
                </figure>
            </div>
            <div class="card-content">
                <p>
                  <h3 style="font-size:1.5rem;">Harina de maíz</h3>
                  <h3 style="font-size:1.5rem;"><strong>$16</strong></h3>
                </p>
            </div>
  
        </div>
    </div>
    </slide>
    <slide :key="3">
      <div class="container" style="padding-left: 8%;padding-right: 8%;" >
        <div class="card" >
            <div >
                <figure class="image is-1by1">
                    <img src=
"./assets/Slider_1_3.jpg"
                        alt="GeeksforGeeks logo">
                </figure>
            </div>
            <div class="card-content">
                <p>
                  <h3 style="font-size:1.5rem;">Tortilla blanca por kilo</h3>
                  <h3 style="font-size:1.5rem;"><strong>$18</strong></h3>
                </p>
            </div>
  
        </div>
    </div>
    </slide>
    <slide :key="4">
      <div class="container" style="padding-left: 8%;padding-right: 8%;" >
        <div class="card" >
            <div class="card-image">
                <figure class="image is-1by1">
                    <img src=
"./assets/Slider_1_4.jpg"
                        alt="GeeksforGeeks logo">
                </figure>
            </div>
            <div class="card-content">
                <p>
                  <h3 style="font-size:1.5rem;">Tortilla amarilla por kilo</h3>
                  <h3 style="font-size:1.5rem;"><strong>$18</strong></h3>                </p>
            </div>
  
        </div>
    </div>
    </slide>
</div>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>

  <div class="columns" style="padding-left: 2%; padding-right: 2%">
    <div class="column">
      <img src="./assets/banner_1.jpg" alt="">

      <div class="columns is-mobile" style="padding-top: 1.5%">
        <div class="column">
          <img src="./assets/banner_2.jpg" alt="">

        </div>
        <div class="column">
          <img src="./assets/banner_3.jpg" alt="">

        </div>
      </div>
    </div>
  </div>

  <carousel :items-to-show="4"  style="height: %;" >
<div >
  <slide :key="1" >
      <div class="container" style="padding-left: 8%;padding-right: 8%;"  >
        <div class="card"  >
            <div class="card-image" >
                <figure class="image is-1by1">
                    <img src=
"./assets/Slider_2_1.jpg"
                        alt="GeeksforGeeks logo">
                </figure>
            </div>
            <div class="card-content">
                <p>
                  <h3 style="font-size:1.5rem;">Kilo de tomate </h3>
                  <h3 style="font-size:1.5rem;"><strong>$30</strong></h3>
                </p>
            </div>
  
        </div>
    </div>
    </slide>
    <slide :key="2">
      <div class="container" style="padding-left: 8%;padding-right: 8%;" >
        <div class="card" >
            <div class="card-image">
                <figure class="image is-1by1">
                    <img src=
"./assets/Slider_2_2.jpg"
                        alt="GeeksforGeeks logo">
                </figure>
            </div>
            <div class="card-content">
                <p>
                  <h3 style="font-size:1.5rem;">Salsa de tomate 250 ml</h3>
                  <h3 style="font-size:1.5rem;"><strong>$15</strong></h3>
                </p>
            </div>
  
        </div>
    </div>
    </slide>
    <slide :key="3">
      <div class="container" style="padding-left: 8%;padding-right: 8%;" >
        <div class="card" >
            <div >
                <figure class="image is-1by1">
                    <img src=
"./assets/Slider_2_3.jpg"
                        alt="GeeksforGeeks logo">
                </figure>
            </div>
            <div class="card-content">
                <p>
                  <h3 style="font-size:1.5rem;">Salsa especial 300ml</h3>
                  <h3 style="font-size:1.5rem;"><strong>$30</strong></h3>
                </p>
            </div>
  
        </div>
    </div>
    </slide>
    <slide :key="4">
      <div class="container" style="padding-left: 8%;padding-right: 8%;" >
        <div class="card" >
            <div class="card-image">
                <figure class="image is-1by1">
                    <img src=
"./assets/Slider_2_4.jpg"
                        alt="GeeksforGeeks logo">
                </figure>
            </div>
            <div class="card-content">
                <p>
                  <h3 style="font-size:1.5rem;">Ramo de cilantro</h3>
                  <h3 style="font-size:1.5rem;"><strong>$5</strong></h3>                </p>
            </div>
  
        </div>
    </div>
    </slide>
</div>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  <carousel :items-to-show="4"  style="height: %;" >
<div >
  <slide :key="1" >
      <div class="container" style="padding-left: 8%;padding-right: 8%;"  >
        <div class="card"  >
            <div class="card-image" >
                <figure class="image is-1by1">
                    <img src=
"./assets/Slider_3_1.jpg"
                        alt="GeeksforGeeks logo">
                </figure>
            </div>
            <div class="card-content">
                <p>
                  <h3 style="font-size:1.5rem;">Kilo de cebolla</h3>
                  <h3 style="font-size:1.5rem;"><strong>$16</strong></h3>
                </p>
            </div>
  
        </div>
    </div>
    </slide>
    <slide :key="2">
      <div class="container" style="padding-left: 8%;padding-right: 8%;" >
        <div class="card" >
            <div class="card-image">
                <figure class="image is-1by1">
                    <img src=
"./assets/Slider_3_2.jpg"
                        alt="GeeksforGeeks logo">
                </figure>
            </div>
            <div class="card-content">
                <p>
                  <h3 style="font-size:1.5rem;">Kilo de papa</h3>
                  <h3 style="font-size:1.5rem;"><strong>$20</strong></h3>
                </p>
            </div>
  
        </div>
    </div>
    </slide>
    <slide :key="3">
      <div class="container" style="padding-left: 8%;padding-right: 8%;" >
        <div class="card" >
            <div >
                <figure class="image is-1by1">
                    <img src=
"./assets/Slider_3_3.jpg"
                        alt="GeeksforGeeks logo">
                </figure>
            </div>
            <div class="card-content">
                <p>
                  <h3 style="font-size:1.5rem;">Cuarto de cebollín</h3>
                  <h3 style="font-size:1.5rem;"><strong>$10</strong></h3>
                </p>
            </div>
  
        </div>
    </div>
    </slide>
    <slide :key="4">
      <div class="container" style="padding-left: 8%;padding-right: 8%;" >
        <div class="card" >
            <div class="card-image">
                <figure class="image is-1by1">
                    <img src=
"./assets/Slider_3_4.jpg"
                        alt="GeeksforGeeks logo">
                </figure>
            </div>
            <div class="card-content">
                <p>
                  <h3 style="font-size:1.5rem;">Cuarto de te limón</h3>
                  <h3 style="font-size:1.5rem;"><strong>$20</strong></h3>                </p>
            </div>
  
        </div>
    </div>
    </slide>
</div>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
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
