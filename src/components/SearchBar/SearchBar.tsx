import { IconButton, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchBar: React.FC = () => {
  return (
    <div>
      <IconButton>
        <SearchIcon sx={{ fontSize: 20, color: 'black' }} />
      </IconButton>
      <InputBase
        sx={{ fontSize: 15, color: 'black' }}
        placeholder="Rechercher…"
        inputProps={{ 'aria-label': 'Rechercher' }}
      />
    </div>
  );
};

export { SearchBar };
