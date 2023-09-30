import { Menu, MenuItem, Avatar, Divider, ListItemIcon } from '@mui/material';
import { PersonAdd, Settings, Logout } from '@mui/icons-material';
import { useAuth } from '../../../contexts/AuthentificationContext';
import { useNavigate } from 'react-router-dom';

interface AccountMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ anchorEl, handleClose }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    handleClose();
    logout();
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleProfileClick}>
        <Avatar /> Profile
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Avatar /> My account
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export { AccountMenu };
