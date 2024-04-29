import React, { useState } from "react";
import Image from "next/image";
import Breadcrumb from "../BreadCrumbs/BreadCrumb";
import { Infra, infraData } from "@/Types/InfraData";
import Modal from "@/Modals/modal";
import fieldsData from "@/Types/field-data";

const InfrastructureMangementComponent = () => {
  const [selectedUtility, setSelectedUtility] = useState<Infra | null>(null);

  const openModal = (utility: Infra) => {
    console.log("Opening modal for:", utility); // Check if this logs correctly
    setSelectedUtility(utility);
  };

  const closeModal = () => {
    setSelectedUtility(null);
  };
  return (
    <main>
      <div className="mx-auto">
        <Breadcrumb pageName="Infrastructure Management" />
      </div>

      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Utilities
          </h4>
          <button className="flex items-center gap-2 rounded bg-primary px-4.5 py-2 font-medium text-white hover:bg-opacity-80">
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z"
                fill=""
              />
            </svg>
            Add
          </button>
        </div>
        <div className="mt-[12px] flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Name
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Type
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Status
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Last Inspection
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Maintenance date
              </h5>
            </div>
          </div>

          {infraData.map((infra, key) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === infraData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <Image src={infra.logo} alt="Brand" width={48} height={48} />
                </div>
                <div
                  onClick={() => openModal(infra)}
                  className="cursor-pointer"
                >
                  {infra.name}
                </div>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{infra.type}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p
                  className={`${
                    infra.status === "Operational"
                      ? "text-green-500"
                      : infra.status === "Under Maintenance"
                        ? "text-orange-500"
                        : infra.status === "Needs Repair"
                          ? "text-rose-600"
                          : ""
                  }`}
                >
                  {infra.status}
                </p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">
                  {infra.last_inspection}
                </p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-meta-5">{infra.maintenance_date}</p>
              </div>
            </div>
          ))}
        </div>
        {selectedUtility && (
          <Modal isOpen={!!selectedUtility} onClose={closeModal}>
            <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-bold">
                {selectedUtility.name}
              </h2>
              <div className="mb-6">
                <Image
                  src={selectedUtility.logo}
                  alt={selectedUtility.name}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-semibold">Details</h3>
                <table className="text-gray-500 dark:text-gray-400 w-full text-left text-sm">
                  <tbody>
                    <tr className="dark:bg-gray-800 dark:border-gray-700 border-b bg-white">
                      <th
                        scope="row"
                        className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                      >
                        Description
                      </th>
                      <td className="px-6 py-4">
                        {selectedUtility.description ||
                          "No detailed description available."}
                      </td>
                    </tr>
                    <tr className="dark:bg-gray-800 dark:border-gray-700 border-b bg-white">
                      <th
                        scope="row"
                        className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                      >
                        Used for
                      </th>
                      <td className="px-6 py-4">
                        {selectedUtility.usage || "Not specified."}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-semibold">Tasks</h3>
                {selectedUtility.tasks && selectedUtility.tasks.length > 0 ? (
                  <ul className="list-inside list-disc">
                    {selectedUtility.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No specific tasks listed for this utility.</p>
                )}
              </div>
            </div>
          </Modal>
        )}
      </div>

      <div className="mt-8 space-y-6">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Fields
        </h4>

        {/* Container for all cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Loop through fields data to create cards */}
          {fieldsData.map((field, index) => (
            <div
              key={index}
              className="rounded-lg border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark"
            >
              <h5 className="mb-3 text-lg font-bold text-black dark:text-white">
                {field.name} - {field.cropType}
              </h5>
              <div className="space-y-2">
                {/* Greenhouse Information */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black dark:text-white">
                    Greenhouse:
                  </span>
                  <span className="text-sm font-semibold text-black dark:text-white">
                    {field.greenhouse}
                  </span>
                </div>
                {/* Barn Information */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black dark:text-white">
                    Barn:
                  </span>
                  <span className="text-sm font-semibold text-black dark:text-white">
                    {field.barn}
                  </span>
                </div>
                {/* Irrigation System Information */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black dark:text-white">
                    Irrigation System:
                  </span>
                  <span className="text-sm font-semibold text-black dark:text-white">
                    {field.irrigationSystem}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default InfrastructureMangementComponent;