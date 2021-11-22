export const state = () => ({
  offers: [],
  brands: [],
  referrals: [],
  search_results: [],
  user: null,
  account_info: null,
  account_referrals: [],
  clicked_offer: null,
  offers_loading: false,
  brands_loading: true,
  snackbar: false,
  signin: false,
  total: 0,
  current_offer: null,
})

export const getters = {

  offers: state => state.offers,
  clicked_offer: state => state.clicked_offer,
  brands: state => state.brands,
  referrals: state => state.referrals,
  offers_loading: state => state.offers_loading,
  snackbar: state => state.snackbar,
  signin: state => state.signin,
  search_results: state => state.search_results,
  brands_loading: state => state.brands_loading,
  account_info: state => state.account_info,
  account_referrals: state => state.account_referrals,
  total: state => state.total,
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
    state.clicked_offer = payload.offer
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
  setSignin(state) {
    state.signin = !state.signin
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
  setTotal(state, payload){
    state.total = payload.total
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
    console.log(id);
    commit({
      type: 'setBrandsLoading'
    })
    await this.$axios.get(url).then((res) => {
      commit({
        type: 'setBrands',
        brands: []
      })
      commit({
        type: 'setBrands',
        brands: res.data["results"]
      })
      commit({
        type: 'setBrandsLoading'
      })
      console.log(res.data['results'])
    })
  },

  async referPersons({commit, dispatch}, data) {
    await this.$axios.post('/api/referrals', data).then((res) => {

      commit({
        type: 'setSnackbar'
      })
    })
  },

  async search({commit, state}, data) {
    let search_string = '/api/search?keyword=' + data;
    await this.$axios.get(search_string).then((res) => {
      commit({
        type: 'setSearchResults',
        search_results: res.data["results"]
      });
      console.log(state.search_results.length);
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
      commit({
        type: 'setTotal',
        total: res.data["total"]
      })
    })
  }
}
