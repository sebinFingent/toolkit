import "./drag.scss";
import { useState } from "react";
import DropBox from "./dropBox";
import DragItem from "./dragItem";

const Drag = (props) => {
  // get props
  const { children: DraggableComponent } = props;

  const [slectedRows, addSelectedRows] = useState([]);
  const [draggingItem, onDragging] = useState(null);

  // Drag start
  const onDragStart = (event, data) => {
    onDragging(data);
    event.preventDefault();
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
  };

  // Drag stop
  function onMouseUp() {
    onDragging(null);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  }

  // Drop
  const drop = () => {
    if (draggingItem) {
      addSelectedRows([...slectedRows, draggingItem]);
    }
  };

  // Delete dropped item
  const deleteSelectedItems = (ind) => {
    const selectedList = [...slectedRows];

    selectedList.splice(ind, 1);

    addSelectedRows(selectedList);
  };

  function onMouseMove(e) {
    const el = document.getElementById("move-box");
    if (
      el &&
      e.pageX > 0 &&
      e.pageY > 0 &&
      e.pageX < window.innerWidth - el.clientWidth &&
      e.pageY < window.innerHeight - el.clientHeight
    ) {
      el.style.left = e.pageX + 10 + "px";
      el.style.top = e.pageY + "px";
    }
  }

  return (
    <div>
      <DropBox
        slectedRows={slectedRows}
        deleteSelectedItems={deleteSelectedItems}
        drop={drop}
      />
      {DraggableComponent({ slectedRows, onDragStart })}

      {draggingItem && <DragItem draggingItem={draggingItem} />}
    </div>
  );
};

export default Drag;
