<template>
  <v-sheet min-height="280">


    <v-expand-transition >


      <v-row class="mt-16 mb-16" v-if="brands.length !== 0">
        <v-col xl="4" lg="4" md="4" sm="2" xs="2" v-for="brand in brands" :key="brand.brand_id">
          <v-card class="rounded-xl" elevation="2" @click.stop="getBrand(brand.brand_id)">
            <div class="d-flex flex-row justify-center" style="height:100%">

              <v-img class="center" height="200" width="200" aspect-ratio="16/9" contain
                     :src="`${$axios.defaults.baseURL}` + brand.logo"></v-img>

            </div>
            <v-card-title class="justify-center regular-poppins">
              {{ brand.title }}
            </v-card-title>
          </v-card>

        </v-col>
      </v-row>

      <v-row class="mt-16 mb-16" v-if="brands.length === 0">
        <p>This brand doesn't have offers as of now</p>
      </v-row>

    </v-expand-transition>



  </v-sheet>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: "categorybrands",
  layout: "main",
  auth: false,
  data() {
    return {}
  },

  computed: {
    ...mapGetters({
      brands: 'offers/brands',
      brands_loading: 'offers/brands_loading'
    })
  },
  methods: {
    async getBrand(id) {

      //get brand and its offers by id
      await this.$router.push('/brandoffers')
      await this.$store.dispatch('offers/fetchBrandOffers', id)
    },
    async getBrands() {
      await this.$store.dispatch('offers/fetchBrands');
    }
  }
}
</script>
