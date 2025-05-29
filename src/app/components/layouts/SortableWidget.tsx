"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

// Props type: expects an `id` for each sortable item
type Props = {
  id: string;
};

const SortableWidget: FC<PropsWithChildren<Props>> = ({ id, children }) => {
  // Get sortable helpers for this item
  const {
    attributes, // drag attributes (for accessibility)
    listeners, // event listeners (for dragging)
    setNodeRef, // ref to connect to the DOM node
    transform, // current transform (position change)
    transition, // transition styles for smooth movement
    isDragging, // whether this item is currently being dragged
  } = useSortable({ id });

  // Combine transform + transition into inline styles
  const style = {
    transform: CSS.Transform.toString(transform), // convert transform to CSS string
    transition,
    opacity: isDragging ? 0.5 : 1, // make item semi-transparent while dragging
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      layout
    >
      {children}
    </motion.div>
  );
};

export default SortableWidget;
