import React, { useState } from "react";
import delBinSvg from "../app/svg/DeleteBin.svg";
import editSvg from "../app/svg/Edit.svg";
import doneSvg from "../app/svg/done.svg";

const ColumnItem = (props) => {
  const [editFlag, setEditFlag] = useState(false);

  const delColumn = (e) => {
    const columnName = e.target.closest("button").dataset.column;
    props.setColumns((prev) => {
      return prev.filter((el) => el !== columnName);
    });
  };
  const handleEdit = () => {
    setEditFlag(true);
  };
  const handleRenameColumn = (e) => {
    const newName = e.target.editColumn.value;
    const { old } = e.target.dataset;
    props.setColumns((prev) => {
      const columns = [...prev];
      const index = columns.findIndex((el) => el === old);
      columns.splice(index, 1, newName);
      return columns;
    });
    setEditFlag(false);
  };
  return (
    <div>
      {editFlag ? (
        <form onSubmit={handleRenameColumn} data-old={props.item.columnName}>
          <input type="text" name="editColumn" id="editColumn" />
          <button>
            <img src={doneSvg} alt="doneSvg" />
          </button>
        </form>
      ) : (
        <>
          <span>{props.item.columnName}</span>
          <button data-column={props.item.columnName} onClick={delColumn}>
            <img src={delBinSvg} alt="del" />
          </button>
          <button onClick={handleEdit}>
            <img src={editSvg} alt="edit" />
          </button>
        </>
      )}
    </div>
  );
};

export default ColumnItem;
