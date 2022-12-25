//Hooks
import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch } from '../../store';
import { useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { tabPanelProps } from '../../utils/tabPanelProps';
//Actions
import { removeUser } from '../../redux/userSlice';
//Mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTranslation } from 'react-i18next';
//Components
import UserProfileStyle from '../../styles/UserProfileStyle';
import TabPanel from '../TabPanel/TabPanel';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Security from '../Security/Security';


export default function User() {
	const [value, setValue] = useState(0);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { t } = useTranslation();
	const logged = useAuth();


	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleLogOut = () => {
		navigate('/login');
		dispatch(removeUser());
		localStorage.removeItem('currentUser');
	};

	return !logged.isAuth ? (
		<Navigate to={'/login'} />
	) : (
		<div className='profileContainer'>
			<div className='profileBox'>
				<Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
					<Tab sx={{ color: 'white' }} label='Personal Info' {...tabPanelProps(0)} />
					<Tab sx={{ color: 'white' }} label='Security' {...tabPanelProps(1)} />
					<Tab sx={{ color: 'white' }} label='Idram' {...tabPanelProps(2)} />
					<Tab sx={{ color: 'white' }} label='Demo Buy' {...tabPanelProps(3)} />
				</Tabs>
				<TabPanel value={value} index={0}>
					<PersonalInfo />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Security />
				</TabPanel>
			</div>
		</div>
	);
}
