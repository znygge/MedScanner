<template>
  <main class="MyList">
    <h1>My List</h1>
    <ul ref="MyList">
      <MedicineListItem v-for="medicine in myMedicines" :medicine="medicine" :key="medicine.id" />
    </ul>
  </main>
</template>
<script lang="ts">
import Medicine from "@/components/MedicineListItem/Medicine";
import MedicineListItem from "@/components/MedicineListItem/MedicineListItem.vue";
import { Vue, Options } from "vue-class-component";

@Options({
  components:{
    MedicineListItem
  }
})
export default class MyList extends Vue{
  private myMedicines: Array<Medicine> = [new Medicine("Alvedon", "Paracetamol", "250mg")];

}
</script>

<style>

</style>