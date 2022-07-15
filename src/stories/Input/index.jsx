import React from "react";
import PropTypes from "prop-types";
import "./input.css";
import styled from "styled-components";
import { Label, Error, TemplateCss } from "../Utils";

const InputContainer = styled.input`
  ${TemplateCss}
`;

export const Input = ({
  label,
  className,
  handleChange,
  isValid,
  errorMessage,
  ...props
}) => {
  return (
    <div className={className}>
      <Label label={label}></Label>
      <InputContainer onChange={handleChange} {...props} />
      {!isValid && errorMessage && <Error>{errorMessage}</Error>}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email",'number']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
};

Input.defaultProps = {
  label: "Label",
  type: "text",
  value: "",
  placeholder: "Input Here ...",
  handleChange: undefined,
};
