<template>
  <div>
  <v-row justify="center" align="center">
    <v-col cols="4" sm="12" md="4">
        <v-card elevation="2">
        
        <v-card-text class="justify-center">
          <v-img class="center" height="200" width="200" aspect-ratio="16/9" contain src="images/dstv.jpeg"></v-img>
          Invite 5 People to buy ksh.100 airtel airtime and Earn 40/=
        </v-card-text>
        <v-card-actions  class="justify-center" justify="center" align="center">
          <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red"
          class="white--text"
          v-bind="attrs"
          v-on="on"
        >
          GET KS. 40/=
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Refer User
        </v-card-title>

        <v-card-text>
          <v-text-field
            name="email"
            label="user email"
            id="id"
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </v-card-actions>
      </v-card>
    </v-col>


      <v-col cols="4" sm="12" md="4">
        <v-card elevation="2">
        
        <v-card-text class="justify-center">
          <v-img class="center" height="200" width="200" aspect-ratio="16/9" contain src="images/cocacola.jpeg"></v-img>
          Invite 5 People to buy ksh.100 airtel airtime and Earn 40/=
        </v-card-text>
        <v-card-actions  class="justify-center" justify="center" align="center">
          <v-btn color="red" class="white--text">
          GET KS. 40/=
      </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>


       <v-col cols="4" sm="12" md="4">
        <v-card elevation="2">
        
        <v-card-text class="justify-center">
          <v-img class="center" height="200" width="200" aspect-ratio="16/9" contain src="images/naivas.jpeg"></v-img>
          Invite 5 People to buy ksh.100 airtel airtime and Earn 40/=
        </v-card-text>
        <v-card-actions  class="justify-center" justify="center" align="center">
          <v-btn color="red" class="white--text">
          GET KS. 40/=
      </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>



       <v-col cols="4" sm="12" md="4">
        <v-card elevation="2">
        
        <v-card-text class="justify-center">
          <v-img class="center" height="200" width="200" aspect-ratio="16/9" contain src="images/gotv.jpeg"></v-img>
          Invite 5 People to buy ksh.100 airtel airtime and Earn 40/=
        </v-card-text>
        <v-card-actions  class="justify-center" justify="center" align="center">
          <v-btn color="red" class="white--text">
          GET KS. 40/=
      </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>



       <v-col cols="4" sm="12" md="4">
        <v-card elevation="2">
        
        <v-card-text class="justify-center">
          <v-img class="center" height="200" width="200" aspect-ratio="16/9" contain src="images/mpesa.jpeg"></v-img>
          Invite 5 People to buy ksh.100 airtel airtime and Earn 40/=
        </v-card-text>
        <v-card-actions  class="justify-center" justify="center" align="center">
          <v-btn color="red" class="white--text">
          GET KS. 40/=
      </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>



       <v-col cols="4" sm="12" md="4">
        <v-card elevation="2">
        
        <v-card-text class="justify-center">
          <v-img class="center" height="200" width="200" aspect-ratio="16/9" contain src="images/airtel.jpeg"></v-img>
          Invite 5 People to buy ksh.100 airtel airtime and Earn 40/=
        </v-card-text>
        <v-card-actions  class="justify-center" justify="center" align="center">
          <v-btn color="red" class="white--text">
          GET KS. 40/=
      </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>


    
  </v-row>
  <v-row justify="center" align="center">

    <v-col cols="3">
       <v-card  class="rounded-xl" width="480" height="400" img="images/food.jpg">
      <v-card-text class="white--text ">
       <p class="pro-text">Eat Out</p> 
      </v-card-text>
    </v-card>
    </v-col>

     <v-col cols="3">
       <v-card  class="rounded-xl" width="480" height="400" img="images/business.jpg">
      <v-card-text class="white--text ">
       <p class="pro-text">Financial Services</p> 
      </v-card-text>
    </v-card>
    </v-col>

     <v-col cols="3">
       <v-card  class="rounded-xl" width="480" height="400" img="images/home.jpg">
      <v-card-text class="white--text ">
       <p class="pro-text">Home Essentials</p> 
      </v-card-text>
    </v-card>
    </v-col>

     <v-col cols="3">
       <v-card  class="rounded-xl" width="480" height="400" img="images/automotive.jpeg">
      <v-card-text class="white--text ">
       <p class="pro-text">Auto Service</p> 
      </v-card-text>
    </v-card>
    </v-col>
    
  </v-row>
  </div>
</template>

<script>
import ImageCard from '../components/ImageCard.vue';
import ProductCard from '../components/ProductCard.vue';

export default {
  data () {
      return {
        dialog: false,
      }
    },
  components: {
    ImageCard,
    ProductCard
  }
}
</script>


<style scoped>
.pro-text {
  font-weight: bold;
  font-size: 28px;
}
</style>
