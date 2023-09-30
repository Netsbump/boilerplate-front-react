import { Outlet } from 'react-router-dom';
import { HomeContainer, MainContentContainer, Content } from './Home.styles';
import { Typography } from '@mui/material';
import { TopBar } from '../../components/TopBar/TopBar';
import { SideBar } from '../../components/SideBar/SideBar';
import { MenuNavigation } from '../../components/MenuNavigation/MenuNavigation';
import { ThemeSelector } from '../../components/ThemeSelector/ThemeSelector';
import { SearchBar } from '../../components/SearchBar/SearchBar';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <SideBar>
        <Typography
          variant="h4"
          noWrap
          sx={{
            height: '64px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Society
        </Typography>
        <SearchBar />
        <MenuNavigation />
        <ThemeSelector />
      </SideBar>

      <MainContentContainer>
        <TopBar />
        <Content>
          <Outlet />
        </Content>
      </MainContentContainer>
    </HomeContainer>
  );
};

export { Home };
