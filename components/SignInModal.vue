<template>
<v-dialog v-model="show" max-width="700px" class="rounded-lg">
  <v-card class="rounded-lg regular-poppins" elevation="1">
       <div class="d-flex justify-center align-center primary">
    <v-card-title class="white--text ">
      Log in
    </v-card-title>
    </div>
     <v-divider class="primary"></v-divider>
    <v-form v-model="valid">
    <v-container class="mb-0 pl-5 pr-5">
      
          <v-text-field
            v-model="email"
            label="Email"
            outlined
            required
          ></v-text-field>

        
          <v-text-field
           
            v-model="password"
            label="Password"
            required
            outlined
            type="password"
          ></v-text-field>
       
     
    </v-container>
  </v-form>
   <v-card-actions class="pa-5">
     <v-btn dark large block color="secondary" @click.stop="login">
       <div>
         Log In
       </div>
     </v-btn>
    </v-card-actions>
      <div style="height:25px;"></div>
  </v-card>
</v-dialog>
</template>

<script>

export default {
  name: "SignInModal",
  props: ['visible'],
  data: () => ({

    valid: false,
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

    async login() {
      let data = {
        'email': this.email,
        'password': this.password
      }
      await this.$store.dispatch('_auth/login', data)

    }
  }
}
</script>
<style scoped>
  .col-size{
    line-height: 10px;
  }
</style>
