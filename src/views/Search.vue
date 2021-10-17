<template>
  <div class="search">
    <Input placeholder="Search" />
    <MedicineListItem v-for="medicine in myMedicines" :medicine="medicine" :key="medicine.id" />
    <MedicineListItem v-for="medicine in myMedicines" :medicine="medicine" :key="medicine.id" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Input from '@/components/Input/Input.vue';
import Medicine from "@/components/MedicineListItem/Medicine";
import MedicineListItem from '@/components/MedicineListItem/MedicineListItem.vue';

@Options({
  components: {
    Input,
    MedicineListItem,
  },
})
export default class Search extends Vue {
  private myMedicines: Array<Medicine> = [new Medicine("Alvedon", "Paracetamol", "250mg")];
}
</script>


<style scoped>
@import '../styles/search.scss';
</style>
