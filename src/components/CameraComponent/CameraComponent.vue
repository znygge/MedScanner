<template>
  <video ref="video" autoplay muted playsinline />
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {}
})

export default class CameraComponent extends Vue {
  
  public setVideoStream(video: MediaStream): void{
    (this.$refs.video as HTMLVideoElement).srcObject = video;
  }
}
</script>
<style scoped lang="css" src="./CameraComponent.css" />