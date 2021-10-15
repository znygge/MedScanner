<template>
  <button>
    {{ msg }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import 'Button.scss';

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
  @import 'Button.scss';
</style>
