import { NavLink } from 'react-router-dom';
import { ListItemText, MenuItem, TextField, Box } from '@mui/material';
import { useState } from 'react';
import { AppBarContainer, AppBarHeader, MyList } from './styles';
import { useNavigate } from 'react-router-dom';
import Actions from './Actions';

const AppBarDesktop = ({ matches }) => {
	const [language, setLanguage] = useState('am');
	const navigate = useNavigate();

	return (
		<AppBarContainer>
			<AppBarHeader
				onClick={() => {
					navigate('/');
				}}
			>
				elite Shop
			</AppBarHeader>
			<MyList type="row">
				<NavLink to={'/'}>
					<ListItemText primary="Home" />
				</NavLink>
				<NavLink to={'/shop'}>
					<ListItemText primary="Shop" />
				</NavLink>
				<NavLink to={'/contact'}>
					<ListItemText primary="Contact" />
				</NavLink>
				<NavLink to={'/about'}>
					<ListItemText primary="About" />
				</NavLink>
			</MyList>
			<Box width={'90px'}>
				<TextField
					size="small"
					select
					value={language}
					onChange={(e) => setLanguage(e.target.value)}
				>
					<MenuItem value="am">AM</MenuItem>
					<MenuItem value="ru">RU</MenuItem>
					<MenuItem value="en">EN</MenuItem>
				</TextField>
			</Box>
			<Actions matches={matches} />
		</AppBarContainer>
	);
};

export default AppBarDesktop;
