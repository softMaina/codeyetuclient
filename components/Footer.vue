<template>
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
                <NuxtLink to="/earn">
                How Codeyetu works
                </NuxtLink>
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
                <NuxtLink to="/terms">
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

              color="primary"
            >
              <v-list-item dense>
                <NuxtLink to="/brands"  class="footer-nav">
                How To Get Listed
                </NuxtLink>
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
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
