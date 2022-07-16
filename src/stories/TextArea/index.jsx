import React from "react";
import PropTypes from "prop-types";
import "./textarea.css";
import styled from "styled-components";
import { Label, Error, TemplateCss } from "../Utils";

const TextAreaBox = styled.textarea`
  ${TemplateCss}
`;

export const TextArea = ({
  label,
  className,
  handleChange,
  isValid,
  isRequired,
  errorMessage,
  ...props
}) => {
  return (
    <div className={className}>
      <Label label={label} isRequired={isRequired}></Label>
      <TextAreaBox onChange={handleChange} {...props} />
      {!isValid && errorMessage && <Error>{errorMessage}</Error>}
    </div>
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
};

TextArea.defaultProps = {
  label: "Label",
  type: "text",
  value: "",
  placeholder: "Description Here ....",
  handleChange: undefined,
};
