import React from 'react';
import { useState } from 'react';
import { ContactCollection } from '../api/ContactsCollection';
const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const saveContact = () => {
		console.log(email, name, imageUrl);
		ContactCollection.insert({ email, name, imageUrl });
		setName('');
		setEmail('');
		setImageUrl('');
	};
	return (
		<form>
			<div>
				<label htmlFor='name'>Name </label>
				<input
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					id='name'
					type='text'
				/>
			</div>
			<div>
				<label htmlFor='name'>Email </label>
				<input
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					id='email'
					type='email'
				/>
			</div>
			<div>
				<label htmlFor='imageUrl'>image Url </label>
				<input
					value={imageUrl}
					onChange={(e) => {
						setImageUrl(e.target.value);
					}}
					id='imageUrl'
					type='text'
				/>
			</div>
			<button type='button' onClick={saveContact}>
				Save Contact
			</button>
		</form>
	);
};

export default ContactForm;
