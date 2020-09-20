<template>
  <nav>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">TodoList</b-navbar-brand>

      <b-navbar variant="faded" type="light">
        <b-navbar-brand>
          <router-link to="/new">new</router-link>
        </b-navbar-brand>
        <b-navbar-brand>
          <router-link to="/list">list</router-link>
        </b-navbar-brand>
        <b-navbar-brand>
          <router-link to="/done">done</router-link>
        </b-navbar-brand>
        <b-navbar-brand>
          <router-link to="/todo">todo</router-link>
        </b-navbar-brand>
      </b-navbar>
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
<style scoped>
nav {
  width: 100%;
  color: white;
}
</style>