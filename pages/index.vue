<template>
  <div class="mt-10 mb-16" justify="center" align="center">

    <v-expand-transition>
      <v-row v-if="!offers_loading" justify="center" align="center" style="background-color:#fff">

        <v-col xl="4" lg="4" md="6" xs="12" sm="12" v-for="offer in offers" :key="offer.offer_id">


          <v-card elevation="5" class="rounded-xl" height="450" width="450">
            <div class="d-flex flex-column justify-space-around pa-5" style="height:100%">
              <div class="regular-poppins">
                <v-img class="center" height="200" width="200" aspect-ratio="16/9" contain
                       :src="`${$axios.defaults.baseURL}` + offer.brand.logo "></v-img>
                <v-divider class="primary mb-3" style="width:20%; border-width:2px;"></v-divider>
                {{ offer.caption }}
              </div>

              <div class="mb-0">
                <v-btn color="primary" style="width:40%;" large class="regular-poppins white--text rounded-sm" @click.stop="refer(offer)">
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
        <v-card class="rounded-xl" width="450" height="550" img="images/dayoutsize.png">
          <div class="d-flex flex-column justify-end align-center white--text"
               style="height:100%; background-color: rgba(0,0,0,0.3)">
            <div class="rounded-xl mb-10 pa-4 d-flex flex-column justify-start align-start"
                 style="background-color: rgba(0,0,0,0.8); width: 80%;">
              <p class="pro-text light-poppins text-left">Day/Night</p>
              <p class="pro-text light-poppins text-left">Out</p>
              <p class="text-left regular-poppins">Earn extra income and rewards by referring restaurants, hotels, socials and events to
                your friends</p>
              <v-btn class="regular-poppins" @click="getBrandCategory(1)">
                Earn More
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col xl="3" lg="3" md="6" xs="12" sm="12">
        <v-card class="rounded-xl" width="450" height="550" img="images/prosize.png">
          <div class="d-flex flex-column justify-end align-center white--text"
               style="height:100%; background-color: rgba(0,0,0,0.3)">
            <div class="rounded-xl mb-10 pa-4 d-flex flex-column justify-start align-start"
                 style="background-color: rgba(0,0,0,0.8); width: 80%;">
              <p class="pro-text light-poppins text-left">Professional</p>
              <p class="pro-text light-poppins text-left">Services</p>
              <p class="text-left regular-poppins">Earn extra income and rewards by referring businesses, professionals and experts to
                your friends</p>
              <v-btn class="regular-poppins" @click="getBrandCategory(2)">
                Earn More
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col xl="3" lg="3" md="6" xs="12" sm="12">
        <v-card class="rounded-xl" width="450" height="550" img="images/householdsize.png">
          <div class="d-flex flex-column justify-end align-center white--text"
               style="height:100%; background-color: rgba(0,0,0,0.3)">
            <div class="rounded-xl mb-10 pa-4 d-flex flex-column justify-start align-start"
                 style="background-color: rgba(0,0,0,0.8); width: 80%;">
              <p class="pro-text light-poppins text-left">Household</p>
              <p class="pro-text light-poppins text-left">Items</p>
              <p class="text-left regular-poppins">Earn extra income and rewards by referring electronic brands, retailers and household
                brands to your friends</p>
              <v-btn class="regular-poppins" @click="getBrandCategory(4)">
                Earn More
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col xl="3" lg="3" md="6" xs="12" sm="12">
        <v-card class="rounded-xl" width="450" height="550" img="images/autosize.png">
          <div class="d-flex flex-column justify-end align-center white--text"
               style="height:100%; background-color: rgba(0,0,0,0.3)">
            <div class="rounded-xl mb-10 pa-4 d-flex flex-column justify-start align-start"
                 style="background-color: rgba(0,0,0,0.8); width: 80%;">
              <p class="pro-text light-poppins text-left">Auto</p>
              <p class="pro-text light-poppins text-left">Services</p>
              <p class="text-left regular-poppins">Earn extra income and rewards by referring service centres, car dealers and other
                services to your friends</p>
              <v-btn class="regular-poppins" @click="getBrandCategory(3)">
                Earn More
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
       <v-snackbar
      right
      top
      v-model=signin
    >
      Sign In to continue

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
      <ReferralModal :visible="dialog" @close="dialog=false"/>

      <CooporateModal :cooporate="cooporate" @close="cooporate=false"/>
      <SignInModal  :visible="signin" @close="signin=false"/>
    </v-row>
  </div>
</template>

<script>
import ImageCard from '../components/ImageCard.vue';
import ProductCard from '../components/ProductCard.vue';
import {mapGetters} from 'vuex';
import ReferralModal from '../components/ReferralModal.vue';
import CooporateModal from '../components/CooporateModal.vue';
import SignInModal from '../components/SignInModal.vue';


export default {
  name: 'index',
  auth: 'guest',
  data() {
    return {
      dialog: false,
      offer: null,
      cooporate: false,
      signin: false,
      signup: false,
    }
  },
  components: {
    ImageCard,
    ProductCard,
    ReferralModal,
    CooporateModal,
    SignInModal
  },
  computed: {
    ...mapGetters({
      sigin: 'offers/signin',
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

      return offer.offer_target * offer.offer_rate;
    },
    refer: function (offer) {
      this.$store.commit({
        type: 'offers/setClickedOffer',
        offer: offer
      });
      if(this.$auth.user === null){

        this.signin = true;
        return;
      }
      if (offer.c_to_b === false) {
        this.cooporate = true;
      } else {
        this.dialog = true;
      }

    },

    getBrandCategory:function(category) {
        this.$store.dispatch('offers/fetchCategoryBrands', category);
        this.$router.push('/categorybrands');
    }
  }
}
</script>

<style scoped>
.pro-text {
  font-size: 30px;
  line-height: 0.6;
}
</style>
