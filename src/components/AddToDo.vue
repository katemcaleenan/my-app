<template>
  <div class="add-to-do">
    <div id="todo-list-example">
      <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat">
        <button @click="addNewToDo">Add</button>
      </form>
      <ul>
        <li
          is="todo-item"
          v-for="(todo, index) in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-on:remove="todos.splice(index, 1)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newToDo: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextToDoId: 4
    }
  },
  methods: {
    addNewToDo() {
      this.todos.push({
        id: this.nextToDoId++,
        title: this.newToDo
      })
      this.newToDo = ''
    }
  }
}
</script>

<style>
</style>
