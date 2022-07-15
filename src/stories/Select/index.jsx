import React from "react";
import PropTypes from "prop-types";
import "./select.css";
import styled from "styled-components";
import { Label, Error, TemplateCss } from "../Utils";

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
    errorMessage,
    ...props
}) => {
    return (
        <div className={className}>
            <Label label={label}></Label>
            <SelectBox
                placeholder={placeholder}
                onChange={handleChange}
            >
                <option>{placeholder}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </SelectBox>
            {errorMessage && !isValid && <Error>{errorMessage}</Error>}
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