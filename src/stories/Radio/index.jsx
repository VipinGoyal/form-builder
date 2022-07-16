import React from "react";
import PropTypes from "prop-types";
import "./radio.css";
import styled from "styled-components";
import { Label, Error } from "../Utils";
import {FormElementMapper} from "../../containers/FormBuilder/FormElementMapper";

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
    chainValue,
    className,
    field,
    handleChange,
    handleChainChange,
    handleChainBlurChange,
    isValid,
    isRequired,
    errorMessage,
    ...props
}) => {

  const handleChainedChange = (e) => {
    handleChainChange(e, `chain-${field}`);
  }

  const handleChainedBlurChange = (e) =>{
    handleChainBlurChange(e, `chain-${field}`, value);
  }

    return (
        <div className={className}>
            <Label label={label} isRequired={isRequired}></Label>
            {options.map((option, idx) => (
                <RadioLabelWrapper key={idx}>
                    <RadioLabel>
                      <RadioInput type="radio" value={option.value} checked={value===option.value} onChange={handleChange}/>
                      <Dot />
                      {" "}
                      {option.displayValue}
                    </RadioLabel>
                </RadioLabelWrapper>
            ))}
            {errorMessage && !isValid && <Error>{errorMessage}</Error>}
            {
              value && props.chain && props.chain[value] && 
              <FormElementMapper 
                field={`chain-${field}`}
                fieldValue={chainValue}
                element={props.chain[value]} 
                handleChange={handleChainedChange}
                onBlurChange={handleChainedBlurChange}
              />
            }
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