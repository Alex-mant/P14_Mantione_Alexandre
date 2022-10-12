import React, { useCallback, useRef, Suspense, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToolsBtnSwitchToMockedData from "../utils/ToolsBtnSwitchToMockedData";
import InputSearch from "../InputSearch/InputSearch";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { columns } from "../../data/columnsTable";
import { handleCellContextMenu } from "../../utils/handleCellContextMenu";
import { useState } from "react";
import TableTools from "../TableTools/TableTools";

const SetPageSize = React.lazy(() => import("../SetPageSize/SetPageSize"));

const AgGridReact = React.lazy(() =>
  import("ag-grid-react").then((module) => {
    return { default: module.AgGridReact };
  })
);
const colWidth = 150;
const containerWidth = colWidth * 9;

const TablePlugin = () => {
  const defaultColDef = useMemo(
    () => ({
      resizable: false,
      sortable: true,
      width: colWidth,
    }),
    []
  );

  const [numberOfRows, setNumberOfRows] = useState(540);
  const dispatch = useDispatch();
  const containerStyle = useMemo(() => ({ width: containerWidth, height: numberOfRows, maxHeight: 520, minHeight: 260 }), [numberOfRows]);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const gridRef = useRef();
  const data = useSelector((state) => state.formulary.List);
  const filteredList = useSelector((state) => state.formulary.filteredList);
  
  const paginationNumberFormatter = useCallback((params) => {
    setNumberOfRows(params.value * 49 + 98);
    return "[" + params.value.toLocaleString() + "]";
  }, []);
  
  return (
    <>
      <div style={containerStyle}>
        <div className="ag-theme-alpine" style={gridStyle}>
          <Suspense fallback={<div>Loading...</div>}>
            <TableTools gridRef={gridRef} />
            <AgGridReact
              rowSelection="single"
              onCellClicked={(e) => handleCellContextMenu(e, { dispatch, data })}
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
          </Suspense>
      </div>
        </div>
    </>
  );
};

export default TablePlugin;
