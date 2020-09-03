<template>
  <ul>
    <SingleTodo
      @toggle1="emit1"
      v-bind:item="item"
      v-for="item in list"
      :key="item.id"
    >{{item.name}}</SingleTodo>
  </ul>
</template>

<script>
import SingleTodo from "./SingleTodo.vue";
import axios from "axios";

export default {
  name: "ListTodo",
  components: {
    SingleTodo,
  },
  data() {
    return {
      list: [],
    };
  },
  props: {
    mylist: Array,
    todo: Number,
    whatToDisplay: String,
  },

  methods: {
    toggle1(value) {
      this.todo = value;
    },
    emit1(param) {
      console.log("weshhhh");

      this.$emit("fromList", param);
    },
  },
  mounted() {
    axios
      .get("http://localhost:5000/todo/")
      .then((response) => {
        this.list = response.data;
        if (this.whatToDisplay == "done") {
          let done = this.list.filter((element) => element.todo == false);
          this.list = done;
        } else if (this.whatToDisplay == "todo") {
          let todoL = this.list.filter((element) => element.todo == true);
          this.list = todoL;
        }
        console.log("con", this.list.length);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
