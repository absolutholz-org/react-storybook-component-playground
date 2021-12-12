import { ReactNode } from "react";
import { Container } from "react-awesome-styled-grid";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

export function Header({children}: { children?: ReactNode}): JSX.Element {
    return (
      <div style={{ background: 'black', color: 'white', padding: '1rem 0' }}>
        <Container>
          <Link to='/'><span style={{ font: '3rem / 1 sans-serif'}}>Logo</span></Link>
          { children }
        </Container>
      </div>
    );
}
  
export function Footer(): JSX.Element {
    return (
      <div style={{ background: 'black', color: 'white', padding: '1rem 0' }}>
        <Container>Footer</Container>
      </div>
    );
}
    
export const GlobalStyles = createGlobalStyle`
*, ::after, ::before {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100%;
}

body,
#root,
#___gatsby,
#gatsby-focus-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}
`;

export const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

