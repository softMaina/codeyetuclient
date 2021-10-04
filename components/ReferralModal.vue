<template>
<v-dialog v-model="show" max-width="700px">
  <v-card>
    <v-card-title>
      Reffer A Person
    </v-card-title>
       <v-data-table
              :headers="headers"
              :items="referrals"
              class="elevation-1"
            ></v-data-table>
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="5"
        >
          <v-text-field
            v-model="name"
            
            :counter="10"
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
            :counter="10"
            label="Phone Number"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
            <v-btn 
            icon
            @click="add"
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
     <v-btn color="secondary" @click.stop="refer">Refer</v-btn>
      <v-btn color="primary" @click.stop="show=false">Close</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'

export default {
    name: "ReferralModal",
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