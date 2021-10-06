<template>
   
        <v-card elevation="5"  class="rounded-lg" height="450" width="450">
          <div class="d-flex flex-column justify-space-around" style="height:100%">
          <div class="">
          <v-img class="center" height="200" width="200" aspect-ratio="16/9" contain :src=logo ></v-img>
          <v-divider class="red mb-3" style="width:20%; border-width:2px;"></v-divider>
          {{caption}}
          </div>

          <div class="mb-0">
          <v-btn color="red" style="width:40%;" large class="white--text rounded-sm" @click.stop=refer>
          GET Ksh. {{reward}} /=
      </v-btn>
      </div>
      </div>
  
      </v-card>

</template>
<script>
export default {
    name: 'ProductCard',
    props: {caption:String, logo:String, reward:Number, refer:Function},
}
</script>