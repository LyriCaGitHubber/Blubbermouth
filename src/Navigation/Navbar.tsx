import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/*
 * Types
 */

type NavbarProps = {
  links: string[];
};

/*
 * Stylings
 */
const Container = styled.div`
  background-color: ;
  opacity: 0.5;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1em;
`;

const Navigation = styled.nav``;

/*
 * Component
 */
const Navbar: React.FunctionComponent<NavbarProps> = (props: NavbarProps) => {
  const { links } = props;

  return (
    <Container>
      <Navigation>
        <UnorderedList>
          {links.map((link) => {
            let linkPath = link.toLowerCase();
            return <Link to={`/${linkPath}`}>{link}</Link>;
          })}
        </UnorderedList>
      </Navigation>
    </Container>
  );
};

export default Navbar;
