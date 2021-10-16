<template>
  <ButtonImage :buttonClicked="buttonClickedListner" :class="'arrowButton '+ (open? 'close':'')" :imgSrc='require("@/assets/chevron.svg")' />
</template>

<script lang="ts">
import {Options} from "vue-class-component";
import ButtonImage from "./ButtonImage.vue"; 

@Options({
  components: {
    ButtonImage
  },
  props: {
    toggleButtonClicked: Function
  }
})
export default class ButtonToggleImage extends ButtonImage {
  private open = false;
  private toggleButtonClicked!: (open: boolean, event:Event)=>void;

  buttonClickedListner(event: Event){
    this.open = !this.open;
    if(this.toggleButtonClicked)
      this.toggleButtonClicked(this.open,event);
  }


}
</script>

<style lang="scss">
  .arrowButton img{
    transform: rotate(90deg);
  }
  .arrowButton.close img{
    transform: rotate(270deg);
  }
</style>