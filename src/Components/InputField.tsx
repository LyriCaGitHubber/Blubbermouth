import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

/*
 * Types
 */
type InputFieldProps = {
  onChange: (e: any) => void;
  value: any;
  inputFieldName: any;
};

/*
 * Stylings
 */
const Input = styled.input`
  border-radius: 5px;
  border-color: #000000;
  width: 200px;
  border-style: solid;
  cursor: pointer;

  &:hover {
    border-color: rgb(210, 56, 108);
  }
`;

const InputField: FunctionComponent<InputFieldProps> = (
  props: InputFieldProps
) => {
  const { onChange, value, inputFieldName } = props;
  return <Input onChange={onChange} value={value} name={inputFieldName} />;
};

export default InputField;
