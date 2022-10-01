import React from "react";
import styled from "styled-components";

import ContentBox from "../Components/ContentBox";

/*
 * Styling
 */
const Container = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  width: 80%;
  gap: 1.5em;
`;

const Home = () => {
  return (
    <Container>
      <ContentBox imgUrl="../assets/pexels-luis-dalvan-1770809.jpg">
        Lorem, ipsum.
      </ContentBox>
      <ContentBox imgUrl="../assets/pexels-eberhard-grossgasteiger-2086621.jpg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, commodi
        modi molestiae iste laboriosam beatae excepturi facilis facere adipisci
        id amet, doloremque repellat quo omnis magnam corporis quia possimus
        similique rerum delectus! Enim, est. Eum?Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Commodi, unde libero. Nemo harum nam
        quisquam amet ea magni dolores iusto adipisci. Cum ab dolorem,
        reiciendis recusandae similique et animi eius!
      </ContentBox>
      <ContentBox imgUrl="../assets/pexels-irina-iriser-1381679.jpg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus, culpa?
      </ContentBox>
      <ContentBox imgUrl="../assets/pexels-eberhard-grossgasteiger-2223082.jpg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugiat
        reiciendis maiores porro. Provident dolor fugiat aperiam magni saepe
        consequatur obcaecati tenetur.
      </ContentBox>
    </Container>
  );
};

export default Home;
