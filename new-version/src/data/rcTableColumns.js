import { handleDelete } from "../utils/handleDelete";

const columnsWidth = "max-content";

export const columns = (props) => [
  {
    title: "First Name",
    dataIndex: "first-name",
    key: "first-name",
    width: columnsWidth,
  },
  {
    title: "Last Name",
    dataIndex: "last-name",
    key: "last-name",
    width: columnsWidth,
  },
  {
    title: "Date Of Birth",
    dataIndex: "date-of-birth",
    key: "date-of-birth",
    width: columnsWidth,
  },
  {
    title: "Street",
    dataIndex: "street",
    key: "street",
    width: columnsWidth,
  },
  {
    title: "Start Date",
    dataIndex: "start-date",
    key: "start-date",
    width: columnsWidth,
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    width: columnsWidth,
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    width: columnsWidth,
  },
  {
    title: "Zip Code",
    dataIndex: "zip-code",
    key: "zip-code",
    width: columnsWidth,
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
    width: columnsWidth,
  },
  {
    title: "Operations",
    dataIndex: "key",
    key: "operations",
    render: (dataIndex) => <button onClick= {() => handleDelete(dataIndex, props)}>Delete</button>
  }
];
