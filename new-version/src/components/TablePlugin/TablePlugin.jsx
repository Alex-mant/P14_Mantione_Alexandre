import React, { useCallback, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { columns } from "../../data/columnsTable";
import { handleCellContextMenu } from "../../utils/handleCellContextMenu";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import TableTools from "../TableTools/TableTools";

const colWidth = 150;
const containerWidth = colWidth * 9;

const TablePlugin = () => {
 /* A memoized function that returns an object. */
  const defaultColDef = useMemo(
    () => ({
      resizable: false,
      sortable: true,
      width: colWidth
    }),
    []
  );

  const [numberOfRows, setNumberOfRows] = useState();
  const dispatch = useDispatch();
  const containerStyle = useMemo(() => ({ maxWidth: containerWidth, width:'100%', height: numberOfRows, maxHeight: 520, minHeight: 147 }), [numberOfRows]);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const gridRef = useRef();
  const data = useSelector((state) => state.formulary.List);
  const filteredList = useSelector((state) => state.formulary.filteredList);

  /* A function that is called when the pagination changes. It is used to set the height of the table. */
  const paginationNumberFormatter = useCallback((params) => {
    setNumberOfRows(params.value* 44 + 98);
    return "[" + params.value.toLocaleString() + "]";
  }, []);

  return (
    <>
      <div style={containerStyle}>
        <div className="ag-theme-alpine" style={gridStyle}>
            <TableTools gridRef={gridRef} />
            <AgGridReact
              overlayNoRowsTemplate="No Data"
              rowSelection="single"
              onCellClicked={(e) => handleCellContextMenu(e, dispatch, data)}
              preventDefaultOnContextMenu
              suppressHorizontalScroll
              fullWidthCellRenderer={10}
              style={{ width: "100%", height: "100%" }}
              pagination={true}
              paginationNumberFormatter={paginationNumberFormatter}
              ref={gridRef}
              animateRows={true}
              rowData={filteredList}
              columnDefs={columns}
              defaultColDef={defaultColDef}
            />
        </div>
      </div>
    </>
  );
};

export default TablePlugin;
