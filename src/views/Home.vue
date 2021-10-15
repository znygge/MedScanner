<template>
  <div class="home">
    <Button msg="Testar"/>
    <Input msg="Skriv här"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button/Button.vue';
import Input from '@/components/Input/Input.vue';

@Options({
  components: {
    Button,
    Input
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
  .home {
    padding: 24px;
  }
</style>
