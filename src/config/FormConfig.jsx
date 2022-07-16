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
          value: "order1",
          displayValue: ">10Lacs",
        },
        {
          value: "order2",
          displayValue: ">1Lacs <10Lacs",
        },
        {
          value: "order3",
          displayValue: "<1Lacs",
        },
      ],
      validationRule: {},
      chain:{
        order1:{
          label: "Order 1",
          type: "radio",
          options: [
            {
              value: "order11",
              displayValue: "Order 11",
            },
            {
              value: "order12",
              displayValue: "Order 12",
            },
          ],
          validationRule: {},
        },
        order2:{
          label: "Order 2",
          type: "input",
          placeholder: "Enter Order 2",
          validationRule: {
            fieldValidation: "text",
            length: 10
          },
        },
      },
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
      chain:{
        partner:{
          label: "GST Number",
          type: "input",
          placeholder: "Enter GST Number",
          validationRule: {
            fieldValidation: "text",
            length: 15
          },
        },
        shopkeeper:{
          label: "PAN Number",
          type: "input",
          placeholder: "Enter PAN Number",
          validationRule: {
            fieldValidation: "text",
            length: 10
          },
        },
      },
      validationRule: {},
    },
  },
};
