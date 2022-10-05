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

const InitialFormValues = {
  firstName: "",
  lastName: "",
  eMail: "",
  message: "",
};

const Contact = () => {
  const [inputValues, setInputValues] = useState(InitialFormValues);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };

  return (
    <>
      <Container>
        <h2>Send me an E-Mail</h2>
        <br />
        <InputRow>
          <InputField
            type="text"
            onChange={handleInputChange}
            value={inputValues.firstName}
            inputFieldName="firstName"
            placeholderText="Name"
            primary={true}
          />
        </InputRow>
        <InputRow>
          <InputField
            type="email"
            onChange={handleInputChange}
            value={inputValues.eMail}
            inputFieldName="eMail"
            placeholderText="E-Mail"
          />
        </InputRow>
      </Container>
    </>
  );
};

export default Contact;
