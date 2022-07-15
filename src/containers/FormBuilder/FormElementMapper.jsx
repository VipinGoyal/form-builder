import { Input } from "../../stories/Input";
import { Radio } from "../../stories/Radio";
import { Select } from "../../stories/Select";
import { TextArea } from "../../stories/TextArea";

export const FormElementMapper = ({ field, fieldValue, element, handleChange,onBlurChange }) => {
    const { label, type, placeholder,options, validationRule } = element;
    const {value='', isValid='',errorMessage='' } = fieldValue;

    const elementProps = {
      label,
      placeholder,
      options,
      value,
      isValid,
      errorMessage: errorMessage || `Please enter ${field[0].toUpperCase() + field.slice(1)}`,
      handleChange : (e)=> handleChange(e,field),
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