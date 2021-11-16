<template>
<v-dialog v-model="show" max-width="880px">
  <v-card class="rounded-xl regular-poppins">
    <div class="d-flex justify-center align-center primary">
      <v-card-title class="white--text">
         Referral Details
      </v-card-title>
    </div>
    <div class="ma-2 pa-2">
      <v-data-table v-if="referrals.length > 0"
        :headers="headers"
        :items="referrals"
        class="elevation-0 mb-3"
        hide-default-footer
      ></v-data-table>
      <v-divider class="primary" v-if="referrals.length > 0"></v-divider>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="5"
            >
          <v-text-field
            v-model="name"

            label="Name"
            :rules="nameRules"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="5"
        >

          <vue-tel-input-vuetify v-model="phone"  :onlyCountries="countries" mode="international" ></vue-tel-input-vuetify>
        </v-col>
        <v-col cols="12" md="2">
          <v-btn
            @click="add"
            fab
            class="primary"
          >
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-card-actions justify="end" align="end">
        <template v-if="this.$auth.loggedIn">
          <v-btn large block color="secondary" :disabled="referrals.length < 1"  @click.stop="refer">Refer</v-btn>
        </template>
        <template v-if="!this.$auth.loggedIn">
          <p>You need to be logged in to refer someone</p>
        </template>

      </v-card-actions>
    </div>
  </v-card>
</v-dialog>
</template>

<script>
import {mapGetters} from 'vuex';
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue";

export default {
  name: "ReferralModal",
  auth: false,
  props: ['visible'],
  data: () => ({
    referrals: [],
    countries: ["KE"],
    valid: false,
    name: '',
    nameRules: [

      ],
    phone: '',
    phoneRules: [
    ],
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      {
        text: 'Phone Number',
        align: 'start',
        sortable: false,
        value:'phone',
      },

    ],
    }),
    components: {
      VueTelInputVuetify
    },
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
      let user_id = this.$auth.user.user_id
      console.log(user_id.toString())
      let person = {
        'offer_id': 1,
        'name': this.name,
        'phone': this.phone,
        'user_id': user_id.toString(),
      };
      console.log(person)
      this.referrals.push(person);
      this.name = '';
      this.phone = '';
    },
    async refer(){

      // dispatch an action to send referred customers to server
      if(this.referrals.length > 0){
     await this.$store.dispatch('offers/referPersons', this.referrals)
      }

    }
  }
}
</script>
