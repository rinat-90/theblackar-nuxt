<template>
  <v-container fluid v-if="data">
    <v-layout row wrap>
      <v-flex xs12>
        <div class="display-2 mb-5 text-xs-center">{{data.title}}</div>
      </v-flex>
      <v-flex xs12 md6 v-for="car in data.cars" :key="car.title">
        <v-card class="mx-2 mb-3 pa-3">
          <v-card-title>
            <span class="headline pb-0 mx-auto mt-0">{{ car.title }}</span>
          </v-card-title>
          <div class="text-xs-center">
            <span class="grey--text text-xs-center">Models</span>
          </div>
          <div class="text-xs-center mb-3">
            <v-chip small v-for="(option, i) in car.options" :key="i">{{ option }}</v-chip>
          </div>
          <v-img id="carImg" :src="car.imgSrc" width="80%" class="mx-auto"></v-img>
          <div class="text-xs-center">
          <span class="grey--text text-xs-center">Details</span>
          </div>
          <div class="text-xs-center">
            <v-chip small v-for="descOpt in car.descOptions" :key="descOpt">{{ descOpt }}</v-chip>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'rates',
    props: {
      data: {
        title:{
          type: String,
          required: true,
        },
        cars: {
          type: Array,
          required: true
        }
      },
    },

  }

</script>

<style>

</style>
