<template>
  <ul>
    <SingleTodo
      @toggle1="emit1"
      v-bind:item="item"
      v-for="item in getTodos"
      :key="item.id"
    >{{ item.name }}</SingleTodo>
  </ul>
</template>

<script>
import SingleTodo from "./SingleTodo.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "ListTodo",
  components: {
    SingleTodo,
  },
  data() {
    return {
      list: [],
      getTodos: [],
    };
  },
  props: {
    mylist: Array,
    todo: Number,
    whatToDisplay: String,
  },
  computed: mapGetters(["getTodo"]),
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
        this.getTodos = response.data;
        this.$store.dispatch("ACTION_GET", response.data);
        if (this.whatToDisplay == "done") {
          let done = this.getTodos.filter((element) => element.todo == false);
          this.getTodos = done;
        } else if (this.whatToDisplay == "todo") {
          let todoL = this.getTodos.filter((element) => element.todo == true);
          this.getTodos = todoL;
        }
        console.log("con", this.getTodos.length);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
