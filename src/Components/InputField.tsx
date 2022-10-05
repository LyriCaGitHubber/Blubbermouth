import React, { FunctionComponent, useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";

/*
 * Types
 */
type InputFieldProps = {
  onChange: (e: any) => void;
  value: any;
  inputFieldName: string;
  placeholderText: string;
  primary?: boolean;
  type?: "email" | "text";
};

/*
 * Stylings
 */
const Input = styled.input<{ focused: boolean }>`
  border-radius: 5px;
  border-color: #000000;
  width: 200px;
  border-style: solid;
  cursor: pointer;
  padding: 0.7em;
  margin-bottom: 1em;
  width: 300px;
  background-color: lightblue;
  ${({ focused }) =>
    focused &&
    css`
      background-color: green;
      color: white;
      &::placeholder {
        color: white;
      }
    `}
`;

const InputField: FunctionComponent<InputFieldProps> = (
  props: InputFieldProps
) => {
  const { onChange, value, inputFieldName, placeholderText, type } = props;

  const [focus, setFocus] = useState(false);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    inputRef.current?.primary;
  }, []);

  return (
    <Input
      ref={inputRef}
      onChange={onChange}
      value={value}
      name={inputFieldName}
      placeholder={placeholderText}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      focused={focus}
      type={type}
    />
  );
};

export default InputField;
