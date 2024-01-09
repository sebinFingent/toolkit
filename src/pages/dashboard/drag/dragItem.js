import "./drag.scss";
function DragItem(props) {
  const { draggingItem } = props;
  return (
    <div className="drag-item" id="move-box">
      {draggingItem}
    </div>
  );
}

export default DragItem;
