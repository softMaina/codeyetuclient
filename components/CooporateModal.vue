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
      <v-divider class="primary"
      v-if="referrals.length > 0"
      ></v-divider>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="5"
            >
          <v-text-field
            v-model="company"
            label="Company Name"
            required
          ></v-text-field>
        </v-col>

         <v-col
              cols="12"
              md="5"
            >
          <v-text-field
            v-model="industry"
            label="Industry"
            required
          ></v-text-field>
        </v-col>

         <v-col
              cols="12"
              md="5"
            >
          <v-select
                        v-model="no_of_employees"
                        :items="employees"
                        label="No. Of Employees"
                      ></v-select>
        </v-col>

         <v-col
              cols="12"
              md="5"
            >
          <v-text-field
            v-model="contact_person"
            label="Contact Person"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="5"
        >

          <vue-tel-input-vuetify v-model="director_phone"  label="Director Phone Number" :onlyCountries="countries" mode="international" ></vue-tel-input-vuetify>
        </v-col>

         <v-col
              cols="12"
              md="5"
            >
          <v-text-field
            v-model="email"
            label="Email"
            required
          ></v-text-field>
        </v-col>

         <v-col
              cols="12"
              md="5"
            >
          <v-text-field
            v-model="service"
            label="Services"
            required
          ></v-text-field>
        </v-col>

         <v-col
              cols="12"
              md="5"
            >
          <v-text-field
            v-model="business_location"
            label="Business Location"
            required
          ></v-text-field>
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
          <v-btn large block color="secondary" @click.stop="refer">Refer</v-btn>
        </template>
        <template v-if="!this.$auth.loggedIn">
          <p>You need to be logged in to refer</p>
        </template>

      </v-card-actions>
    </div>
  </v-card>
</v-dialog>
</template>

<script>
import {mapGetters} from 'vuex'
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue";

export default {
  name: "CooporateModal",
  auth: false,
  props: ['cooporate'],
  data: () => ({
    employees: ['1-9', '10-19', '20 - 100'],
    countries: ["KE"],
    referrals: [],
    valid: false,
    company: '',
    industry: '',
    no_of_employees: '',
    contact_person: '',
    director_phone: '',
    email: '',
    service: '',
    business_location: '',

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
        return this.cooporate
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
        let user_id = this.$auth.user.user_id;
      let person = {
        'offer_id': this.clicked_offer.offer_id,
        "name":this.contact_person,
        "phone":this.director_phone,
        'referred_name': this.contact_person,
        'referred_phone_no': this.director_phone,
         'company':this.company,
        'industry':this.industry,
        'no_of_employees':this.no_of_employees,
        'email':this.email,
        'service':this.service,
        'business_location': this.business_location,
        "user_id": user_id.toString()
      };
      this.referrals.push(person);
    console.log(this.referrals);
       this.company= '',
    this.industry= '',
    this.no_of_employees= '',
    this.contact_person= '',
    this.director_phone= '',
    this.email= '',
    this.service= '',
    this.business_location= ''
    },
    async refer(){
      // dispatch an action to send referred customers to server
       await this.$store.dispatch('offers/referPersons', this.referrals)

    }
  }
}
</script>
