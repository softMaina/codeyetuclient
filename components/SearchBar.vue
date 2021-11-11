<template>
  <v-autocomplete
    width="50%"
    rounded
    class="rounded-pill pa-0 regular-poppins search"
    background-color="white"
    label="Which brand are you looking for ?"
    height="56"
    clearable
    v-model=keyword
    :search-input.sync=search_brands
    :items="search_results"
    item-text="title"
    item-value="id"
  >
    <v-btn
      color="primary"
      fab
      elevation="0"
      class="white--text"
      slot="append"
    >
      <v-icon dark>
        mdi-magnify
      </v-icon>
    </v-btn>
  </v-autocomplete>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex';

export default {
  name: "SearchBar",
  data() {
    return {
      keyword: null,
      search_brands: null,
    }
  },
  computed: {
    ...mapGetters({
      search_results: 'offers/search_results'
    })
  },
  watch: {
    async search_brands(val) {
      setTimeout(async ()=>{
          await this.$store.dispatch('offers/search', val)
      },1000)

      if (val === this.keyword) {
        this.navigateToBrands(val)
      }

    }
  },
  methods: {
    navigateToBrands(val) {
      this.$router.push('/brandspage')
    }
  }
}
</script>

<style  scoped>

 .search >>> .v-label{
  position: absolute !important;
  margin-left: auto !important;
  margin-right: auto !important;
  left: 0 !important;
  right: 0 !important;
  top: 30%;
  text-align: center;

 }
 .search >>> .v-label--active {
   transform: translateY(-18px) scale(.75) translateX(-27%);
   color: #f8a932;
 }

 .search >>> .v-btn--fab.v-size--default{
   height: 50px;
   width: 50px;
 }

 .v-list-item--highlighted{
   background-color: white !important;
   color: yellow;
 }

 .v-list-item__title {
   color: red !important;
 }

</style>
