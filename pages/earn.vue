<template>
  <v-container min-height="280">

    <v-row class="justify-center mb-10 mt-10">
      <v-col xl="6" lg="6" md="6" sm="12" xs="12">
        <div class="medium-poppins my-title text-center">
          You’re just 3 steps away from earning amazing rewards from quality brands
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-10">
      <v-col cols="6" class="d-flex flex-column justify-center" align="start">
        <div class="medium-poppins my-sub-title">
          1. Browse
        </div>
        <div class="thin-poppins message">
          Start by exploring listed brands. Analyze listed brands to understand the product or service offering.
        </div>
      </v-col>
      <v-col cols="6">
        <v-card elevation="0" class="rounded-xl pa-5" color="#eaeaea" height="350" width="450">
          <div class="d-flex flex-column justify-space-around" style="height:100%">
             <v-img class="center works" aspect-ratio="16/9" fit src="images/browse.jpg"></v-img>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!--    refer-->
    <v-row class="mt-10 mb-10">
      <v-col cols="6">
        <v-card elevation="0" class="rounded-xl pa-5" color="#eaeaea" height="350" width="450">
          <div class="d-flex flex-column justify-space-around" style="height:100%">
            <v-img class="center works" aspect-ratio="16/9" fit src="images/earnpage.png"></v-img>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6"  class="d-flex flex-column justify-center">
        <div class="medium-poppins  my-sub-title">
          2. Refer
        </div>
        <div class="thin-poppins message">
          Once you’ve found the brand you are looking for, refer your contacts, peers and friends to use the brand — in
          just
          a few clicks
        </div>
      </v-col>

    </v-row>
    <v-row class="mt-10 mb-10">
      <v-col cols="6" class="d-flex flex-column justify-center">
        <div class="medium-poppins my-sub-title">
          3. Earn
        </div>
        <div class="thin-poppins message">
          You’ve just earned amazing rewards! Whenever your referrals use the brand your account is credited with gift
          vouchers, cash back rewards and more.
        </div>
      </v-col>
      <v-col cols="6">
        <v-card elevation="0" class="rounded-xl pa-5" color="#eaeaea" height="350" width="450">
          <div class="d-flex flex-column justify-space-around" style="height:100%">
            <v-img class="center works" aspect-ratio="16/9" fit src="images/forbrand.png"></v-img>
          </div>
        </v-card>
      </v-col>

    </v-row>

    <!--    enquiries-->
    <v-row class=" mb-4 mt-4">
      <v-col cols="12">
      <div class="regular-poppins my-sub-title">
        Still have questions?
      </div>
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="12">
        <div class="regular-poppins">
          How do I earn?
        </div>
      </v-col>
      <v-col cols="12" class="thin-poppins">
      You only earn once your referrals have bough products or services from the brands you have referred
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="12">
      <div class="regular-poppins">
        How do I claim my earning?
      </div>
      </v-col>
      <v-col cols="12" class="thin-poppins">
      By simply clicking the withdraw button on your account profile, your total earning will be sent to you by Mpesa.
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="12">
      <div class="regular-poppins">
        Why are you not able to claim your earning?
      </div>
      </v-col>
      <v-col cols="12" class="thin-poppins">
      Earning cannot be claimed when your referrals have not used services or products from referred brands.
      </v-col>
    </v-row>

    <v-spacer></v-spacer>
    <v-row class="mt-10">

      <v-col cols="12">

        <div class="regular-poppins my-sub-title">
          Need more information?
        </div>
      </v-col>
      <v-col cols="12" class="thin-poppins">
        Visit <span class="secondary--text">support</span> to get additional information.
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  auth: false,
  layout: "main",
  name: "earn"
}
</script>

<style scoped>
.works {
  border-radius: 25px !important;
}
.my-title {
 font-size: 42px;
}
.my-sub-title{
  font-size: 24px;
}
.message {
  font-size: 24px;
}
</style>
