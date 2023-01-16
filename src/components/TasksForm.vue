<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="I need to..." class="input w-full max-w-xs" v-model="newTask" />
    <button class="btn btn-success rounded-none">Add</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
// importing the store
import { useTaskStore } from '../stores/TaskStore';

// setting the store
const taskStore = useTaskStore();
// this is an reactive value
const newTask = ref('');

// function for sending data to the TaskStore
const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
      id: Math.floor(Math.random() * 10000),
    });
    // resetting the value of the form
    newTask.value = '';
  }
};
</script>
