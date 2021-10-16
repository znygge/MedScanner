<template>
  <li ref="listItem" :class="'MedicineListItem ' + (showInfo?'displayInfo':'')">
    <h2 class="medicineName">{{medicine.name}}</h2>
    <p class="prepAndAmount">
      <span class="medicinePrep">{{medicine.prep}}</span>
      <span class="medicineAmount">{{medicine.amount}}</span>
    </p>
    <article class="moreMedInfo">
      {{medicine.moreInfo}}
    </article>
    <ButtonExpanderImage class="expandButton" :toggleButtonClicked="onLiClickListner" />
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
  private showInfo = false;
  mounted(){
    console.log("Hello");
  }

  private onLiClickListner(isOpen:boolean, event:Event){
    this.showInfo = isOpen;
  }
}
</script>

<style scoped lang="scss">
 @import "./MedicineListItem.scss"
</style>