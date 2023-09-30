import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  transition: text-decoration 0.5s;
  color: #656e73;
  &:hover {
    color: blue;
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-color: blue;
  }
  &:visited {
    color: #656e73;
  }
`;

export const StyledLi = styled('li')`
  padding: 20px;
`;
