<template>
  <v-app>
    <v-container fluid class="hero">
    <v-toolbar
    elevation="0"
    color="transparent"
    >
    <v-row>
      <v-col cols="2">
        <v-img src="images/logo.jpg"></v-img>
      </v-col>
      <v-col cols="8" justify="center" align="center">
          <ul id="menu">
            <li class="white--text font-weight-medium mb-2">Brands</li>
            <li class="white--text font-weight-medium mb-2" >Referrer</li>
            <li class="white--text font-weight-medium mb-2" >Support</li>
          </ul> 
      </v-col>
       <v-col cols="2">
         <v-btn rounded>
           <v-icon>
             mdi-menu
           </v-icon>
           <v-icon>
              mdi-account
           </v-icon>
         </v-btn>
       </v-col>
    </v-row>
     
    </v-toolbar>
    <v-toolbar elevation="0" color="transparent">
      
         <v-row justify="center" align="center">
           <v-col cols="5">
              <SearchBar/>
           </v-col>
        
      </v-row>
  
    </v-toolbar>
    </v-container>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>   
    <v-footer
      :absolute="!fixed"
      app
    >
     <v-container>
      <v-row>
       
        <v-col cols="4">
          <ul class="bottom">
            <li>ABOUT</li>
            <li>How CodeYetu works</li>
            <li>Newsroom</li>
            <li>Investors</li>
            <li>Referrers</li>
            <li>Careers</li>
            <li>Contacts</li>
            <li>Privacy</li>
            <li>Terms Of Use</li>
          </ul>
        </v-col>
         <v-col cols="4">
           <ul class="bottom">
             <li>BRAND OWNERS</li>
             <li>How to get listed</li>
             <li>Resources</li>
             <li>Sales</li>
           </ul>
         </v-col>
          <v-col cols="4">
            <ul class="bottom">
              <li>SUPPORT</li>
              <li>Our COVID 19 Response</li>
              <li>Help Centre</li>
              <li>Cancellation Options</li>
              <li>Quality Assurance</li>
            </ul>
          </v-col>
         
      </v-row>
       </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: ''
    }
  }
}

</script>
<style scoped>

.hero {
  background: url('./static/images/background.jpeg');
  background-size: fill;
  height: 15vh;
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

</style>