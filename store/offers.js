export const state = () => ({
    offers: [],
    clicked_offer: null
})

export const getters = {
    offers: state => state.offers,
    clicked_offer: state => state.clicked_offer
}

export const mutations = {
    setOffers(state, payload){
        state.offers = payload.offers
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

    async referPersons({commit, dispatch}, data){
        await this.$axios.post('http://192.168.100.6:5000/api/referrals',data).then((res)=>{
                console.log('referrals sent');
        })
    }
}