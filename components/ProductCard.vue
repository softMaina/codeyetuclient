<template>
   
        <v-card elevation="2">
        
        <v-card-text class="justify-center">
          <v-img class="center" height="200" width="200" aspect-ratio="16/9" contain :src=logo ></v-img>
          {{caption}}
        </v-card-text>
        <v-card-actions  class="justify-center" justify="center" align="center">
          <v-btn color="red" class="white--text" @click.stop=refer>
          GET KS. {{reward}}
      </v-btn>
        </v-card-actions>
      </v-card>

</template>
<script>
export default {
    name: 'ProductCard',
    props: {caption:String, logo:String, reward:Number, refer:Function},
}
</script>