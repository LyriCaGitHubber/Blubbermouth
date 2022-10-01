import React, { useState } from "react";
import styled from "styled-components";

import InputField from "../Components/InputField";

/*
 * Styles
 */

const Container = styled.form`
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const InputRow = styled.div`
  display: flex;
  margin: auto;
  > p {
    margin: 0;
    padding: 0 15px 0 0;
  }
`;

const Contact = () => {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e: any) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInputValue(inputValue);
  };

  return (
    <Container>
      <h2>Send me an E-Mail</h2>
      <br />
      <InputRow>
        <InputField
          onChange={handleInputChange}
          value={inputValue}
          inputFieldName="name"
          placeholderText="Name"
        />
      </InputRow>
      <InputRow>
        <InputField
          onChange={handleInputChange}
          value={inputValue}
          inputFieldName="email"
          placeholderText="E-Mail"
        />
      </InputRow>
    </Container>
  );
};

export default Contact;
