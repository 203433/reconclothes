<script>
import "vue3-carousel/dist/carousel.css";

</script>
<template>


  <div
    class="columns"
    style="text-align: center; padding-left: 5%; padding-right: 5%"
  >
    <div class="column">
      <figure class="image is-3by1">
        <img src="./assets/us_1.jpg" />
      </figure>
    </div>
    <div class="column">
      <div class="content" style="padding-top: 2.5%">
        <h4>Dando lo mejor al consumidor</h4>
        <p>
          ¿Está buscando una tienda en línea que ofrezca frutas y verduras de alta calidad y a precios razonables? En nuestra tienda en línea encontrará una gran selección de frutas y verduras frescas y de temporada, cultivadas por agricultores locales. Todos nuestros productos se entregan directamente a su puerta, asegurando la máxima frescura y calidad. Además, ofrecemos una amplia gama de opciones orgánicas y sin pesticidas para los consumidores más exigentes.
        </p>
      </div>
    </div>
  </div>
  <div
    class="columns"
    style="text-align: center; padding-left: 5%; padding-right: 5%"
  >
    <div class="column">
      <div class="content" style="padding-top: 2.5%">
        <h4>Porque elegir productos Rey</h4>
        <p>
          La tienda en línea de frutas y verduras frescas es la mejor opción para comprar alimentos saludables y nutritivos. Tenemos una gran selección de productos frescos y de alta calidad, que se entregan directamente a su puerta. Desde manzanas y peras hasta brócoli y espinacas, nuestro catálogo incluye una amplia variedad de productos frescos de temporada, para que pueda disfrutar de una alimentación saludable y equilibrada.
        </p>
      </div>
    </div>
    <div class="column">
      <figure class="image is-3by1">
        <img src="./assets/us_2.jpg" />
      </figure>
    </div>
  </div>
  <div
    class="columns"
    style="text-align: center; padding-left: 5%; padding-right: 5%"
  >
    <div class="column">
      <figure class="image is-3by1">
        <img src="./assets/us_3.jpg" />
      </figure>
    </div>
    <div class="column">
      <div class="content" style="padding-top: 2.5%">
        <h4>Exquisites en cada producto</h4>
        <p>
          En nuestra tienda en línea, ofrecemos una gran selección de productos frescos y saludables a precios asequibles. Desde frutas exóticas hasta verduras de temporada, nuestra tienda en línea ofrece una amplia variedad de opciones para satisfacer las necesidades de cualquier hogar. Nuestros productos se entregan directamente en su casa, lo que le permite disfrutar de una alimentación saludable sin tener que preocuparse por salir a hacer compras. Además, ofrecemos opciones de suscripción para que pueda recibir entregas semanales o quincenales de sus productos favoritos.
        </p>
      </div>
    </div>
  </div>

  <div style="text-align: center">
    <div class="content" style="padding-top: 2.5%">
      <h5>Ubicación de la empresa</h5>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.234359973133!2d-93.09506977838986!3d16.615003151909228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed29faf70c283b%3A0xff57a2e3d9c9bd10!2sUniversidad%20Polit%C3%A9cnica%20de%20Chiapas!5e0!3m2!1ses-419!2smx!4v1678613601347!5m2!1ses-419!2smx"
      width="1200"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <div class="column" style="padding-bottom: 5%;">
    <div
      class="content"
      style="
        padding-top: 2.5%;
        text-align: center;
        padding-left: 20%;
        padding-right: 20%;
      "
    >
      <h4>Misión</h4>
      <p style="text-align: justify;">
        Nuestra misión es ofrecer productos/servicios de alta calidad a nuestros
        clientes mientras mantenemos altos estándares éticos y de
        responsabilidad social. Nos esforzamos por ser líderes en nuestro
        mercado y por proporcionar un ambiente de trabajo seguro y positivo para
        nuestros empleados. Buscamos maximizar el valor para nuestros
        accionistas y contribuir al bienestar de la sociedad en general mediante
        la adopción de prácticas empresariales sostenibles y respetuosas con el
        medio ambiente.
      </p>
      <h4>Visión</h4>
      <p style="text-align: justify;">
        Nuestra visión es ser líderes en nuestro mercado, reconocidos por nuestra calidad, innovación y excelencia en el servicio al cliente. Nos esforzamos por mantener una cultura empresarial en la que el trabajo en equipo, la creatividad y la mejora continua sean fundamentales para el éxito de la empresa. Buscamos ser una organización rentable y sostenible a largo plazo, que contribuya positivamente al bienestar de la sociedad y al desarrollo sostenible del planeta. Nos comprometemos a mantener altos estándares éticos y de responsabilidad social en todo lo que hacemos y a crear valor para nuestros clientes, empleados y accionistas.
      </p>
    </div>
  </div>

  <component :is="currentView" />



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
