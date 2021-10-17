<template>
  <section class="appWrapper">
    <router-view class="page"/>
    <Nav class="nav"/>
  </section>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Nav from '@/components/Nav/Nav.vue';
@Options({
  components: {
    Nav
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
  :root{
    --primary-color: #191B1C!important;
    --secondary-color: #232A31!important;
    --non-doping-color: #2CB039!important;
    --doping-color: #FF1717!important;
    --search-and-link-color: #4999CC!important;
  }
  .page{
    grid-area: mainPage;
  }
  .appWrapper{
    display: grid;
    height: 100vh;
    width: 100%;
    grid-template-columns: auto;
    grid-template-rows: 1fr 5em;
    grid-template-areas: "mainPage"
                         "navigation";
  }
  .nav{
    grid-area: navigation;
  }
</style>
