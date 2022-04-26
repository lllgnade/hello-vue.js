<script setup>
const nullValue = null;
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  msg: String,
});
const emit = defineEmits(["myEmit", "fruitEmit"]);
emit("myEmit", "Emit from Child");
emit("fruitEmit", "방출 : 바나나");
</script>

<template>
  <h2><i>Hello? I'm Child.</i></h2>
  <slot>Slot</slot>
  <h3 :class="{ noMsg: msg == nullValue }">
    {{ msg || "There is no message" }}
  </h3>
  <slot>Slot2</slot>
</template>

<style>
.noMsg {
  text-decoration: line-through;
}
</style>
