import "./table.scss";

function Table(props) {
  const { slectedRows, onDragStart, onDrag, onDragEnd } = props;

  const tableDataSet = {
    tableHeader: ["One", "Two", "Three"],
    tableBody: [
      { One: 1.1, Two: 1.2, Three: 1.3 },
      { One: 2.1, Two: 2.2, Three: 2.3 },
      { One: 3.1, Two: 3.2, Three: 3.3 },
      { One: 4.1, Two: 4.2, Three: 4.3 },
    ],
  };

  return (
    <table className="table-wrapper " id="draggableTable">
      <thead>
        <tr>
          {tableDataSet.tableHeader
            .filter((fil_header) => !slectedRows.includes(fil_header))
            .map((hed, i) => {
              return (
                <th
                  draggable={true}
                  onDragStart={(e) => onDragStart(e, hed)}
                  key={hed + "table" + i}
                  onDrag={onDrag}
                  onDragEnd={onDragEnd}
                >
                  {hed}
                </th>
              );
            })}
        </tr>
      </thead>

      <tbody>
        {tableDataSet.tableBody.map((tb, i) => {
          return (
            <tr key={tb + "bd" + i}>
              {tableDataSet.tableHeader
                .filter((fil_header) => !slectedRows.includes(fil_header))
                .map((hed, i) => {
                  return <td key={hed + "" + i}>{tb[hed]}</td>;
                })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
