import "./drag.scss";
import { createRef, useState } from "react";
import DropBox from "./dropBox";
const Drag = (props) => {
  // get props
  const { children: DraggableComponent } = props;

  const [slectedRows, addSelectedRows] = useState([]);

  // create ref for drop container
  const dropContainerRef = createRef(null);

  // Drag start
  const onDragStart = (event, data) => {
    event.dataTransfer.setData("text/plain", data);
    // event.preventDefault();
  };

  //  on dragging
  const onDrag = () => {
    dropContainerRef.current.style.opacity = 0.5;
    dropContainerRef.current.style.backgroundColor = "red";
  };

  // Enter on drop element
  const onDragEnd = () => {
    dropContainerRef.current.style.backgroundColor = "gray";
    dropContainerRef.current.style.opacity = 1;
  };

  // Drag over
  function allowDrop(event) {
    event.preventDefault();
  }

  // Enter on drop element
  const onEnter = () => {};

  // leave on drop element
  const onLeave = () => {};

  // Drop
  function drop(event) {
    event.preventDefault();

    // revert bg color
    dropContainerRef.current.style.backgroundColor = "gray";
    dropContainerRef.current.style.opacity = 1;

    const data = event.dataTransfer.getData("text/plain");

    addSelectedRows([...slectedRows, data]);
  }

  // delete selected item
  function deleteSelectedItems(ind) {
    const selectedList = [...slectedRows];

    selectedList.splice(ind, 1);

    addSelectedRows(selectedList);
  }

  return (
    <div>
      <DropBox
        drop={(e) => drop(e)}
        allowDrop={(e) => allowDrop(e)}
        onEnter={(e) => onEnter(e)}
        onLeave={(e) => onLeave(e)}
        dropContainerRef={dropContainerRef}
        slectedRows={slectedRows}
        deleteSelectedItems={deleteSelectedItems}
      />
      {DraggableComponent({ slectedRows, onDragStart, onDrag, onDragEnd })}
    </div>
  );
};

export default Drag;
