"use client";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ReactNode } from "react";
import SortableWidget from "./SortableWidget";
import { useState } from "react";

// Initial widget IDs (used for ordering)
const initialWidgets = ["weather", "finance", "news"];

// Define the props type for DashboardLayout component
interface DashboardLayoutProps {
  children: ReactNode; // Any nested components or elements passed inside
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [widgets, setWidgets] = useState(initialWidgets); // State to track the current widget order

  // Set up sensors for drag and drop (pointer and keyboard support)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Handle when dragging ends
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = widgets.indexOf(active.id as string);
      const newIndex = widgets.indexOf(over?.id as string);
      setWidgets(arrayMove(widgets, oldIndex, newIndex)); // Update the widget order based on drag result
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <main>{children}</main>
      <SortableContext items={widgets} strategy={verticalListSortingStrategy}>
        <div className="grid gap-4">
          {widgets.map((id) => (
            <SortableWidget key={id} id={id}>
              <div className="bg-white p-4 shadow rounded-md">
                <h2 className="text-xl font-semibold capitalize">
                  {id} Widget
                </h2>
              </div>
            </SortableWidget>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default DashboardLayout;
