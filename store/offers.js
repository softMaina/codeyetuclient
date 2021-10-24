export const state = () => ({
    offers: [],
    brands: [],
    referrals: [],
    user: null,
    clicked_offer: null,
    offers_loading: true,
    snackbar: false,
})

export const getters = {

    offers: state => state.offers,
    clicked_offer: state => state.clicked_offer,
    brands: state => state.brands,
    referrals: state => state.referrals,
    offers_loading: state => state.offers_loading,
    snackbar: state => state.snackbar,
}

export const mutations = {
    setOffers(state, payload){
        state.offers = payload.offers
    },
    setBrands(state, payload){
        state.brands = payload.brands
    },
    setReferrals(state, payload){
        state.referrals = payload.referrals
    },
    setClickedOffer(state, payload){
        state.offer = payload.offer
    },
    setOffersLoading(state){
        state.offers_loading = !state.offers_loading
    },
    setSnackbar(state){
        state.snackbar = !state.snackbar
    }

}

export const actions = {
    async fetchOffers({commit, dispatch}) {

        await this.$axios.get('http://159.223.28.235:8080/api/offers').then((res)=>{
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
        await this.$axios.get('http://159.223.28.235:8080/api/referrals').then((res)=>{
            commit({
                type: 'setReferrals',
                offers: res.data["results"]
            })
        })
    },

    async fetchBrands({commit, dispatch}) {
        await this.$axios.get('http://159.223.28.235:8080/api/brands').then((res)=>{
            commit({
                type: 'setBrands',
                offers: res.data["results"]
            })
        })
    },

    async referPersons({commit, dispatch}, data){
        await this.$axios.post('http://159.223.28.235:8080/api/referrals',data).then((res)=>{
                console.log('referrals sent');
                commit({
                    type: 'setSnackbar'
                })
        })
    }
}
