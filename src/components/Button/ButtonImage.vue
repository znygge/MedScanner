<template>
  <button class="buttonImage"><img :src="img" /></button>
</template>

<script lang="ts">
import {Options} from "vue-class-component";
import Button from "./Button.vue";

@Options({
  img: String
})

export default class ButtonImage extends Button{
  private img!: string;
}
</script>


<style scoped lang="scss">
 @import "./ButtonImage.scss"
</style>