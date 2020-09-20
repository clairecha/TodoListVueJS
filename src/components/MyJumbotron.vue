<template>
  <div>
    
    <MyHeader> </MyHeader>

    <b-jumbotron>
      <template v-slot:header>To Do List</template>
      <template v-slot:lead>New features we will have to done for this project</template>

      <hr class="my-4" />

      <p>Easy to use, we created this webapp just for you !</p>
      <router-view :key="$route.path"></router-view>
    </b-jumbotron>
  </div>
</template>

<script>
import MyHeader from "./MyHeader.vue";

export default {
  name: "MyJumbotron",
  components: {
    MyHeader,
  },
  props: {
    list: Array,
    todo: Number,
    Add: Function,
  },
  methods: {
    emit2(param) {
      this.$emit("fromJumbo", param);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.my-4 {
  width: 90%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
