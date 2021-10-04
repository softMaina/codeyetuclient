<template>
  <div justify="center" align="center">
  <v-row justify="center" align="center" style="width: 80%">
    <v-col cols="4" v-for="offer in offers" :key="offer.offer_id">
        <ProductCard :caption=offer.caption :logo=offer.brand.logo :reward=getreward(offer) :refer="refer" />
    </v-col>
    

    
  </v-row>
  <v-row justify="center" align="center">

    <v-col cols="3">
       <v-card  class="rounded-xl" width="480" height="400" img="images/food.jpg">
      <v-card-text class="white--text ">
       <p class="pro-text">Eat Out</p> 
      </v-card-text>
    </v-card>
    </v-col>

     <v-col cols="3">
       <v-card  class="rounded-xl" width="480" height="400" img="images/business.jpg">
      <v-card-text class="white--text ">
       <p class="pro-text">Financial Services</p> 
      </v-card-text>
    </v-card>
    </v-col>

     <v-col cols="3">
       <v-card  class="rounded-xl" width="480" height="400" img="images/home.jpg">
      <v-card-text class="white--text ">
       <p class="pro-text">Home Essentials</p> 
      </v-card-text>
    </v-card>
    </v-col>

     <v-col cols="3">
       <v-card  class="rounded-xl" width="480" height="400" img="images/automotive.jpeg">
      <v-card-text class="white--text ">
       <p class="pro-text">Auto Service</p> 
      </v-card-text>
    </v-card>
    </v-col>
    <ReferralModal :visible="dialog" @close="dialog=false" />
  </v-row>
  </div>
</template>

<script>
import ImageCard from '../components/ImageCard.vue';
import ProductCard from '../components/ProductCard.vue';
import {mapMutations, mapGetters, mapActions} from 'vuex'
import ReferralModal from '../components/ReferralModal.vue';

export default {
  data () {
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
          offers: 'offers/offers'
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
