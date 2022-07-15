import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../stories/Button";
import { FormElementMapper } from './FormElementMapper';

const Form = styled.form`
  display: grid;
  grid-gap: 25px;
  justify-content: center;
  grid-auto-flow: row;
  grid-template-columns: 100%;
  padding: 2em;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 10px;
  @media screen and (min-width: 599px) {
    grid-template-columns: 100%;
    width: 35%;
    justify-self: center;
  }
`;

export const FormBuilder = ({ data }) => {

  const { title: formTitle, formFields } = data;
  let fields = {};
  Object.keys(formFields).forEach((field)=>{
      fields[field] = {value:'',isValid:true}
  });
  
  const [formData, setFormData] = useState(fields);

  const handleChange = (e, key) => {
    const formElementValue = e.target.value;
    formData[key].value = formElementValue;
    formData[key].isValid = !!formElementValue;
    formData[key].errorMessage = '';
    console.log("formData[field] handleChange", formData[key]);

    setFormData({...formData});
  }

  const checkFormFieldValid = (field) => {
    let isFormFieldValid = true;
    const {validationRule} = formFields[field];
    const {value}= formData[field];
    let errorMessage = '';

    console.log("formData[field]", formData[field]);

    if(validationRule){
      if(value && value.length){
        const {minLength=0,maxLength=0,length=0} = validationRule;
        if(minLength && maxLength && ( value.length < minLength || value.length > maxLength)){
          errorMessage += `Length should between ${minLength} and ${maxLength}`;
        } else if(minLength && value.length < minLength){
          errorMessage += `Min Length should be ${minLength}`;
        } else if (maxLength && value.length > maxLength){
          errorMessage += `Max Length should be ${maxLength}`;
        } else if (length && value.length !== length){
          errorMessage += `Length should be ${length}`;
        } // ... we can add additional error handling / validation here quickly
        
        if(errorMessage){
          formData[field].isValid = false;
          formData[field].errorMessage = errorMessage;
          setFormData({...formData});
          isFormFieldValid = false;
        }
      } else {
        formData[field].isValid = false;
        setFormData({...formData});
        isFormFieldValid = false;
      }
    }
    return isFormFieldValid;
  }

  const onSubmit = (event) => {
    if(Object.keys(formData).map(checkFormFieldValid).some(isFalse=>!isFalse)){
      event.preventDefault();
    } else {
      alert("Form Submitted Successfully, check console.log for data");
      Object.keys(formData).forEach((field)=> {
        delete formData[field].isValid;
        delete formData[field].errorMessage;
      })
      console.log("Form Submitted Succesfully", formData);
      event.preventDefault(); // ToRemove - in actual form submit
      setFormData(fields); // resetting form fields, which might not needed if above line removed
    }
    
  }

  return (
    <Form onSubmit={onSubmit}>
      <h1>{formTitle}</h1>
      {
        Object.keys(formFields).map((field) =>
          <FormElementMapper 
            key={field}
            field={field}
            fieldValue={formData[field]}
            element={formFields[field]} 
            handleChange={handleChange}
            onBlurChange={checkFormFieldValid}
          />
        )
      }
      <Button type='submit' label="Submit" />
    </Form>
  );
};
