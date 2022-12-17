//Hooks
import { useEffect } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch } from '../../store';
import { useNavigate, Navigate } from 'react-router-dom';
//Actions
import { removeUser } from '../../redux/userSlice';
//Mui
import { Button } from '@mui/material';

export default function User() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const logged = useAuth();

	const handleLogOut = () => {
		navigate('/login');
		dispatch(removeUser());
		localStorage.removeItem('currentUser');
	};

	return (
		!logged.isAuth ? <Navigate to={'/login'} /> : (
			<div>
				<h1>Name: {logged.name}</h1>
				<h1>Email: {logged.email}</h1>
				<h2>ID: {logged.id}</h2>
				<h2>STATUS: {logged.status}</h2>
				<Button onClick={handleLogOut}>Log out</Button>
			</div>)
	);
}
