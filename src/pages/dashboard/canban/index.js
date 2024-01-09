import "./style.scss";
import { STAGES } from "../../../utils/globals";
import Card from "./card";
import { Fragment, useRef, useState } from "react";

export default function Canban() {
  const [stages, setStages] = useState(STAGES);

  const [draggingItem, onDragging] = useState(null);

  const dragHoverRef = useRef(null);

  // Drag start
  const handleDragStart = (event, stageId, cardId) => {
    if (stageId && cardId) {
      onDragging({ stageId, cardId });
      event.preventDefault();
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mousemove", onMouseMove);
    }
  };

  // Drag stop
  function onMouseUp() {
    onDragging(null);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  }

  // Drop
  const drop = (stageIndex) => {
    const { stageId = null, cardId = null } = draggingItem;

    if (stageId && cardId && stageIndex >= 0) {
      const stages_copy = [...stages];

      const selectedItemStageIndex = stages_copy.findIndex(
        (s_item) => s_item.id === stageId
      );
      const selectedItemCardIndex = stages_copy[
        selectedItemStageIndex
      ].cards.findIndex((c_item) => c_item.cardId === cardId);

      const cardItem = stages_copy[selectedItemStageIndex].cards.splice(
        selectedItemCardIndex,
        1
      );

      if (dragHoverRef?.current != null) {
        stages_copy[stageIndex].cards.splice(
          dragHoverRef.current,
          0,
          cardItem[0]
        );
      } else {
        stages_copy[stageIndex].cards.push(cardItem[0]);
      }

      setStages(stages_copy);
    }
  };

  function onMouseMove(e) {
    const el = document.getElementById("move-box");
    const wrp = document.getElementById("canban");
    if (
      el &&
      e.pageX > wrp.getBoundingClientRect().left - 20 &&
      e.pageY > 0 &&
      e.pageX < wrp.getBoundingClientRect().right - 50 &&
      e.pageY < wrp.getBoundingClientRect().bottom - 50
    ) {
      el.style.left = e.pageX - 4 + "px";
      el.style.top = e.pageY - 3 + "px";
    }
  }

  const getDataOnDrag = () => {
    const { stageId = null, cardId = null } = draggingItem;

    if (stageId && cardId) {
      const stages_copy = [...stages];

      const selectedItemStageIndex = stages_copy.findIndex(
        (s_item) => s_item.id === stageId
      );
      const selectedItemCardIndex = stages_copy[
        selectedItemStageIndex
      ].cards.findIndex((c_item) => c_item.cardId === cardId);

      const cardItem =
        stages_copy[selectedItemStageIndex].cards[selectedItemCardIndex];

      return cardItem;
    }
  };

  return (
    <>
      <div className="canban-wrapper" id={"canban"}>
        {stages.map((st, i) => (
          <div
            className="stage"
            onMouseUp={() => draggingItem && drop(i)}
            key={"stage" + i}
            onMouseLeave={(e) => {
              dragHoverRef.current = null;
              e.stopPropagation();
            }}
          >
            <span style={{ fontWeight: "500" }}>{st.stageName}</span>
            {st.cards.map((cardData, i) => {
              const { cardId } = cardData;
              return (
                <Fragment key={cardId + "" + i}>
                  {
                    <Card
                      handleDragStart={(e) => handleDragStart(e, st.id, cardId)}
                      data={cardData}
                      isDragging={draggingItem}
                      dragItemData={getDataOnDrag}
                      onDragOver={(e) => {
                        dragHoverRef.current = i;
                        e.stopPropagation();
                      }}
                    />
                  }
                </Fragment>
              );
            })}
          </div>
        ))}
      </div>

      {draggingItem && <Card id={"move-box"} data={getDataOnDrag()} />}
    </>
  );
}
