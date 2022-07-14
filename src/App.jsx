import DataGrid from "devextreme-react/data-grid";
import { useState } from "react";
import service from "./app/data";
import ColumnItem from "./components/ColumnItem";

function App() {
  const [columns, setColumns] = useState([
    "CompanyName",
    "City",
    "State",
    "Phone",
    "Fax",
  ]);

  const addColumn = (e) => {
    const columnName = e.target.columnName.value;
    e.preventDefault();
    if (!columns.includes(columnName)) {
      setColumns((prev) => {
        return [...prev, columnName];
      });
    }
  };

  return (
    <div className="flex-container">
      <div className="containerDataGrid">
        <div className="info">Окно предварительного просмотра отчёта</div>
        <DataGrid
          id="gridContainer"
          dataSource={service.getEmployees()}
          keyExpr="ID"
          allowColumnReordering={true}
          allowColumnResizing={true}
          columnAutoWidth={true}
          showBorders={true}
          columns={columns}
        />
      </div>
      <div className="container">
        <div className="info">Список колонок</div>
        <div className="columnList">
          {columns
            .map((el, i) => {
              return {
                id: i + 1,
                columnName: el,
              };
            })
            .map((el) => {
              return (
                <ColumnItem key={el.id} item={el} setColumns={setColumns} />
              );
            })}
        </div>
        <form className="addColumn" onSubmit={addColumn}>
          <input type="text" name="columnName" />
          <button>Добавить колонку</button>
        </form>
      </div>
    </div>
  );
}

export default App;
