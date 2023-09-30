import { useState } from 'react';
import { Tooltip, IconButton, Badge, Avatar } from '@mui/material';
import {
  NotificationsOutlined as NotificationsIcon,
  MailOutline as MailIcon,
} from '@mui/icons-material';
import { AccountMenu } from './AccountMenu';

const UserToolBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton>
        <Badge variant="dot" color="primary">
          <MailIcon sx={{ fontSize: 25, color: 'black' }} />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge variant="dot" color="error">
          <NotificationsIcon sx={{ fontSize: 25, color: 'black' }} />
        </Badge>
      </IconButton>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          aria-controls={anchorEl ? 'account-menu' : undefined}
          aria-haspopup="true"
        >
          <Avatar sx={{ width: 32, height: 32 }}>AD</Avatar>
        </IconButton>
      </Tooltip>
      <AccountMenu anchorEl={anchorEl} handleClose={handleClose} />
    </div>
  );
};

export { UserToolBar };
