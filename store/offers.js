export const state = () => ({
  offers: [],
  brands: [],
  referrals: [],
  user: null,
  account_info: null,
  account_referrals: [],
  clicked_offer: null,
  offers_loading: false,
  brands_loading: true,
  snackbar: false,
  search_results: [],
})

export const getters = {

  offers: state => state.offers,
  clicked_offer: state => state.clicked_offer,
  brands: state => state.brands,
  referrals: state => state.referrals,
  offers_loading: state => state.offers_loading,
  snackbar: state => state.snackbar,
  search_results: state => state.search_results,
  brands_loading: state => state.brands_loading,
  account_info: state => state.account_info,
  account_referrals: state => state.account_referrals,
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
  setBrandsLoading(state){
      state.brands_loading = !state.brands_loading
  },
  setSnackbar(state) {
    state.snackbar = !state.snackbar
  },
  setSearchResults(state, payload) {
    state.search_results = payload.search_results
  },
  setAccountInfo(state, payload){
    state.account_info = payload.account_info
  },
  setAccountReferrals(state, payload){
    state.account_referrals = payload.account_referrals
  },

}

export const actions = {
  async fetchOffers({commit, dispatch}) {
    commit({
      type: 'setOffersLoading'
    })
    await this.$axios.get('/api/offers').then((res) => {
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
    commit({
      type: 'setOffersLoading'
    })
    await this.$axios.get('/api/brands').then((res) => {
      commit({
        type: 'setBrands',
        brands: res.data["results"]
      })
      commit({
        type: 'setOffersLoading'
      })
    })
  },


  async fetchBrandOffers({commit, dispatch},id) {
    let url = '/api/brand/offers/'+id;
    commit({
      type: 'setOffersLoading'
    });
    await this.$axios.get(url).then((res) => {
      commit({
        type: 'setOffers',
        offers: res.data["results"]
      })
       commit({
         type: 'setOffersLoading'
       })
    })
  },


  async fetchCategoryBrands({commit, dispatch},id) {
    let url = '/api/categories/brands/'+id;
    commit({
      type: 'setBrandsLoading'
    })
    await this.$axios.get(url).then((res) => {
      commit({
        type: 'setBrands',
        brands: res.data["results"]
      })
      commit({
        type: 'setBrandsLoading'
      })
    })
  },

  async referPersons({commit, dispatch}, data) {
    await this.$axios.post('/api/referrals', data).then((res) => {
 
      commit({
        type: 'setSnackbar'
      })
    })
  },

  async search({commit, dispatch}, data) {
    let search_string = '/api/search?keyword=' + data;
    await this.$axios.get(search_string).then((res) => {
      commit({
        type: 'setSearchResults',
        search_results: res.data["results"]
      })
    })
  },

  async getAccountInfo({commit, dispatch}){
    let user_id = this.$auth.user.user_id;
    let url = '/api/account/'+user_id;
    await this.$axios.get(url).then((res) => {
      commit({
        type:'setAccountReferrals',
        account_referrals: res.data["results"]
      })
    })
  }
}
