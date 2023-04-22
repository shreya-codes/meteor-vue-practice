import { Meteor } from 'meteor/meteor';
import { ContactCollection } from '../imports/api/ContactsCollection';

Meteor.startup(async () => {
	ContactCollection.allow({
		insert: function (userId, doc) {
			return true;
		},
	});
});
