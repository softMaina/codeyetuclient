<template>
<v-dialog v-model="show" max-width="700px">
  <v-card class="rounded-xl">
    <div class="d-flex justify-center align-center primary">
      <v-card-title class="white--text">
        Referral Details
      </v-card-title>
    </div>
    <div class="ma-2 pa-2">
      <v-data-table
        :headers="headers"
        :items="referrals"
        class="elevation-0 mb-3"
        hide-default-footer
      ></v-data-table>
      <v-divider class="primary"></v-divider>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="5"
            >
          <v-text-field
            v-model="company"
            outlined
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
            outlined
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
            outlined
            label="Contact Person"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="5"
        >
          <v-text-field
            v-model="director_phone"
            outlined
            label="Director Phone Number"
            required
          ></v-text-field>
        </v-col>

         <v-col
              cols="12"
              md="5"
            >
          <v-text-field
            v-model="email"
            outlined
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
            outlined
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
            outlined
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

export default {
  name: "CooporateModal",
  auth: false,
  props: ['cooporate'],
  data: () => ({
    employees: ['1-9', '10-19', '20 - 100'],
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
        let user_id = this.$auth.user.user_id
    
      let person = {
        'offer_id': 1,
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
