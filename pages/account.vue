<template>
    <v-sheet elevation="0">
        <v-row style="min-height:400px;">
            <v-col cols="8" >
            <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
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
    <template v-slot:item.actions="{ item }">
 
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-eye
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
            </v-col>
            <v-col cols="4">
                <v-card>
                    <v-card-title>Earnings</v-card-title>
                    <v-card-text>4000</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-sheet>
</template>
<script>
export default {
    name: "account",
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Referral',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Offer', value: 'offer' },
        { text: 'Date', value: 'date' },
        { text: 'Reward', value: 'reward' },
        { text: 'Used', value: 'is_used' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
  
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Allan Maina',
            offer: 'Refer 2 People To Earn 40ksh',
            date: '',
            reward: 24,
            is_used: true,
          },
          
          {
            name: 'William Rotich',
            offer: 'Refer 10 People To Earn 90ksh',
            date: '',
            reward: 67,
            is_used: false,
          },
         
     
        
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
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