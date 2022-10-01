import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

/*
 * Types
 */
type InputFieldProps = {
  onChange: (e: any) => void;
  value: any;
  inputFieldName: string;
  placeholderText: string;
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
  padding: 0.7em;
  margin-bottom: 1em;
  width: 300px;

  &:hover {
    border-color: rgb(210, 56, 108);
    background: rgba(210, 56, 108, 0.1);
  }
`;

const InputField: FunctionComponent<InputFieldProps> = (
  props: InputFieldProps
) => {
  const { onChange, value, inputFieldName, placeholderText } = props;
  return (
    <Input
      onChange={onChange}
      value={value}
      name={inputFieldName}
      placeholder={placeholderText}
    />
  );
};

export default InputField;
