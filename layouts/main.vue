<template>
  <v-app>
     <v-app-bar app fixed dense class="primary" height="100">
   
           
      <v-container fluid class="mt-0 pa-0" style="width:89%">
        <v-container fluid class="ma-0 pa-0">
          <v-row justify="center" align="center" class="ma-0 pa-0">
            <v-col lg="2" xl="2" md="2" xs="1" sm="2">
              <NuxtLink to="/" class="white--text" style="text-decoration: none; color: inherit;">
                <v-img src="images/logo.png"></v-img>
              </NuxtLink>

            </v-col>
            <v-col cols="8" justify="center" align="center" v-if="!mini">
               <v-toolbar  elevation="0" class="mt-7" color="transparent">

          <v-row justify="center" align="center">
            <v-col xl="8" lg="8" md="8" sm="12" xm="12">
              <SearchBar/>
            </v-col>

          </v-row>

        </v-toolbar>
            </v-col>
            <v-col v-if="mini">
              <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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
                      <v-list-item-group
                color="primary"
              >
                    <v-list-item
                      v-if="!this.$auth.loggedIn"
                    >
                      <v-list-item-title class="regular-poppins" @click="signup_user">Sign up</v-list-item-title>
                    </v-list-item>
                    <v-list-item v-if="!this.$auth.loggedIn">
                      <v-list-item-title class="regular-poppins" @click="signin_user">Log in</v-list-item-title>
                    </v-list-item>
                    <v-list-item v-if="this.$auth.loggedIn">
                      <v-list-item-title class="regular-poppins" @click="goToAccount">Account</v-list-item-title>
                    </v-list-item>
                    <v-list-item v-if="this.$auth.loggedIn">
                      <v-list-item-title class="regular-poppins" @click="logout">Log Out</v-list-item-title>
                    </v-list-item>

                      </v-list-item-group>
                  </v-list>
                </v-card>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    
   </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="secondary"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <NuxtLink to="/brandspage" class="white--text" style="text-decoration: none; color: inherit;">Brands
              </NuxtLink>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <NuxtLink to="/account" class="white--text" style="text-decoration: none; color: inherit;">Referrer
              </NuxtLink>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <NuxtLink to="/support" class="white--text" style="text-decoration: none; color: inherit;">Support
              </NuxtLink>
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

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
              <v-subheader class="regular-poppins grey--text">ABOUT</v-subheader>
              <v-list-item-group
                color="primary"
              >
                <v-list-item dense>
                  How Codeyetu works
                </v-list-item>
                <v-list-item dense>
                  Investors
                </v-list-item>
                <v-list-item dense>
                  Referrers
                </v-list-item>
                <v-list-item dense>
                  Contacts
                </v-list-item>
                <v-list-item dense>
                  Privacy
                </v-list-item>
                <v-list-item dense>
                  Terms Of Use
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="4">
            <v-list color="footer">
              <v-subheader class="regular-poppins grey--text">BRAND OWNERS</v-subheader>
              <v-list-item-group

                color="primary"
              >
                <v-list-item dense>
                 How To Get Listed
                </v-list-item>
                <v-list-item dense>
                  Resources
                </v-list-item>
                <v-list-item dense>
                  Sales
                </v-list-item>

              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="4">
            <v-list color="footer">
              <v-subheader class="regular-poppins grey--text">SUPPORT</v-subheader>
              <v-list-item-group

                color="primary"
              >
                <v-list-item dense>
                  Our COVID-19 Response
                </v-list-item>
                <v-list-item dense>
                  Help Center
                </v-list-item>
                <v-list-item dense>
                  Cancellation options
                </v-list-item>
                <v-list-item dense>
                  Quality assurance
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
    <SignInModal :visible="signin" @close="signin=false"/>
    <SignUpModal :visible="signup" @close="signup=false"/>
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
      fixed: false,
      drawer: false,
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
    mini() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return true
        case 'sm':
          return true
        case 'md':
          return true
        case 'lg':
          return false
        case 'xl':
          return false
      }
    }
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
    },
    async goHome(){
      await this.$router.push('/')
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
  opacity: 0.8;
  display: inline;
}

.bottom {
  list-style-type: none;
}

ul.bottom li {
  margin-top: 5px;
}

</style>
