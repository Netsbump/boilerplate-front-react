import { useAuthorization } from '../../contexts/AuthorizationContext';
import { StyledLi, StyledLink } from './MenuNavigation.styles';

/**
 * Navigation menu based on the user's permissions.
 * @returns MenuNavigation components.
 */
const MenuNavigation: React.FC = () => {
  const { hasPermission } = useAuthorization();

  return (
    <nav>
      <ul>
        {/* Display link to Page one if the user has permission */}
        {hasPermission('PageOne') && (
          <StyledLi>
            <StyledLink to="page-one">Page one</StyledLink>
          </StyledLi>
        )}
        {/* Display link to Page two if the user has permission */}
        {hasPermission('PageTwo') && (
          <StyledLi>
            <StyledLink to="page-two">Page Two</StyledLink>
          </StyledLi>
        )}
        {/* Display link to Page three if the user has permission */}
        {hasPermission('PageThree') && (
          <StyledLi>
            <StyledLink to="page-three">Page Three</StyledLink>
          </StyledLi>
        )}
      </ul>
    </nav>
  );
};

export { MenuNavigation };
