<template>
  <main class="myList">
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
  private myMedicines: Array<Medicine> = [new Medicine("Alvedon", "Paracetamol", "250mg", `Alvedon innehåller paracetamol som är smärtlindrande och febernedsättande. Alvedon används för behandling av tillfälliga feber- och smärttillstånd av lindrig art, t ex feber vid förkylning, huvudvärk, tandvärk, menstruationssmärtor, muskel- och ledvärk. Alvedon kan användas av personer med känslig mage eller magsår och personer med ökad blödningsbenägenhet.`)];
}
</script>

<style scoped>
@import '../styles/myList.scss';
</style>