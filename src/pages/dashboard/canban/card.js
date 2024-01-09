import "./style.scss";

export default function Card(props) {
  const {
    handleDragStart,
    data,
    isDragging,
    onDragOver,
    dragItemData,
    ...restProps
  } = props;

  return !isDragging ? (
    <div>
      <div
        className="card-wrapper fc"
        draggable={true}
        onDragStart={handleDragStart}
        {...restProps}
      >
        {data?.cardName || ""}
      </div>
    </div>
  ) : (
    !(JSON.stringify(data) === JSON.stringify(dragItemData())) && (
      <div className={"card-space-handler"} onMouseEnter={onDragOver}>
        <div
          className="card-wrapper fc"
          draggable={true}
          onDragStart={handleDragStart}
          {...restProps}
        >
          {data?.cardName || ""}
        </div>
      </div>
    )
  );
}
