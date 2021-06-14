<template>
  <div class="about min-h-screen flex items-center justify-center">
    <SortableTable />
  </div>
</template>

<script>
// import { useMeta } from 'vue-meta';
import SortableTable from "@/components/SortableTable.vue";
export default {
  components: {
    SortableTable,
  },
  setup() {
    // useMeta({
    //   title: 'some page'
    // })
  },
};
</script>
