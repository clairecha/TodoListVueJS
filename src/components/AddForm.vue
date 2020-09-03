<template>
  <div>
    <b-form-input name="inputName" type="text" v-model="todoText" placeholder="add new todo here" />
    <button @click="clickAdd(todoText)" type="button" name="button">ADD</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddForm",
  data() {
    return {
      todoText: "",
      idTodo: 0,
    };
  },
  methods: {
    clickAdd(todoT) {
      axios.get("http://localhost:5000/todo")
        .then((response) => {
          this.list = response.data;
          console.log(this.list.length);
          axios.post("http://localhost:5000/todo", {
            name: todoT,
            id: this.list.length,
            createdAt: String(new Date()),
            todo: true,
          })
            .then((response) => {
              console.log(response);
              console.log(todoT);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>