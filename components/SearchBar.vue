<template>
     <v-text-field
     width="50%"
     color="red"
     rounded
     height="45"
     background-color="white"
     label="Which brand are you looking for?"
     >
    <v-icon
      slot="append"
      color="grey"
    >
      mdi-magnify
    </v-icon>
  </v-text-field>    
</template>

<script>
export default  {
    name: "SearchBar"
    
}
</script>