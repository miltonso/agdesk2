import React, { useEffect } from "react";
import Image from "next/image";

import Drag from "@/js/drag";
import DropdownDefault from "../Dropdowns/DropdownDefault";
import Breadcrumb from "../BreadCrumbs/BreadCrumb";
import TaskHeader from "../ToolTips/TaskHeader";
import TaskCard from "../Cards/TaskCard";

const kanbanData = {
  todo: {
    title: "To Do's",
    count: 3,
    tasks: [
      {
        title: "Task One",
        severity: "High" as 'High' | 'Medium' | 'Low',
        tasks: [
          { description: "Subtask 1", checked: false },
          { description: "Subtask 2", checked: true },
          { description: "Subtask 3", checked: false },
        ],
      },
      {
        title: "Task Two",
        severity: "Medium" as 'High' | 'Medium' | 'Low', 
        tasks: [
          { description: "Subtask 4", checked: false },
          { description: "Subtask 5", checked: true },
        ],
      },
      // More tasks can be added here
    ],
  },
  inProgress: {
    title: "In Progress",
    count: 1,
    tasks: [
      {
        title: "Task in progress",
        severity: "Low" as 'High' | 'Medium' | 'Low',
        tasks: [{ description: "Subtask 6", checked: true }],
      },
    ],
  },
  onHold: {
    title: "On Hold",
    count: 2,
    tasks: [
      {
        title: "Task On Hold 1",
        severity: "High" as 'High' | 'Medium' | 'Low',
        imageSrc: "/images/task/task-01.jpg",
        tasks: [{ description: "Subtask 7", checked: false }],
      },
      {
        title: "Task On Hold 2",
        severity: "Medium" as 'High' | 'Medium' | 'Low',
        imageSrc: "/images/task/task-01.jpg",
        tasks: [{ description: "Subtask 8", checked: false }],
      },
    ],
  },
  completed: {
    title: "Completed",
    count: 1,
    tasks: [
      {
        title: "Completed Task",
        severity: "Low" as 'High' | 'Medium' | 'Low',
        tasks: [{ description: "Final Subtask", checked: true }],
      },
    ],
  },
  // Define other columns similarly...
};

const TaskKanban: React.FC = () => {
  useEffect(() => {
    Drag();
  });

  return (
    <>
      <div className="mx-auto max-w-5xl">
        <Breadcrumb pageName="TaskManager" />
        <TaskHeader />

        <div className="mt-9 grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-4">
          {Object.entries(kanbanData).map(([key, column], taskIndex) => (
            <div key={key} className="swim-lane flex flex-col gap-5.5">
              <h4 className="text-xl font-semibold text-black dark:text-white">
                {column.title} ({column.count})
              </h4>
              {column.tasks.map((task, index) => (
                <TaskCard
                  key={index}
                  taskIndex={taskIndex * 100 + index}
                  {...task}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskKanban;
