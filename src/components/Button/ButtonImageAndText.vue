<template>
  <button v-on:click="buttonClickedListner" class="buttonImage iconAndTextButton" >
    <img :src="imgSrc" /> 
   <span>{{msg}}</span> 
  </button>
</template>

<script lang="ts">
import {Options} from "vue-class-component";
import ButtonImage from "./ButtonImage.vue"; 

@Options({
  components: {
  },
  props: {
    toggleButtonClicked: Function,
    imgSrc: String,
    msg: String
  }
})
export default class ButtonImageAndText extends ButtonImage {
  
}
</script>

<style lang="scss">
 @import "./ButtonImage.scss";
 button.buttonImage.iconAndTextButton{
   aspect-ratio:initial;
 }
 button.buttonImage.iconAndTextButton span{
   display: inline-block;
   line-height: 3em;
    vertical-align: top;
 }
 button.buttonImage.iconAndTextButton img{
   display: inline-block;
   width: auto;
   height: 2em;
   margin:0.5em;
   margin-left:0;
 }
</style>