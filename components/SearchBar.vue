<template>
  <v-autocomplete
    width="50%"
    rounded
    class="rounded-pill pa-0 regular-poppins"
    background-color="white"
    label="Which brand are you looking for ?"
    height="56"
    clearable
    v-model=keyword
    :search-input.sync="search_brands"
    :items="search_results"
  >
    <v-btn
      color="primary"
      fab
      elevation="0"
      class="ma-0 pa-0 white--text"
      slot="append"
    >
      <v-icon dark large>
        mdi-magnify
      </v-icon>
    </v-btn>
  </v-autocomplete>
</template>

<script>
import {mapGetters} from 'vuex';

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
      search_results: 'offers/search_results',
    })
  },
  watch: {
    async search_brands(val) {


      //await this.$store.dispatch('offers/search', val)
      if (val === this.keyword) {
        this.navigateToBrands(val)
      }

    }
  },
  methods: {
    navigateToBrands(val) {
      this.$router.push('/brandspage')
    },
  }
}
</script>

