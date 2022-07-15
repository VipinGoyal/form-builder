export const FormData = {
  title: "Seller Registration Form",
  formFields: {
    name: {
      label: "Sellar Name",
      type: "input",
      placeholder: "Enter Full Name",
      validationRule: {
        fieldValidation: "text",
        minLength: 5,
        maxLength: 25,
      },
    },
    email: {
      label: "Sellar Email",
      type: "input",
      placeholder: "Enter Email Address",
      validationRule: {
        fieldValidation: "email",
      },
    },
    contact: {
      label: "Sellar Contact",
      type: "input",
      placeholder: "Enter Contact Number without +91",
      validationRule: {
        fieldValidation: "number",
        length: 10,
      },
    },
    address: {
      label: "Address",
      type: "textarea",
      placeholder: "Enter Complete Address",
      validationRule: {},
    },
    order: {
      label: "Seller Yearly Order",
      type: "select",
      placeholder: "Select Order per Year",
      options: [
        {
          value: "1",
          displayValue: ">10Lacs",
        },
        {
          value: "2",
          displayValue: ">1Lacs <10Lacs",
        },
        {
          value: "3",
          displayValue: "<1Lacs",
        },
      ],
      validationRule: {},
    },
    type: {
      label: "Sellar Type",
      type: "radio",
      options: [
        {
          value: "partner",
          displayValue: "Partner",
        },
        {
          value: "shopkeeper",
          displayValue: "ShopKeeper",
        },
      ],
      validationRule: {},
    },
  },
};
