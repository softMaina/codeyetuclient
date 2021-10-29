<template>
  <v-sheet min-height="280">
      <v-row>

       <v-col xl="4" lg="4" md="4" sm="2" xs="2" v-for="brand in brands" :key="brand.brand_id">
         <v-card>
           <v-card-title>
             {{brand.title}}
           </v-card-title>
           <v-card-text>
              <v-img class="center" height="200" width="200" aspect-ratio="16/9" contain :src=brand.logo></v-img>
           </v-card-text>
           <v-card-actions>
             <v-btn>
               View Offers
             </v-btn>
           </v-card-actions>
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
    },
    async getBrands(){
      this.$store.dispatch('offers/fetchBrands');
    }
  }
}
</script>
