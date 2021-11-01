<template>
  <v-sheet min-height="280">
    <div justify="center" align="center">
       

    <v-expand-transition>
      <v-row v-if="!offers_loading" justify="center" align="center" style="background-color:#fff">

        <v-col xl="4" lg="4" md="6" xs="12" sm="12" v-for="offer in offers" :key="offer.offer_id">
          <!-- TODO add card for coorporates -->

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
        

     <ReferralModal :visible="dialog" @close="dialog=false"/>

      <CooporateModal :cooporate="cooporate" @close="cooporate=false"/>

    </div>

  </v-sheet>
</template>

<script>
import {mapGetters} from "vuex";
import ReferralModal from '../components/ReferralModal.vue';
import CooporateModal from '../components/CooporateModal.vue';

export default {
  auth: false,
  layout: "main",
  name: "brandoffers",
  data() {
    return {
      dialog: false,
      cooporate: false
    }
  },
  created(){
   
  },
   components: {
    ReferralModal,
    CooporateModal
  },
  computed: {
    ...mapGetters({
      offers: 'offers/offers',
      offers_loading: 'offers/offers_loading'
    })
  },
  methods: {
    async getBrand(id) {
      //get brand and its offers by id
      await this.$router.push('/brandoffers')
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

</style>
