<template>
  <el-input-number v-model="num1" @change="handleChange" :min="1" :max="6000"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>