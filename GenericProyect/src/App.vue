<script setup>
const name = "Texto"
const styleColor = "color:blue"
const arrayColores = ["blue", "red", "peru"]
const activo = true
const activo2 = true
const activo3 = null
const activo4 = true 
</script>


<template>
  <h1>Hola {{name.toUpperCase()}} mundo</h1>
  <h2 >{{ arrayColores }}</h2>
  <h2 :style="`color: ${ arrayColores[2] }`">Soy Perú</h2>
  <h2>{{ activo ? "activo ando" : "activo no ando" }}</h2>
  <p v-if="activo2">Texto activado forma 1</p>
  <p v-if="!activo2">Texto desactivado forma 1</p>

  <p v-if="activo">Texto activado forma 2</p>
  <p v-else="!activo">Texto inactivo forma 2</p>


  <p v-if="activo3 === true">Texto activado forma 3</p>
  <p v-else-if="activo3 === false">Texto desactivado forma 3</p>
  <p v-else>Texto indeciso null forma 2</p>



  <h2 v-show="activo4">estoy activo vshow</h2>


</template>

<style>
  h1 {
    color: #f00;
  }
</style>