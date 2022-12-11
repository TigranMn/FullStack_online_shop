import { MyList, ActionIconsContainerMobile, ActionIconsContainerDesktop } from './styles';
import { ListItemButton, ListItemIcon, Drawer, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginIcon from '@mui/icons-material/Login';
import { Colors } from '../../styles/Theme';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/use-auth';
import PersonIcon from '@mui/icons-material/Person';
import Basket from '../Basket/Basket';
import React from 'react';

const Actions = ({ matches }) => {
	const navigate = useNavigate();
	const [isActive, setIsActive] = useState(false);
	const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

	return (
		<Component>
			<div>
				<Drawer anchor={'right'} open={isActive} onClose={() => setIsActive(false)}>
					<Box sx={{ width: '450px' }}>
						<Box>Products</Box>
						<Basket />
					</Box>
				</Drawer>
			</div>
			<MyList type="row">
				<ListItemButton onClick={() => setIsActive(true)} sx={{ justifyContent: 'center' }}>
					<ListItemIcon
						sx={{
							display: 'flex',
							justifyContent: 'center',
							color: matches && Colors.info
						}}
					>
						<ShoppingCartIcon />
					</ListItemIcon>
				</ListItemButton>
				<ListItemButton sx={{ justifyContent: 'center' }}>
					<ListItemIcon
						sx={{
							display: 'flex',
							justifyContent: 'center',
							color: matches && Colors.info
						}}
					>
						<FavoriteIcon onClick={() => navigate('/liked')} />
					</ListItemIcon>
				</ListItemButton>
				{useAuth().isAuth ? (
					<ListItemButton
						sx={{ justifyContent: 'center' }}
						onClick={() => {
							navigate('/user');
						}}
					>
						<ListItemIcon
							sx={{
								display: 'flex',
								justifyContent: 'center',
								color: matches && Colors.info
							}}
						>
							<PersonIcon />
						</ListItemIcon>
					</ListItemButton>
				) : (
					<ListItemButton
						sx={{ justifyContent: 'center' }}
						onClick={() => {
							navigate('/login');
						}}
					>
						<ListItemIcon
							sx={{
								display: 'flex',
								justifyContent: 'center',
								color: matches && Colors.info
							}}
						>
							<LoginIcon />
						</ListItemIcon>
					</ListItemButton>
				)}
			</MyList>
		</Component>
	);
};

export default Actions;