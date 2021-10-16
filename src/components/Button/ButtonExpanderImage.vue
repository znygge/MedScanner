<template>
  <ButtonImage :buttonClicked="buttonClickedListner" />
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

<style>

</style>