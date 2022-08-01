<template>
  <div>this is tab1</div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";

export default {
  components: {
    AgGridVue
  },
  methods: {
    showGrid: function() {
      console.log(this.AgGridVue);
    }
  }
}
</script>

<style>
</style>