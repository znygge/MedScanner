<template>
  <input class="input" placeholder="msg" type="search" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Button extends Vue {
  private msg!: string
}
</script>

<style scoped lang="scss">
  @import 'Input.scss';
</style>