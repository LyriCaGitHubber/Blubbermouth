import React from "react";
import styled from "styled-components";

/*
 * Types
 */
type ContentBox = {
  children: React.ReactNode;
  imgUrl: string;
};

/*Styling
 *
 */

const Box = styled.div`
  width: 250px;
  background: lightblue;
  align-items: center;
  flex: 0 0 25%;
  flex-wrap: wrap;

  p {
    margin: 0;
    text-align: centerz;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

/*
 * Component
 */
const ContentBox = (props: ContentBox) => {
  const { children, imgUrl } = props;
  return (
    <Box>
      <Image src={imgUrl} />
      <p>{children}</p>
    </Box>
  );
};

export default ContentBox;
