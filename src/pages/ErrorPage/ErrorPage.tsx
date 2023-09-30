/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { StyledDivError } from './ErrorPage.styles';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  // If the error comes from a route response (i.e., an HTTP error or similar)
  if (isRouteErrorResponse(error)) {
    return (
      <StyledDivError>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </StyledDivError>
    );
  } else {
    // This branch handles other types of errors that aren't HTTP errors
    return (
      <StyledDivError>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </StyledDivError>
    );
  }
};

export { ErrorPage };
