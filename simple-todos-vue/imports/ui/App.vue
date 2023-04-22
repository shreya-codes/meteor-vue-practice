<template>
	<div class="container">
		<header>
			<h1>Todo List</h1>
		</header>
		{{ tasks }}
		<ul>
			<Task task="{ text: 'Test Task ======' }" />

			<Task v-for="task in tasks" v-bind:key="task._id" v-bind:task="task" />
		</ul>
	</div>
</template>

<script>
import Vue from 'vue';
import Task from './components/Task.vue';
import { TasksCollection } from '../api/TasksCollection';

export default {
	components: {
		Task,
	},
	data() {
		return { tasks: [] };
	},
	methods: {},
	meteor: {
		tasks() {
			console.log('in here');
			const tasks = TasksCollection.find({}).fetch();
			console.log(tasks); // Add this line
			return tasks;
		},
	},
};
</script>
