import { Toolbar, Typography } from '@mui/material';
import { StyledAppBar } from './TopBar.styles';
import { UserToolBar } from './UserToolBar/UserToolBar';

const TopBar: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ width: '100%', justifyContent: 'space-between' }}>
        <Typography variant="h4" noWrap>
          Name of your Application
        </Typography>
        <UserToolBar />
      </Toolbar>
    </StyledAppBar>
  );
};

export { TopBar };
