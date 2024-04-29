import React from "react";
import Head from "next/head";
import DefaultLayout from "@/Layouts/DefaultLayout";
import TaskComponent from "@/components/Tasks/TaskComponent";

const TaskKanbanPage = () => {
    return (
        <>
          <Head>
            <title>TaskManager - Ag-Desk</title>
            <meta name="TaskManager" content="View and manage your Tasks." />
          </Head>
          <DefaultLayout>
            <TaskComponent />
          </DefaultLayout>
        </>
      );
};

export default TaskKanbanPage;
