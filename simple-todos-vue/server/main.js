import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../imports/api/TasksCollection.js';

const insertTask = (taskText) => TasksCollection.insert({ text: taskText });

Meteor.startup(() => {
	console.log(TasksCollection.find().count());
	if (TasksCollection.find().count() === 0) {
		[
			'=============First Task',
			'Second =====Task',
			'Third =====Task',
			'dasdfasddf =====Task',
			'Fifth =====Task',
			'Sixth =====Task',
			'Seventh =====Task',
		].forEach(insertTask);
	}
});
