<template>
  <input type="text"> {{ msg }}
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Button extends Vue {
  msg!: string
}
</script>

<style scoped lang="scss">
  @import 'Input.scss';
</style>