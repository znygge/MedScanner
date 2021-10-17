<template>
  <div class="home">
    <CameraComponent ref="camera" />
    <Input placeholder="Search"/>
    <ButtonImage class="ButtonImageShutter" :imgSrc='require("@/assets/camera_shutter.svg")'/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button/Button.vue';
import CameraComponent from '@/components/CameraComponent/CameraComponent.vue';
import Input from '@/components/Input/Input.vue';
import ButtonImage from '@/components/Button/ButtonImage.vue';
import VideoHandler from '@/handler/VideoHandler';

@Options({
  components: {
    Button,
    CameraComponent,
    Input,
    ButtonImage,
  },
})
export default class Home extends Vue {
  private videoHandler!: VideoHandler;
  mounted() {
    this.videoHandler = new VideoHandler(this.videoCallback, true)
  }

  private videoCallback(stream: MediaStream) {
    (this.$refs.camera as CameraComponent).setVideoStream(stream);
  }
}
</script>

<style scoped>
@import '../styles/home.scss';
</style>