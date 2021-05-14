import styled from "@emotion/styled";

const StyledLink = styled.a`
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.1s ease-in;

  :link {
    color: ${({ theme }) => theme.onSurface};
  }

  :visited {
    color: ${({ theme }) => theme.onSurface};
  }

  :focus {
  }

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
  }

  :active {
  }
`;

export default StyledLink;
