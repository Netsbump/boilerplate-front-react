import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login/Login';
import { Home } from '../pages/Home/Home';
import { PageOne } from '../pages/PageOne/PageOne';
import { PageTwo } from '../pages/PageTwo/PageTwo';
import { Profile } from '../pages/Profile/Profile';
import { PageThree } from '../pages/PageThree/PageThree';
import { AuthenticatedRoute } from './AuthenticatedRoute';
import { AuthorizedRoute } from './AuthorizedRoute';
import { RedirectIfAuthenticatedRoute } from './RedirectIfAuthenticatedRoute';

const router = createBrowserRouter([
  {
    // Connexion page Route
    path: '/login',
    element: (
      <RedirectIfAuthenticatedRoute>
        <Login />
      </RedirectIfAuthenticatedRoute>
    ),
  },
  {
    // Home page Route restrain by `AuthenticatedRoute`
    path: '/',
    element: (
      <AuthenticatedRoute>
        <Home />
      </AuthenticatedRoute>
    ),
    // Childrens Routes of Home page
    children: [
      {
        // Pages Routes, restrain by AuthorizedRoute.
        path: 'page-one',
        element: (
          <AuthorizedRoute routeName="PageOne">
            <PageOne />
          </AuthorizedRoute>
        ),
      },
      {
        path: 'page-two',
        element: (
          <AuthorizedRoute routeName="PageTwo">
            <PageTwo />
          </AuthorizedRoute>
        ),
      },
      {
        path: 'page-three',
        element: (
          <AuthorizedRoute routeName="PageThree">
            <PageThree />
          </AuthorizedRoute>
        ),
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

export { router };
