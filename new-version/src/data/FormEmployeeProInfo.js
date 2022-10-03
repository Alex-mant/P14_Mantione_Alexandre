export const FormEmployeeProInfo = [
  {
    label: {
      for: "start-date",
      text: "Start Date",
    },
    inputType: "text",
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
          name: "Sales",
        },
        {
          name: "Marketing",
        },
        {
          name: "Engineering",
        },
        {
          name: "Human",
        },
        {
          name: "Resources",
        },
        {
          name: "Legal",
        },
      ],
    },
  },
];

