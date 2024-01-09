import React from "react";
import "./drag.scss";

const DropBox = (props) => {
  const dummyFun = () => {};
  const {
    dropContainerRef,
    slectedRows,
    deleteSelectedItems = dummyFun,
    drop = dummyFun,
    allowDrop = dummyFun,
    onEnter = dummyFun,
    onLeave = dummyFun,
  } = props;

  const dragProps = {
    onDrop: (e) => drop(e),
    onDragOver: (e) => allowDrop(e),
    onDragEnter: (e) => onEnter(e),
    onDragLeave: (e) => onLeave(e),
  };
  return (
    <div
      className="drag-box"
      ref={dropContainerRef}
      onMouseUp={drop}
      {...dragProps}
    >
      {slectedRows.map((item, i) => {
        return (
          <div
            key={i + "select-key"}
            className="selected-items prevent-select"
            onClick={() => deleteSelectedItems(i)}
            style={{ marginLeft: `calc(${i} * 60px)`, zIndex: "100" }}
          >
            {item}
            <div className="arrow" />
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(DropBox);
