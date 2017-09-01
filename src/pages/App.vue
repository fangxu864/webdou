<template>
  <div class="block">

    <div class="input-box">
      <el-input v-model="firstText" placeholder="请输入内容"></el-input>
      <my-first :text="firstText"></my-first>
    </div>
    
  </div>
</template>

<script>

import MyFirst from "../components/first.vue";
export default {
  data: function(e) {
    return {
      firstText: 12121
    }
  },
  components: {
    "my-first":MyFirst
  }

}
</script>

