<template>
  <v-sheet elevation="0">
    <v-row style="min-height:400px;">
      <v-col cols="8 regular-poppins">
        <v-data-table
          :headers="headers"
          :items="account_referrals"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar
              flat
            >
              <v-toolbar-title>Your Referrals</v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <v-spacer></v-spacer>
            </v-toolbar>
          </template>
          <template v-slot:item.is_used="{ item }">
            <v-chip
              color="green"
              dark
              v-if="item.is_used"
            >
              Used
            </v-chip>
            <v-chip
              color="green"
              dark
              v-if="!item.is_used"
            >
              Pending
            </v-chip>
          </template>
          <template v-slot:item.date_sent="{item}">
            {{ $moment(item.date_sent).calendar() }}
          </template>
        </v-data-table>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title class="medium-poppins">Total Earnings</v-card-title>
          <v-card-text class="regular-poppins">Ksh {{total}}</v-card-text>

          <v-card-actions>
            <v-btn class="green white--text regular-poppins" block>
              Withdraw to M-PESA
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: "account",
  layout: "main",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Referral',
        align: 'start',
        sortable: false,
        value: 'referred_name',
      },
      {text: 'Offer', value: 'offer.caption', sortable: false},
      {text: 'Date', value: 'date_sent'},
      {text: 'Reward', value: 'offer.offer_rate', sortable: false},
      {text: 'Status', value: 'is_used', sortable: false},
    ],
    editedIndex: -1,

  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
     ...mapGetters({
      account_info: 'offers/account_info',
      account_referrals: 'offers/account_referrals',
      total: 'offers/total',

    })
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.getAccount();
  },

  methods: {
    async getAccount(){
        this.$store.dispatch('offers/getAccountInfo')
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>
