import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    // store state(s)
    tasks: useStorage('tasks', []),
  }),
  getters: {
    // returning true or false depending on the isFave
    favs() {
      return this.tasks.filter((task) => task.isFav);
    },
  },
  actions: {
    // push to tasks array
    addTask(task) {
      this.tasks.push(task);
    },
    // deleting a task depending if true or not
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      });
    },
    // setting a task to fav if the id matches
    toggleFav(id) {
      const task = this.tasks.find((task) => task.id === id);
      task.isFav = !task.isFav;
    },
  },
});
