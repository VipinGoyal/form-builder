import React from "react";
import PropTypes from "prop-types";
import "./radio.css";
import styled from "styled-components";
import { Label, Error } from "../Utils";

const RadioLabelWrapper = styled.div`
  display: inline-block;
`;

const Dot = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid #777777;
  width: 14px;
  height: 14px;
  left: 0;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: #03a9f4;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 110ms;
  }
`;

const RadioInput = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${Dot} {
    &::after {
      width: 10px;
      height: 10px;
      opacity: 1;
      left: 12%;
      top: 12%;
    }
  }
`;

const  RadioLabel = styled.label`
  display: flex;
  cursor: pointer;
  padding: 5px 10px 5px 0;
  margin: 0 0 6px 0;
  font-size: 1.1rem;
  position: relative;
`;

export const Radio = ({ 
    label,
    options,
    value,
    className,
    handleChange,
    isValid,
    errorMessage,
}) => {
    return (
        <div className={className}>
            <Label label={label}></Label>
            {options.map((option, idx) => (
                <RadioLabelWrapper key={idx} onChange={handleChange}>
                    <RadioLabel>
                      <RadioInput type="radio" value={option.value} checked={value===option.value}/>
                      <Dot />
                      {" "}
                      {option.displayValue}
                    </RadioLabel>
                </RadioLabelWrapper>
            ))}
            {errorMessage && !isValid && <Error>{errorMessage}</Error>}
        </div>
    );
}

Radio.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    options: PropTypes.array,
}

Radio.defaultProps = {
    label: "Label",
    value: "",
    handleChange: undefined,
    options:[
        {value: 1, displayValue: 'Text 1'},
        {value: 2, displayValue: 'Text 2'}
    ]
}