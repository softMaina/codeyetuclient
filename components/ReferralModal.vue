<template>
<v-dialog v-model="show" max-width="700px">
  <v-card class="rounded-xl">
    <div class="d-flex justify-center align-center primary">
      <v-card-title class="white--text">
        Refer A Person
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
            v-model="name"
            outlined
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="5"
        >
          <v-text-field
            v-model="phone"
            outlined
            label="Phone Number"
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
          <p>You need to be logged in to refer someone</p>
        </template>

      </v-card-actions>
    </div>
  </v-card>
</v-dialog>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "ReferralModal",
  auth: false,
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
     await this.$store.dispatch('offers/referPersons', this.referrals)
     
    }
  }
}
</script>
