<template>
  <div>分页</div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    console.log(route.path);
    console.log(route.query);
  },
};
</script>
