<template>
  <v-app>
    <v-img src="images/background.jpg" cover height="230">
    <v-container fluid class="mt-3 pa-0" style="width:89%">

    <v-container fluid class=" ma-0 pa-0">
    <v-row justify="center" align="center" class="ma-0 pa-0">
      <v-col cols="2">
        <v-img src="images/logo.png"></v-img>
      </v-col>
      <v-col class="" cols="8" justify="center" align="center">
          <ul id="menu">
            <li class="white--text font-weight-bold mb-2">
              <NuxtLink to="/brandspage" class="white--text" style="text-decoration: none; color: inherit;">Brands
              </NuxtLink>
            </li>
            <li class="white--text font-weight-bold mb-2">Referrer</li>
            <li class="white--text font-weight-bold mb-2">Support</li>
          </ul>
      </v-col>
       <v-col cols="2" justify="end" align="end">
         <v-menu
           offset-y
           left


         >
           <template v-slot:activator="{ on, attrs }">
             <v-btn
               rounded
               v-bind="attrs"
               v-on="on"
               height="53"
               width="100"
             >
               <v-icon>
                 mdi-menu
           </v-icon>
           <v-icon>
              mdi-account
           </v-icon>
        </v-btn>
      </template>
      <v-card class="rounded-lg mt-2" width="250">
      <v-list>
        <v-list-item
          v-if="!this.$auth.loggedIn"
        >
          <v-list-item-title @click="signup_user">Sign up</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="!this.$auth.loggedIn">
          <v-list-item-title @click="signin_user">Log in</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="this.$auth.loggedIn">
          <v-list-item-title @click="goToAccount">Account</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="this.$auth.loggedIn">
          <v-list-item-title @click="logout">Log Out</v-list-item-title>
        </v-list-item>


      </v-list>
      </v-card>
    </v-menu>
       </v-col>
    </v-row>
    </v-container>

    <v-toolbar elevation="0" class="mt-7" color="transparent">

         <v-row justify="center" align="center">
           <v-col cols="8">
              <SearchBar/>
           </v-col>

      </v-row>

    </v-toolbar>
    </v-container>
    </v-img>

    <v-main>
      <v-container fluid class="mb-4" style="width:89%">
        <Nuxt/>
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      color="#cecece"
    >
     <v-container fluid style="width:89%">
      <v-row>
        <v-col cols="4">
          <v-list color="footer">
      <v-subheader class="font-weight-black">ABOUT</v-subheader>
      <v-list-item-group

        color="primary"
      >
        <v-list-item>
            <v-list-item-title>How Codeyetu works</v-list-item-title>
        </v-list-item>
         <v-list-item>
            <v-list-item-title>Newsroom</v-list-item-title>
        </v-list-item>
         <v-list-item>
            <v-list-item-title>Investors</v-list-item-title>
        </v-list-item>
         <v-list-item>
            <v-list-item-title>Referrers</v-list-item-title>
        </v-list-item>
         <v-list-item>
            <v-list-item-title>Careers</v-list-item-title>
        </v-list-item>
         <v-list-item>
            <v-list-item-title>Contacts</v-list-item-title>
        </v-list-item>
         <v-list-item>
            <v-list-item-title>Privacy</v-list-item-title>
        </v-list-item>
        <v-list-item>
            <v-list-item-title>Terms Of Use</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
        </v-col>
         <v-col cols="4">
             <v-list color="footer">
      <v-subheader class="font-weight-black" >BRAND OWNERS</v-subheader>
      <v-list-item-group

        color="primary"
      >
        <v-list-item>
            <v-list-item-title>How To Get Listed</v-list-item-title>
        </v-list-item>
         <v-list-item>
            <v-list-item-title>Resources</v-list-item-title>
        </v-list-item>
         <v-list-item>
            <v-list-item-title>Sales</v-list-item-title>
        </v-list-item>

      </v-list-item-group>
    </v-list>
         </v-col>
          <v-col cols="4">
              <v-list color="footer">
      <v-subheader class="font-weight-black">SUPPORT</v-subheader>
      <v-list-item-group

        color="primary"
      >
        <v-list-item>
            <v-list-item-title>Our COVID-19 Response</v-list-item-title>
        </v-list-item>
         <v-list-item>
            <v-list-item-title>Help Center</v-list-item-title>
        </v-list-item>
         <v-list-item>
            <v-list-item-title>Cancellation options</v-list-item-title>
        </v-list-item>
         <v-list-item>
            <v-list-item-title>Quality assurance</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
          </v-col>

      </v-row>
       </v-container>
    </v-footer>
    <v-snackbar
      right
      top
      v-model=snackbar
    >
      Referrals Sent!!

      <template v-slot:action="{ attrs }">
        <v-btn
          color="secondary"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
     <SignInModal :visible="signin" @close="signin=false" />
     <SignUpModal :visible="signup" @close="signup=false" />
  </v-app>
</template>

<script>
import SignUpModal from '../components/SignUpModal.vue';
import SignInModal from '../components/SignInModal.vue';
import {mapGetters} from 'vuex'

export default {
  name: 'default',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '',
      signin: false,
      signup: false
    }
  },
    computed: {
    ...mapGetters({
          snackbar: 'offers/snackbar'
        }),
        },
  components: {SignUpModal, SignInModal},
  methods: {
    signin_user: function () {
      this.signin = true
    },
    signup_user: function () {
      this.signup = true
    },
    goToAccount() {
      this.$router.push('/account');
    },
    async logout() {
      await this.$store.dispatch('_auth/logout')
    }
  }
}

</script>
<style scoped>

.hero {
  background: url(static/images/background.jpg);
}
 ul#menu li {
   padding: 30px;
   font-size: 20px;
   opacity:  0.8;
  display:inline;
}
.bottom {
    list-style-type: none;
}
ul.bottom li{
  margin-top: 5px;
}

</style>
