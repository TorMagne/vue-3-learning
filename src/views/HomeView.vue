<template>
  <!-- header -->
  <header class="text-center pt-5 flex justify-center items-center mb-10">
    <img class="max-w-[60px]" src="../assets/pinia-logo.svg" alt="pinia logo" />
    <h1 class="font-poppins m-0 pt-6 ml-4 text-xl">Pinia Tasks</h1>
  </header>

  <div class="container mx-auto px-4 flex flex-col items-center font-poppins">
    <!-- new task form -->
    <div class="mb-10">
      <TaskForm />
    </div>

    <!-- filter -->
    <nav class="mb-10">
      <button class="rounded-none mr-4 btn btn-primary" @click="filter = 'all'">All task</button>
      <button class="rounded-none btn btn-secondary" @click="filter = 'favs'">Fav task</button>
    </nav>

    <div v-if="taskStore.tasks.length > 0">
      <!-- task list -->
      <div v-if="filter === 'all'">
        <p class="mb-2 text-lg">You have {{ taskStore.tasks.length }} tasks left to do</p>
        <div class="card w-96 bg-base-100 shadow-xl mb-5" v-for="task in taskStore.tasks" :key="task.id">
          <div class="card-body">
            <!-- getting component and sending task props to it -->
            <TaskDetails :task="task" />
          </div>
        </div>
      </div>

      <!-- favs list -->
      <div v-if="filter === 'favs'">
        <p class="mb-2 text-lg">You have {{ taskStore.favs.length }} favs left to do</p>
        <div class="card w-96 bg-base-100 shadow-xl mb-5" v-for="task in taskStore.favs" :key="task.id">
          <div class="card-body">
            <!-- getting component and sending task props to it -->
            <TaskDetails :task="task" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// importing the store
import { useTaskStore } from '../stores/TaskStore';
// importing component(s)
import TaskDetails from '../components/TaskDetails.vue';
import TaskForm from '../components/TasksForm.vue';

// setting the store
const taskStore = useTaskStore();

// this is an reactive value
const filter = ref('all');
// the ref is the same as doing this in vue 2
// data() {
//     return {
//       filter: 'all',
//     };
//   },
</script>
