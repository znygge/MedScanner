<template>
  <div class="home">
    <Button msg="Testar"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button/Button.vue';

@Options({
  components: {
    Button
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
  .home {
    padding: 24px;
  }
</style>
