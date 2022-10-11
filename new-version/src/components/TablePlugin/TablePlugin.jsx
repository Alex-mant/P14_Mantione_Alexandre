import React, { useCallback, useRef, Suspense, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToolsBtnSwitchToMockedData from "../utils/ToolsBtnSwitchToMockedData";
import InputSearch from "../InputSearch/InputSearch";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { columns } from "../../data/columnsTable";
import { handleCellContextMenu } from "../../utils/handleCellContextMenu";

const SetPageSize = React.lazy(() => import("../SetPageSize/SetPageSize"))

const AgGridReact = React.lazy(() =>
  import("ag-grid-react").then((module) => {
    return { default: module.AgGridReact };
  })
);

const TablePlugin = () => {
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
    }),
    []
  );
  
  const dispatch = useDispatch();
  const containerStyle = useMemo(() => ({ width: "93.8%", height: "65%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const gridRef = useRef();
  const data = useSelector((state) => state.formulary.List)
  const filteredList = useSelector((state) => state.formulary.filteredList);

  const paginationNumberFormatter = useCallback((params) => {
    return "[" + params.value.toLocaleString() + "]";
  }, []);

  return (
    <>
      <div style={containerStyle}>
        <div className="ag-theme-alpine" style={gridStyle}>
          <Suspense fallback={<div>Loading...</div>}>
            <SetPageSize gridRef={gridRef} />
            <AgGridReact
              rowSelection="single"
              onCellClicked={(e) => handleCellContextMenu(e,{dispatch, data})}
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
      <InputSearch />
      <ToolsBtnSwitchToMockedData />
    </>
  );
};

export default TablePlugin;
