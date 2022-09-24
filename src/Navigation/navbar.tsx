import React from "react";
import styled from "styled-components";
import mockdata from "../mockdata";
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
const Navbar: React.FunctionComponent<NavbarProps> = (props: NavbarProps) => {
  const { links } = props;
  console.log(links);
  return (
    <Container>
      <nav>
        <UnorderedList>
          {links.map((link) => (
            <li>{link}</li>
          ))}
        </UnorderedList>
      </nav>
    </Container>
  );
};

export default Navbar;
