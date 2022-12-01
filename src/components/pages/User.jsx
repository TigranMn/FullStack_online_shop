import React from 'react';
import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch } from '../../store';
import { removeUser } from '../../redux/userSlice';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function User() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleLogOut = () => {
		navigate('/signin');
		dispatch(removeUser());
		localStorage.removeItem('currentUser');
	}


	return (
		<div>
			<img src={useAuth().avatarUrl} alt="ahahahah" width={'120px'} />
			<h1>Name: {useAuth().name}</h1>
			<h1>Email: {useAuth().email}</h1>
			<h2>ID: {useAuth().id}</h2>
			<Button
				onClick={handleLogOut}
			>
				Log out
			</Button>
		</div>
	);
}
