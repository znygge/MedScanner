<template>
  <div class="search">
    <Input placeholder="Search" :searched="search" />
    <MedicineListItem v-for="medicine in myMedicines" :medicine="medicine" :key="medicine.id" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Input from '@/components/Input/Input.vue';
import DatabaseHandler from "@/handler/DatabaseHandler"
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
  private search!: any;
  private dbHandler: DatabaseHandler = new DatabaseHandler();
  mounted() {
    this.search = this.$route.params.searchValue;
    this.myMedicines = this.dbHandler.getMedData(this.search);
    console.log(this.myMedicines, this.search);
  }
}
</script>


<style scoped>
@import '../styles/search.scss';
</style>
