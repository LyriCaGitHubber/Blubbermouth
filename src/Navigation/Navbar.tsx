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
  background-color: rgb(0, 161, 112);
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

const ListItem = styled.li`
  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: rgb(210, 56, 108);
    }
  }
`;

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
            return (
              <ListItem>
                <Link to={`/${linkPath}`}>{link}</Link>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Navigation>
    </Container>
  );
};

export default Navbar;
