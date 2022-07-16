import { Input } from "../../stories/Input";
import { Radio } from "../../stories/Radio";
import { Select } from "../../stories/Select";
import { TextArea } from "../../stories/TextArea";
import { wordUpperCase } from "../../utils";

export const FormElementMapper = ({ field, fieldValue, chainFieldValue, element, handleChange,onBlurChange }) => {
    const { type, validationRule,...elementKeys } = element;
    const {value='', isValid='',errorMessage='' } = fieldValue;

    const elementProps = {
      ...elementKeys,
      field,
      value,
      isValid,
      errorMessage: errorMessage || `Please enter ${wordUpperCase(field)}`,
      handleChange : (e)=> handleChange(e,field),
      ...(element.chain && { 
        chainValue:chainFieldValue,
        handleChainChange:(e, field)=> handleChange(e,field), 
        handleChainBlurChange: (e,field, parentValue) => onBlurChange(field, parentValue)
      })
    };

    switch (type) {
      case "input":
        const inputType = (type === 'input' && validationRule && validationRule.fieldValidation) || '';
        const onBlur = () => onBlurChange(field);
        return <Input type={inputType} onBlur={onBlur} {...elementProps} />;
  
      case "textarea":
        return <TextArea {...elementProps} />;
  
      case "select":
        return <Select {...elementProps} />;
  
      case "radio":
        return <Radio {...elementProps} />;
  
      default:
        return <></>;
    }
  };