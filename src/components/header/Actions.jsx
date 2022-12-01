import {
	MyList,
	ActionIconsContainerMobile,
	ActionIconsContainerDesktop
} from './styles';
import { ListItemButton, ListItemIcon } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginIcon from '@mui/icons-material/Login';
import { Colors } from '../../styles/Theme';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { useAuth } from '../../hooks/use-auth';
import PersonIcon from '@mui/icons-material/Person';

const Actions = ({ matches }) => {
	const navigate = useNavigate();
	const [isActive, setIsActive] = useState(false);
	const Component = matches
		? ActionIconsContainerMobile
		: ActionIconsContainerDesktop;

	return (
		<Component>
			<div>
				<Drawer
					anchor={'right'}
					open={isActive}
					onClose={() => setIsActive(false)}
				>
					<Box sx={{ width: '400px' }}>
						<List>Products</List>
					</Box>
				</Drawer>
			</div>
			<MyList type="row">
				<ListItemButton
					onClick={() => setIsActive(true)}
					sx={{ justifyContent: 'center' }}
				>
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
						<FavoriteIcon />
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
							navigate('/signin');
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
