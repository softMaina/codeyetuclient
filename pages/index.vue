<template>
  <div justify="center" align="center">

    <v-expand-transition>
  <v-row v-if="!offers_loading" justify="center" align="center" style="background-color:#fff">

    <v-col cols="4" v-for="offer in offers" :key="offer.offer_id">
      <ProductCard :caption=offer.caption :logo=offer.brand.logo :reward=getreward(offer) :refer="refer"/>
    </v-col>

  </v-row>
   </v-expand-transition>
  <v-row
        v-if="offers_loading"
        class="fill-height"
        align-content="center"
        justify="center"
      >
        <v-col
          class="text-subtitle-1 text-center"
          cols="12"
        >
          Getting your deals
        </v-col>
        <v-col cols="6">
          <v-progress-linear
            color="deep-orange accent-4"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
        </v-col>
      </v-row>


  <v-row justify="center" align="center" class="mb-8 mt-8">
    <v-col cols="3">
       <v-card  class="rounded-xl" width="450" height="490" img="images/food.jpg">
      <div class="d-flex flex-column justify-end align-start white--text" style="height:100%; background-color: rgba(0,0,0,0.4)">
        <p class="pro-text ml-10 mb-10">Eat Out</p>
      </div>
    </v-card>
    </v-col>

     <v-col cols="3">
       <v-card  class="rounded-xl" width="450" height="490" img="images/business.jpg">
      <div class="d-flex flex-column justify-end align-start white--text" style="height:100%; background-color: rgba(0,0,0,0.4)">
        <p class="pro-text ml-10 mb-10">Financial Services</p>
      </div>
    </v-card>
    </v-col>

     <v-col cols="3">
       <v-card  class="rounded-xl" width="450" height="490" img="images/home.jpg">
      <div class="d-flex flex-column justify-end align-start white--text" style="height:100%; background-color: rgba(0,0,0,0.4)">
        <p class="pro-text ml-10 mb-10">Home Essentials</p>
      </div>
    </v-card>
    </v-col>

     <v-col cols="3">
       <v-card  class="rounded-xl" width="450" height="490" img="images/automotive.jpeg">
      <div class="d-flex flex-column justify-end align-start white--text" style="height:100%; background-color: rgba(0,0,0,0.4)">
        <p class="pro-text ml-10 mb-10">Auto Services</p>
      </div>
    </v-card>
    </v-col>
    <ReferralModal :visible="dialog" @close="dialog=false" />
  </v-row>
  </div>
</template>

<script>
import ImageCard from '../components/ImageCard.vue';
import ProductCard from '../components/ProductCard.vue';
import {mapGetters} from 'vuex'
import ReferralModal from '../components/ReferralModal.vue';

export default {
  name: 'index',
  auth: 'guest',
  data() {
    return {
      dialog: false,
      offer: null,

    }
  },
  components: {
    ImageCard,
    ProductCard,
    ReferralModal
  },
  computed: {
    ...mapGetters({
      offers: 'offers/offers',
      offers_loading: 'offers/offers_loading'
    })
  },
  created(){
    this.fetchOffers();
  },
  methods: {
    async fetchOffers(){
      this.$store.dispatch('offers/fetchOffers');
    },
    getreward(offer){
        console.log(offer)
        this.$store.commit({
          type: 'offers/setClickedOffer',
          offer: offer
        })
        return offer.offer_target * offer.offer_rate;
    },
    refer: function(event){
      this.dialog = true
      console.log(event)

    },


  }
}
</script>

<style scoped>
.pro-text {
  font-weight: bold;
  font-size: 28px;
}
</style>
