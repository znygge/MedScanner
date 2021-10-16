<template>
  <button v-on:click="buttonClicked">
    {{ msg }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import 'Button.scss';

@Options({
  props: {
    msg: String,
    buttonClicked: Function
  }
})
export default class Button extends Vue {
  private msg!: string
  private buttonClicked!: (event:Event)=>void;
}
</script>

<style scoped lang="scss">
  @import 'Button.scss';
</style>
