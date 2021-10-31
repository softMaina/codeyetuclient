<template>
  <v-sheet min-height="280">
      <v-row>

       <v-col xl="4" lg="4" md="4" sm="2" xs="2" v-for="brand in brands" :key="brand.brand_id">
         <v-card elevation="2" @click.stop="getBrand(brand.brand_id)">
           <div class="d-flex flex-row justify-center" style="height:100%">
           
             <v-img class="center" height="200" width="200" aspect-ratio="16/9" contain :src="`${$axios.defaults.baseURL}` + brand.logo"></v-img>
            
           </div>
           <v-card-title class="justify-center">
             {{brand.title}}
           </v-card-title>
         </v-card>

      </v-col>
      </v-row>

  </v-sheet>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: "brandspage",
  auth: false,
  data() {
    return {}
  },
  created(){
      this.getBrands();
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
    async getBrands(){
      await this.$store.dispatch('offers/fetchBrands');
    }
  }
}
</script>
