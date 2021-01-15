<template>
  <div>
    <span>主页</span>
    <el-button @click="handleGetRouter">测试</el-button>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        :ref="setItemRef"
        @click="handleRefCheck(index)"
      >
        {{ index }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listRefs = [];

    function setItemRef(el) {
      listRefs.push(el);
    }

    function handleRefCheck(index) {
      const refs = listRefs[index];
      console.log(refs);
    }

    return {
      setItemRef,
      handleRefCheck,
      list,
    };
  },
};
</script>
