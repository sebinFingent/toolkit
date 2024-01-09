// Simple drag with all drag events
// import SimpleDrag from "./simpleDrag";

// Advance drag with other custom events
import AdvDrag from "./advDrag";
import Table from "./table";

export default function Drag() {
  return (
    <AdvDrag>
      {({ slectedRows, onDragStart, onDrag, onDragEnd }) => (
        <Table
          slectedRows={slectedRows}
          onDragStart={onDragStart}
          //   onDrag={onDrag}
          //   onDragEnd={onDragEnd}
        />
      )}
    </AdvDrag>
  );
}
