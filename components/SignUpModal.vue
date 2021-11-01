<template>
<v-dialog v-model="show" max-width="700px" class="rounded-lg">
  <v-card class="rounded-xl  regular-poppins" elevation="1">
    <div class="d-flex justify-center align-center primary">
      <v-card-title class="white--text">
        Sign up
      </v-card-title>
    </div>
    <v-divider></v-divider>
    <v-form v-model="valid">
      <v-container class="pa-5">
       
            <v-text-field
              v-model="name"
              label="Name"
              outlined
              required
            ></v-text-field>
         
            <v-text-field
              v-model="phone"
              label="Phone Number"
              outlined
              required
            ></v-text-field>
         
            <v-text-field
              v-model="email"
              label="Email"
              outlined
              required
            ></v-text-field>
        
            <v-text-field
              type="password"
              v-model="password"
              outlined
              label="Password"
              required
            ></v-text-field>
    </v-container>
  </v-form>
   <v-card-actions class="pa-5">
     <v-btn dark block large class="white--text rounded-sm" color="secondary" @click.stop="signup">
       <div class="regular-poppins">Sign Up</div>
     </v-btn>
    </v-card-actions>
    <div style="height:25px;"></div>
  </v-card>
</v-dialog>
</template>

<script>

export default {
  name: "SignUpModal",
  props: ['visible'],
  data: () => ({
    valid: false,
    name: '',
    phone: '',
    email: '',
    password: '',

  }),
  computed: {

    show: {
      get() {
        return this.visible
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  },
  methods: {
    async signup() {
      let data = {
        "username": this.name,
        "phone_number": this.phone,
        "email": this.email,
        "password": this.password
      }
      await this.$store.dispatch('_auth/signup', data)

    }
  }
}
</script>
