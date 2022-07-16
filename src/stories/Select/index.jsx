import React from "react";
import PropTypes from "prop-types";
import "./select.css";
import styled from "styled-components";
import { Label, Error, TemplateCss } from "../Utils";
import {FormElementMapper} from "../../containers/FormBuilder/FormElementMapper";

const SelectBox = styled.select`
    ${TemplateCss} 
`;

export const Select = ({ 
    label,
    options,
    className,
    placeholder,
    handleChange,
    isValid,
    isRequired,
    errorMessage,
    value,
    chainValue,
    field,
    handleChainChange,
    handleChainBlurChange,
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
            <SelectBox
                placeholder={placeholder}
                onChange={handleChange}
            >
                <option value={0}>{placeholder}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </SelectBox>
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

Select.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func,
    options: PropTypes.array,
}

Select.defaultProps = {
    label: "Label",
    type: "text",
    value: "",
    placeholder: "Description Here ....",
    handleChange: undefined,
    options:[
        {value: 1, displayValue: 'Text 1'},
        {value: 2, displayValue: 'Text 2'}
    ]
}