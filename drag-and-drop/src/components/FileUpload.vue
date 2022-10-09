<template>
  <h3>{{msg}}</h3>
  <div class="area-file-list"></div>
  <div class="area-file-drop" @drop="fileDrop" @dragover="allowDrop">
    여기에 파일을 드롭하세요
  </div>
</template>

<script>
export default {
  name: 'FileUpload',
  props: {
    msg: String
  },
  data: function() {
    return {
      fileList: []
    }
  },
  methods: {
    fileDrop: function(e) {
      e.preventDefault();
      const droppedFiles = e.dataTransfer.files;
      console.log("[fileDrop]", droppedFiles);
    },
    allowDrop: function(e) {
      e.preventDefault();
    }
  }
}
</script>

<style>
.area-file-drop {
  border: dashed;
  width: 100%;
  height: 200px;
}
</style>
