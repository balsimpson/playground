<template>
  <draggable
    class="list-group space-y-2"
    tag="transition-group"
    :component-data="{
      tag: 'ul',
      type: 'transition-group',
      name: !drag ? 'flip-list' : null,
    }"
    v-model="list"
    v-bind="dragOptions"
    @start="drag = true"
    @end="dragEnd"
    item-key="order"
    handle=".handle"
  >
    <!-- <template #item="{ element }"> -->
    <template #item="">
      <!-- <slot name="item"> {{ element }}</slot> -->
      <!-- <template #item="{ element }">
          <li class="max-w-xl grid grid-cols-3 gap-4 bg-indigo-100 p-2 shadow">
            <div class="h-full">
              <img class="h-auto w-auto" src="https://source.unsplash.com/random" alt="">
            </div>
            <div class="col-span-2 text-left">
            <div class="font-serif text-2xl">{{ element.name }}</div>
              {{ element.order }} Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Possimus sunt recusandae accusantium, sequi
              atque distinctio rem veniam sapiente laborum dolor.
               <i class="fa fa-align-justify handle cursor-move">sd</i>
            </div>
          </li>
        </template> -->
    </template>
  </draggable>

  <!-- <rawDisplayer class="col-3" :value="list" title="List" /> -->
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
import draggable from "vuedraggable";
const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs",
];
export default {
  name: "transition-example-2",
  display: "Transitions",
  // order: 7,
  components: {
    draggable,
  },
  setup() {
    let list = ref([]);

    list.value = message.map((name, index) => {
      return { name, order: index + 1 };
    });

    const drag = ref(true);

    const dragEnd = () => {
      drag.value = false;
      // console.log('drag end', list.value);
    };

    const sort = () => {
      list.value = list.value.sort((a, b) => a.order - b.order);
    };

    const dragOptions = computed(() => {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    });

    return { list, drag, sort, dragOptions, dragEnd };
  },
};
</script>

<style>
.ghost {
  opacity: 0.3;
  background: #adafb1;
}
</style>