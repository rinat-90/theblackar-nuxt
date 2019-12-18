<template>
  <v-container align-content-space-around v-if="data">
  <v-layout row wrap>
      <v-flex xs12>
        <div class="display-2 mb-5 text-xs-center">{{data.title}}</div>
      </v-flex>
      <v-flex xs12 sm12 md4 v-for="service in data.services" :key="service.title">
        <v-card id="card" class="py-3 mx-2 mb-3 text-xs-center">
          <v-img :src="service.imgSrc" :lazy-src="service.imgSrc" hight="150px" width="150px" class="mx-auto mb-2"></v-img>
          <v-card-title v-text="">
            <span class="headline pb-0 mx-auto">{{ service.title }}</span>
          </v-card-title>
          <v-card-text id="card-text" class="" v-text="service.desc"></v-card-text>
          <v-card-actions>
            <v-btn class="mx-auto" flat>Book now</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'services',
    props: {
      data: {
        title:{
          type: String,
          required: true,
        },
        services: {
          type: Array,
          required: true
        }
      },
    },
    // v_match:{
    //   el:['#card-text'],
    //   disabled: [ // Array of heights where the plugin will not set the heights
    //     767, // If a string is provided this will be used as a max bound
    //     [920, 1200], // If an array is provided it will be used as min-max bounds in that order
    //   ]
    // }
  }

</script>
