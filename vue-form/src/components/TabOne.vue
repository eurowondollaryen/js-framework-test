<template>
  <div>this is tab1</div>
  <ag-grid-vue
    style="width: 500px; height: 200px"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData">
  </ag-grid-vue>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";

export default {
  name: "TabOne",
  components: {
    AgGridVue
  },
  data: function() {
    return {
      columnDefs: [
        { headerName: "Make"
          , field: "make"
          , editable: true },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
      ],
      rowData: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },
      ]
    };
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