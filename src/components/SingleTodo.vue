<template>
  <li @click="toggleSingle()" :class="{ active: !item.todo }">
    <b-icon icon="check2-circle"></b-icon>
    <slot></slot>
  </li>
</template>

<script>
import axios from "axios";

export default {
  name: "ListTodo",
  props: {
    item: Object,
  },
  methods: {
    toggleSingle() {
      this.$emit("toggle1", this.item.id);
      console.log(this.item.id);
      axios.put(`http://localhost:5000/todo/${this.item.id}`);
      location.reload();
    },
  },
};
</script>

<style>
.active {
  text-decoration: line-through;
}
li:hover {
  cursor: pointer;
}
</style>