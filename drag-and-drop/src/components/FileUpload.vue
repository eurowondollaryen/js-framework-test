<template>
  <h3>{{msg}}</h3>
  <div class="area-file-list">
    <ul>
      <li v-for="file in fileList" :key="file.src">{{file.name}}</li>
    </ul>
  </div>
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
      this.addFiles(droppedFiles);
    },
    allowDrop: function(e) {
      e.preventDefault();
    },
    addFiles: async function(fileList) {
      //파일 추가 후 첨부파일 수가 제한될 경우, return false
      if(fileList.length + this.fileList.length > this.fileNumberLimit) {
        alert("파일 개수는 " + this.fileNumberLimit + "개를 넘을 수 없습니다.");
        return false;
      }
      for(let i = 0; i < fileList.length; ++i) {
        const src = await this.readFiles(fileList[i]);
        //console.log(i);
        //console.log(fileList[i].src);
        //console.log(src);
        fileList[i].src = src;
        this.fileList.push(fileList[i]);
      }
      console.log(this.fileList);
    },
    readFiles: async function(fileList) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
          resolve(e.target.result);
        }
        reader.readAsDataURL(fileList);
      });
    },
    handleRemove: function(index) {
      this.fileList.splice(index, 1);
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
