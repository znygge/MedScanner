<template>
  <input @keyup="eventHandlerInput" v-model="inputValue" class="input" :placeholder="placeholder" type="search" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SearchHandler from '@/handler/SearchHandler';

@Options({
  props: {
    placeholder: String,
    searched: String,
  }
})
export default class Button extends Vue {
  public placeholder!: string;
  private inputValue!: string;
  private searchHandler!: SearchHandler;
  private searched!: string;

  mounted() {
      this.searchHandler = new SearchHandler();
      this.inputValue = this.searched;
  }

    eventHandlerInput(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            this.$router.push({ name: 'Search', params: { searchValue:  (event.target as HTMLInputElement).value } })
            this.eventHandler(event)
        }
    }

  eventHandler(event: Event) {
      const value = (event.target as HTMLInputElement).value;
    //   console.log(value);
    this.searchHandler.test(value);
  }
}
</script>

<style scoped lang="scss">
  @import 'Input.scss';
</style>