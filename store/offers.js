export const state = () => ({
    offers: [],
    brands: [],
    referrals: [],
    clicked_offer: null
})

export const getters = {
    offers: state => state.offers,
    clicked_offer: state => state.clicked_offer,
    brands: state => state.brands,
    referrals: state => state.referrals
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
    }

}

export const actions = {
    async fetchOffers({commit, dispatch}) {
        await this.$axios.get('http://192.168.100.6:5000/api/offers').then((res)=>{
            commit({
                type: 'setOffers',
                offers: res.data
            })
        })
    },

    async fetchReferals({commit, dispatch}) {
        await this.$axios.get('http://192.168.100.6:5000/api/referrals').then((res)=>{
            commit({
                type: 'setReferrals',
                offers: res.data
            })
        })
    },

    async fetchBrands({commit, dispatch}) {
        await this.$axios.get('http://192.168.100.6:5000/api/brands').then((res)=>{
            commit({
                type: 'setBrands',
                offers: res.data
            })
        })
    },

    async referPersons({commit, dispatch}, data){
        await this.$axios.post('http://192.168.100.6:5000/api/referrals',data).then((res)=>{
                console.log('referrals sent');
        })
    }
}