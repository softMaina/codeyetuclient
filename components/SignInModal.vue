<template>
<v-dialog v-model="show" max-width="700px" class="rounded-lg">
  <v-card class="rounded-lg" elevation="1">
       <div class="d-flex justify-center align-center primary">
    <v-card-title class="white--text">
      Log in
    </v-card-title>
    </div>
     <v-divider></v-divider>
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="name"
            label="Name"
            outlined
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
        >
          <v-text-field
            v-model="phone"
            label="Password"
            required
            outlined
            type="password"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
   <v-card-actions>
     <v-btn dark large block color="secondary" @click.stop="refer">
       <div>
       Log In
       </div>
       </v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'

export default {
    name: "SignInModal",
  props: ['visible'],
   data: () => ({
      referrals: [],
      valid: false,
      name: '',
      phone: '',
      headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value:'name',
      },
      {
        text: 'Phone Number',
        align: 'start',
        sortable: false,
        value:'phone',
      },

    ],
    }),
  computed: {
    ...mapGetters({
          clicked_offer: 'offers/clicked_offer'
        }),
    show: {
      get () {
        return this.visible
      },
      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  },
  methods: {
    add(){
      let person = {
        'offer_id': 1,
        'name': this.name,
        'phone': this.phone
      };
      this.referrals.push(person);
      this.name = '';
      this.phone = '';
    },
    async refer(){
      // dispatch an action to send referred customers to server
       await this.$store.dispatch('offers/referPersons', this.referrals)
    
    }
  }
}
</script>