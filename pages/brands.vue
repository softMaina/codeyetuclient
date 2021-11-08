<template>
  <v-container min-height="280">
    <v-row class="justify-center mb-10 mt-10">
      <v-col xl="6" lg="6" md="6" sm="12" xs="12">
        <div class="medium-poppins my-title text-center">
          Listing you brand or business is super easy
        </div>
      </v-col>
    </v-row>

    <v-row class="mt-10 mb-10">
      <v-col cols="6" class="d-flex flex-column justify-center">
        <v-row class="d-flex flex-column justify-center">
          <div class="thin-poppins message">

            In almost every industry, referrals are the gold standard of customer acquisition.
            Research has repeatedly shown that referred leads close faster, buy more, and
            stay longer.
          </div>
        </v-row>

        <v-row class="d-flex flex-column justify-center">

          <div class="medium-poppins my-sub-title">
            Where do I start
          </div>

        </v-row>
        <v-row class="d-flex flex-column justify-start">

          <div class="thin-poppins message">
            Have a quality product that customers love: While referral marketing can generate dramatic results, it all
            starts with your product. If your customers are continually telling you how much they love it, they’ll
            probably be willing to do the same thing with their network.

            We can help you built up a captive audience of loyal customers, fans, and followers, through our proven
            methodology, that engages and
            incentivize them correctly, and you’ll see a big ROI.
          </div>

        </v-row>
      </v-col>
      <v-col cols="6">
        <v-card elevation="0" class="rounded-xl pa-5" color="#eaeaea" height="650" width="450">
          <div class="d-flex flex-column justify-space-around" style="height:100%">
            <v-img class="center works" aspect-ratio="16/9" fit src="images/earnpage.png"></v-img>
          </div>
        </v-card>
      </v-col>
    </v-row>


    <v-row class="mb-8 mt-10">

      <div class="medium-poppins my-sub-title">
        To get started
      </div>

    </v-row>
    <v-row class="mb-10">
      <div class="thin-poppins message">
        Schedule a call or visit with one of our representatives through:
        <span class="secondary--text">sales@afrolytix.com</span> or call <span class="text--secondary">0721161473</span>
        or <span class="text--secondary">0736446236</span>
      </div>

    </v-row>


  </v-container>
</template>

<script>
export default {
  auth: false,
  layout: 'main',
  name: "brands"
}
</script>

<style scoped>
.works {
  border-radius: 25px !important;
}

.my-title {
  font-size: 42px;
}

.my-sub-title {
  font-size: 24px;
}

.message {
  font-size: 24px;
}
</style>
