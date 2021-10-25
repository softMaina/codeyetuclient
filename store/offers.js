export const state = () => ({
  offers: [],
  brands: [],
  referrals: [],
  user: null,
  clicked_offer: null,
  offers_loading: true,
  snackbar: false,
  search_results: ["Maina", "Allan", "Eric"],
})

export const getters = {

  offers: state => state.offers,
  clicked_offer: state => state.clicked_offer,
  brands: state => state.brands,
  referrals: state => state.referrals,
  offers_loading: state => state.offers_loading,
  snackbar: state => state.snackbar,
  search_results: state => state.search_results,
}

export const mutations = {
  setOffers(state, payload) {
    state.offers = payload.offers
  },
  setBrands(state, payload) {
    state.brands = payload.brands
  },
  setReferrals(state, payload) {
    state.referrals = payload.referrals
  },
  setClickedOffer(state, payload) {
    state.offer = payload.offer
  },
  setOffersLoading(state) {
    state.offers_loading = !state.offers_loading
  },
  setSnackbar(state) {
    state.snackbar = !state.snackbar
  },
  setSearchResults(state, payload) {
    state.search_results = payload.search_results
  }

}

export const actions = {
  async fetchOffers({commit, dispatch}) {

    await this.$axios.get('/api/offers').then((res) => {
      console.log(res.data["results"])
      commit({
        type: 'setOffers',
        offers: res.data["results"]
      })
      commit({
        type: 'setOffersLoading'
      })
    })
  },

  async fetchReferals({commit, dispatch}) {
    await this.$axios.get('/api/referrals').then((res) => {
      commit({
        type: 'setReferrals',
        offers: res.data["results"]
      })
    })
  },

  async fetchBrands({commit, dispatch}) {
    await this.$axios.get('/api/brands').then((res) => {
      commit({
        type: 'setBrands',
        offers: res.data["results"]
      })
    })
  },

  async referPersons({commit, dispatch}, data) {
    await this.$axios.post('/api/referrals', data).then((res) => {
      console.log('referrals sent');
      commit({
        type: 'setSnackbar'
      })
    })
  },

  async search({commit, dispatch}, data) {
    let search_string = '/api/search?keyword=' + data;
    await this.$axios.get(search_string).then((res) => {
      console.log("searching")
      commit({
        type: 'setSearchResults',
        search_results: res.data["results"]
      })
    })
  }
}
