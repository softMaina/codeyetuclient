<template>
     <v-text-field
     width="50%"
     rounded
     background-color="white"
     label="Which brand are you looking for?"
      height="66"
     >
    <v-btn
      color="red"
      fab
      elevation="0"
      class="ma-0 white--text"
      slot="append"
    >
      <v-icon dark large>
        mdi-magnify
      </v-icon>
    </v-btn>
  </v-text-field>    
</template>

<script>
export default  {
    name: "SearchBar"
    
}
</script>