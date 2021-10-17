<template>
  <div class="home">
    <CameraComponent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button/Button.vue';
import CameraComponent from '@/components/CameraComponent/CameraComponent.vue';

@Options({
  components: {
    Button,
    CameraComponent,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
  .home {
    padding: 24px;
  }
</style>
