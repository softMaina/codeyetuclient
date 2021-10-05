<template>
   
        <v-card elevation="2">
        <v-card-text class="justify-center">
          <v-img class="center" height="200" width="200" aspect-ratio="16/9" contain :src=logo ></v-img>
          <v-divider class="red mb-3" style="width:20%; border-width:2px;"></v-divider>
          {{caption}}
        </v-card-text>
        <v-card-actions  class="justify-center mt-0" justify="center" align="center">
          <v-btn color="red" style="width:40%;" large class="white--text mb-3" @click.stop=refer>
          GET Ksh. {{reward}} /=
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