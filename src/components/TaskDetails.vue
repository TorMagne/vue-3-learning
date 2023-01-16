<template>
  <div class="flex">
    <h2 class="card-title mr-auto">{{ task.title }}</h2>
    <div>
      <i class="material-icons cursor-pointer mr-2" @click="taskStore.deleteTask(task.id)">delete</i>
      <i class="material-icons cursor-pointer" :class="task.isFav ? 'text-red-400' : ''" @click="taskStore.toggleFav(task.id)">favorite</i>
    </div>
  </div>
</template>

<script setup>
// importing the store
import { useTaskStore } from '../stores/TaskStore';

// setting props that is comming from parent
const props = defineProps(['task']);

// setting the store
const taskStore = useTaskStore();
</script>
