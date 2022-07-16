export const FormData = {
  title: "Candidate Registration Form",
  formFields: {
    name: {
      label: "Candidate Name",
      type: "input",
      placeholder: "Enter Full Name",
      validationRule: {
        fieldValidation: "text",
        minLength: 5,
        maxLength: 25,
      },
    },
    email: {
      label: "Candidate Email",
      type: "input",
      placeholder: "Enter Email Address",
      validationRule: {
        fieldValidation: "email",
      },
    },
    contact: {
      label: "Candidate Contact",
      type: "input",
      placeholder: "Enter Contact Number without +91",
      validationRule: {
        fieldValidation: "number",
        length: 10,
      },
    },
    address: {
      label: "Candidate Address",
      type: "textarea",
      placeholder: "Enter Complete Address",
      validationRule: {},
    },
    education: {
      label: "Candidate Education",
      type: "radio",
      options: [
        {
          value: "underGrad",
          displayValue: "Under Graduate",
        },
        {
          value: "postGrad",
          displayValue: "Post Graduate",
        },
      ],
      chain:{
        underGrad:{
          label: "Under Graduation - BE / BTech / BSc / Bcom / BA",
          type: "input",
          placeholder: "Enter under graduation",
          validationRule: {
            fieldValidation: "text",
            maxLength: 5
          },
        },
        postGrad:{
          label: "Post Graduation - ME / MTech / MSc / Mcom / MA",
          type: "input",
          placeholder: "Enter post graduation",
          validationRule: {
            fieldValidation: "text",
            maxLength: 5
          },
        },
      },
      validationRule: {},
    },
    order: {
      label: "Candidate Highest Education Institute Ranking",
      type: "select",
      placeholder: "Select institute ranking",
      options: [
        {
          value: "ranking1",
          displayValue: "Under Top 50",
        },
        {
          value: "ranking2",
          displayValue: "Top 50 - 100",
        },
        {
          value: "ranking3",
          displayValue: "100 +",
        },
      ],
      validationRule: {},
      chain:{
        ranking1:{
          label: "Further Ranking Classification",
          type: "radio",
          options: [
            {
              value: "ranking11",
              displayValue: "Under Top 10",
            },
            {
              value: "ranking12",
              displayValue: "Between 10 - 50",
            },
          ],
          validationRule: {},
        },
        ranking2:{
          label: "Ranking 2",
          type: "input",
          placeholder: "Enter Institute Name",
          validationRule: {
            fieldValidation: "text",
            maxLength: 50
          },
        },
      },
    },
    disability: {
      label: "Any Disability",
      type: "radio",
      options: [
        {
          value: "yes",
          displayValue: "Yes",
        },
        {
          value: "no",
          displayValue: "No",
        },
      ],
    },
    currentSalary:{
      label: "Candidate Current Salary",
      type: "select",
      placeholder: "Select current salary",
      options: [
        {
          value: "salary1",
          displayValue: "< 10LPA",
        },
        {
          value: "salary2",
          displayValue: "10LPA - 50LPA",
        },
        {
          value: "salary3",
          displayValue: "50LPA +",
        },
      ],
    }
  },
};
