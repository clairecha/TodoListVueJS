<template>
  <div>
    <b-form-input name="inputName" type="text" v-model="todoText" placeholder="add new todo here" />
    <button @click="clickAdd(todoText)" type="button" name="button">ADD</button>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "AddForm",
  data() {
    return {
      todoText: "",
      id: null,
    };
  },
  computed: mapGetters(["getSize"]),
  methods: {
    clickAdd(todoT) {
      // axios
      //   .get("http://localhost:5000/todo")
      //   .then((response) => {
      //     // this.list = response.data;
      //     console.log(this.list.length);
      this.id = this.getSize;
      axios
        .post("http://localhost:5000/todo", {
          name: todoT,
          id: this.id++,
          createdAt: String(new Date()),
          todo: true,
        })
        .then((response) => {
          this.$store.dispatch("ACTION_POST", todoT);

          console.log(response);
          this.todoText = "";
        })
        .catch((error) => {
          console.log(error);
        });
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
    },
  },
};
</script>

