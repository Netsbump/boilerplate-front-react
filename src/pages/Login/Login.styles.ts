import { styled } from '@mui/system';
import { Button, Container } from '@mui/material';

const primary = '#396bbd';

export const StyledContent = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const StyledContainer = styled(Container)`
  display: 'flex';
  flex-direction: 'column';
  align-items: 'center';
  justify-content: 'center';
  height: '100vh';
`;

export const StyledForm = styled('form')`
  width: 100%;
  margin-top: 15px;
`;

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isDisabled',
})<{ isDisabled: boolean }>`
  background-color: ${({ isDisabled }): string =>
    isDisabled ? 'grey' : primary};
  margin-top: 20px;
`;

export const StyledFooter = styled('footer')`
  text-align: center;
  margin-top: 20px;
`;
