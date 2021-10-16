<template>
  <li ref="listItem" :class="'MedicineListItem ' + (showInfo?'displayInfo':'')">
    <h2>{{medicine.name}}</h2>
    <p class="prepAndAmount">
      <span class="medicinePrep">{{medicine.prep}}</span>
      <span class="medicineAmount">{{medicine.amount}}</span>
    </p>
    <article>
      Hello I am good for you!
    </article>
    <ButtonExpanderImage :buttonClickedListner="onLiClickListner" />
  </li>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Medicine from "./Medicine";
import ButtonExpanderImage from "@/components/Button/ButtonExpanderImage.vue";

@Options({
  components: {
    ButtonExpanderImage
  },
  props: {
    InMyList: Boolean,
    medicine: Medicine,
  }
})
export default class MedicineListItem extends Vue{
  private medicine!: Medicine;

  mounted(){
    console.log("Hello");
  }

  private onLiClickListner(event:Event){
    console.log(event);
  }
}
</script>

<style scoped lang="scss">
 @import "./MedicineListItem.scss"
</style>