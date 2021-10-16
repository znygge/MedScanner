<template>
  <div class="search">
    <Input placeholder="Search" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Input from '@/components/Input/Input.vue';

@Options({
  components: {
    Input
  },
})
export default class Search extends Vue {}
</script>


<style scoped>
@import '../styles/search.scss';
</style>
