<template>
  <button class="buttonImage" v-on:click="buttonClicked"><img :src="imgSrc" /></button>
</template>

<script lang="ts">
import {Options} from "vue-class-component";
import Button from "./Button.vue";

@Options({
  props:{
    imgSrc: String
  }
})

export default class ButtonImage extends Button{
  private imgSrc!: string;
  created(){
    console.log(this.imgSrc);
  }
}
</script>


<style scoped lang="scss">
 @import "./ButtonImage.scss"
</style>