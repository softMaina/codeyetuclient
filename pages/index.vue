<template>
  <div justify="center" align="center">

    <v-expand-transition>
      <v-row v-if="!offers_loading" justify="center" align="center" style="background-color:#fff">

        <v-col xl="4" lg="4" md="6" xs="12" sm="12" v-for="offer in offers" :key="offer.offer_id">
          <!-- TODO add card for coorporates -->

          <v-card elevation="5" class="rounded-xl" height="450" width="450">
            <div class="d-flex flex-column justify-space-around" style="height:100%">
              <div class="">
                <v-img class="center" height="200" width="200" aspect-ratio="16/9" contain
                       :src="`${$axios.defaults.baseURL}` + offer.brand.logo "></v-img>
                <v-divider class="red mb-3" style="width:20%; border-width:2px;"></v-divider>
                {{ offer.caption }}
              </div>

              <div class="mb-0">
                <v-btn color="red" style="width:40%;" large class="white--text rounded-sm" @click.stop="refer(offer)">
                  GET Ksh. {{ getreward(offer) }} /=
                </v-btn>
              </div>
            </div>

          </v-card>
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
        xl="12" lg="12" md="12" xs="12" sm="12"
      >
        Getting your deals
      </v-col>
      <v-col xl="12" lg="12" md="12" xs="12" sm="12">
        <v-progress-linear
          color="deep-orange accent-4"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
    </v-row>


    <v-row justify="center" align="center" class="mb-8 mt-8">
      <v-col xl="3" lg="3" md="6" xs="12" sm="12">
        <v-card class="rounded-xl" width="450" height="610" img="images/dayoutsize.png">
          <div class="d-flex flex-column justify-end align-center white--text"
               style="height:100%; background-color: rgba(0,0,0,0.3)">
            <div class="rounded-xl mb-10 pa-4 d-flex flex-column justify-start align-start"
                 style="background-color: rgba(0,0,0,0.8); width: 80%;">
              <p class="pro-text text-left">Day/Night</p>
              <p class="pro-text text-left">Out</p>
              <p class="text-left">Earn extra income and rewards by referring restaurants, hotels, socials and events to
                your friends</p>
              <v-btn>
                Earn More
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col xl="3" lg="3" md="6" xs="12" sm="12">
        <v-card class="rounded-xl" width="450" height="610" img="images/prosize.png">
          <div class="d-flex flex-column justify-end align-center white--text"
               style="height:100%; background-color: rgba(0,0,0,0.3)">
            <div class="rounded-xl mb-10 pa-4 d-flex flex-column justify-start align-start"
                 style="background-color: rgba(0,0,0,0.8); width: 80%;">
              <p class="pro-text text-left">Professional</p>
              <p class="pro-text text-left">Services</p>
              <p class="text-left">Earn extra income and rewards by referring businesses, professionals and experts to
                your friends</p>
              <v-btn>
                Earn More
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col xl="3" lg="3" md="6" xs="12" sm="12">
        <v-card class="rounded-xl" width="450" height="610" img="images/householdsize.png">
          <div class="d-flex flex-column justify-end align-center white--text"
               style="height:100%; background-color: rgba(0,0,0,0.3)">
            <div class="rounded-xl mb-10 pa-4 d-flex flex-column justify-start align-start"
                 style="background-color: rgba(0,0,0,0.8); width: 80%;">
              <p class="pro-text text-left">Household</p>
              <p class="pro-text text-left">Items</p>
              <p class="text-left">Earn extra income and rewards by referring electronic brands, retailers and household
                brands to your friends</p>
              <v-btn>
                Earn More
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col xl="3" lg="3" md="6" xs="12" sm="12">
        <v-card class="rounded-xl" width="450" height="610" img="images/autosize.png">
          <div class="d-flex flex-column justify-end align-center white--text"
               style="height:100%; background-color: rgba(0,0,0,0.3)">
            <div class="rounded-xl mb-10 pa-4 d-flex flex-column justify-start align-start"
                 style="background-color: rgba(0,0,0,0.8); width: 80%;">
              <p class="pro-text text-left">Auto</p>
              <p class="pro-text text-left">Services</p>
              <p class="text-left">Earn extra income and rewards by referring service centres, car dealers and other
                services to your friends</p>
              <v-btn>
                Earn More
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
      <ReferralModal :visible="dialog" @close="dialog=false"/>

      <CooporateModal :cooporate="cooporate" @close="cooporate=false"/>
    </v-row>
  </div>
</template>

<script>
import ImageCard from '../components/ImageCard.vue';
import ProductCard from '../components/ProductCard.vue';
import {mapGetters} from 'vuex';
import ReferralModal from '../components/ReferralModal.vue';
import CooporateModal from '../components/CooporateModal.vue';

export default {
  name: 'index',
  auth: 'guest',
  data() {
    return {
      dialog: false,
      offer: null,
      cooporate: false

    }
  },
  components: {
    ImageCard,
    ProductCard,
    ReferralModal,
    CooporateModal
  },
  computed: {
    ...mapGetters({
      offers: 'offers/offers',
      offers_loading: 'offers/offers_loading'
    })
  },
  created() {
    this.fetchOffers();
  },
  methods: {
    async fetchOffers() {
      this.$store.dispatch('offers/fetchOffers');
    },
    getreward(offer) {
      this.$store.commit({
        type: 'offers/setClickedOffer',
        offer: offer
      })
      return offer.offer_target * offer.offer_rate;
    },
    refer: function (offer) {
      if (offer.c_to_b === false) {
        this.cooporate = true;
      } else {
        this.dialog = true;
      }

    },


  }
}
</script>

<style scoped>
.pro-text {
  font-weight: bold;
  font-size: 36px;
  line-height: 0.6;
}
</style>
