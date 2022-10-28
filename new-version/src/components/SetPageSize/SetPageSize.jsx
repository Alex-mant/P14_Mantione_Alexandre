import React, { useCallback } from "react";

/**
 * When the page size is changed, the pagination is re-edited.
 * @returns a JSX element.
 * @param any - gridRef
 */
const SetPageSize = ({ gridRef }) => {

  /* When the page size is changed, the pagination is re-edited. . */
  const onPageSizeChanged = useCallback(() => {
    var value = document.getElementById("page-size").value;
    gridRef.current.api.paginationSetPageSize(Number(value));
  }, [gridRef]);

  return (
    <div className="AgGrid-wrapper">
      <div className="AgGrid-header">
        Page Size:
        <select defaultValue={0} onChange={onPageSizeChanged} id="page-size">
          <option value={"2000"}>---</option>
          <option value="10">10</option>
          <option value="100">100</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
        </select>
      </div>
    </div>
  );
};

export default SetPageSize;
