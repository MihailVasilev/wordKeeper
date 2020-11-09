import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ItemList from "./PageList/ItemList";

function DraggableList(props) {
  const { data, addWord, deleteWord, showDetails, reorderList } = props;
  const actions = { deleteWord, addWord, showDetails };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const position = {
      startIndex: result.source.index,
      endIndex: result.destination.index,
    };

    reorderList(position);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {data.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <ul
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ItemList isDraggable {...item} {...actions} />
                  </ul>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DraggableList;
