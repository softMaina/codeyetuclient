<template>
  <v-footer
    :absolute="!fixed"
    app
    color="#cecece"
  >
    <v-container fluid style="width:89%">
      <v-row class="airbnb">
        <v-col cols="4">
          <v-list color="footer">
            <v-subheader class="regular-poppins grey--text">ABOUT</v-subheader>
            <v-list-item-group

              active-class="bg-active"
            >
              <v-list-item dense>
                <NuxtLink to="/earn" class="footer-nav">
                  How Codeyetu works
                </NuxtLink>
              </v-list-item>
              <v-list-item dense>
                <NuxtLink to="/earn" class="footer-nav">
                  Investors
                </NuxtLink>
              </v-list-item>
              <v-list-item dense>
                <NuxtLink to="/earn" class="footer-nav">
                  Referrers
                </NuxtLink>
              </v-list-item>
              <v-list-item dense>
                <NuxtLink to="/earn" class="footer-nav">
                  Contacts
                </NuxtLink>
              </v-list-item>
              <v-list-item dense>
                <NuxtLink to="/privacy" class="footer-nav">
                  Privacy
                </NuxtLink>
              </v-list-item>
              <v-list-item dense>
                <NuxtLink to="/terms" class="footer-nav">
                  Terms Of Use
                </NuxtLink>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col cols="4">
          <v-list color="footer">
            <v-subheader class="regular-poppins grey--text">BRAND OWNERS</v-subheader>
            <v-list-item-group
              active-class="bg-active"

            >
              <v-list-item dense>
                <NuxtLink to="/brands" class="footer-nav">
                  How To Get Listed
                </NuxtLink>
              </v-list-item>
              <v-list-item href="#" class="footer-nav" dense>
                Resources
              </v-list-item>
              <v-list-item href="#" class="footer-nav" dense>
                Sales
              </v-list-item>

            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col cols="4">
          <v-list color="footer">
            <v-subheader class="regular-poppins grey--text">SUPPORT</v-subheader>
            <v-list-item-group

              active-class="bg-active"
            >
              <v-list-item dense
                           href="#" class="footer-nav"
                           active-class="bg-active"
              >
                Our COVID-19 Response
              </v-list-item>
              <v-list-item href="#" class="footer-nav" dense>
                Help Center
              </v-list-item>
              <v-list-item href="#" class="footer-nav" dense>
                Cancellation options
              </v-list-item>
              <v-list-item href="#" class="footer-nav" dense>
                Quality assurance
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>

      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.airbnb {

}

.footer-nav {
  text-decoration: none;
}

.airbnb >>> .v-list-item {
  background-color: #cecece !important;
}

.airbnb >>> .v-list-item:hover {
  background-color: unset !important;
  color: unset !important;
}

.bg-active {
  background-color: #cecece;
}

a {
  color: #4b4c4d !important;
}

a:hover {
  background-color: #cecece !important;
}

.footer-nav:hover {
  text-decoration: underline;
  background-color: #cecece !important;
}
</style>
