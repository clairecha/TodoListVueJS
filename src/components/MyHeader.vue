<template>
  <nav>
    <b-navbar variant="faded" type="light">
      <router-link to="/new">new</router-link>
      <router-link to="/list">list</router-link>
      <router-link to="/done">done</router-link>
      <router-link to="/todo">todo</router-link>
    </b-navbar>
  </nav>
</template>

<script>
export default {
  name: "MyHeader",
  props: {
    list: Array,
  },
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    clickAdd(todoT) {
      this.$parent.$emit("fromAddForm", todoT);
      this.todoText = "";
      console.log(todoT);
    },
  },
};
</script>