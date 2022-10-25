/*  Creating an array of input with their types. */
export const FormEmployeeProInfo = [
  {
    label: {
      for: "start-date",
      text: "Start Date",
    },
    inputType: "date",
  },
  {
    label: {
      for: "department",
      text: "Department",
    },
    select: {
      name: "department",
      options: [
        {
          label: "Sales",
          value: "Sales",
        },
        {
          label: "Marketing",
          value: "Marketing",
        },
        {
          label: "Engineering",
          value: "Engineering",
        },
        {
          label: "Human",
          value: "Human",
        },
        {
          label: "Resources",
          value: "Resources",
        },
        {
          label: "Legal",
          value: "Legal",
        },
      ],
    },
  },
];
