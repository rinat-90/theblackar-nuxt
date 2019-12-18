<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="display-2 mb-5 text-xs-center">{{ title }}</div>
    </v-flex>
    <v-flex xs12>
      <Carousel :feedbacks="feedbacks"></Carousel>
    </v-flex>
    <v-flex xs12>
      <Dialog></Dialog>
    </v-flex>
  </v-layout>
</template>

<script>
  import Carousel from '@/components/Partials/Carousel'
  import Dialog from '@/components/Partials/Dialogs/Dialog'
  export default{
    name: 'feedbacks',
    components:{ Carousel, Dialog },
    data(){
      return{
        title: 'What they say',
        feeds: [],
        model: null
      }
    },
    computed:{
      feedbacks(){
        return this.$store.getters.loadedFeedbacks
      }
    },
    methods:{
      loadFeedbacks(){
        this.$store.dispatch('loadFeedbacks');
      }
    },
    mounted(){
      this.loadFeedbacks()
    }
  }
</script>