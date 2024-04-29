import React from "react";
import DataStatsThree from "../DataStats/DataStatsThree";
import ToDoList from "../Todo/ToDoList";
import dynamic from 'next/dynamic';

const ChartSevenDynamic = dynamic(() => import('../charts/ChartSeven'), {
    ssr: false,
  });


const FarmManagementDashboard: React.FC = () => {
  return (
    <>
      <DataStatsThree />

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-7">
          <ChartSevenDynamic />
        </div>

        <ToDoList />
      </div>
    </>
  );
};

export default FarmManagementDashboard;