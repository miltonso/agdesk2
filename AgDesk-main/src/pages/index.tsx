import Head from 'next/head';
import React from 'react';

import FarmManagementDashboard from '@/components/Dashboard/FarmManagementDashboard'; // The main dashboard component for your farm
import DefaultLayout from '@/Layouts/DefaultLayout';


export default function Home() {
  return (
    <>
      <Head>
        <title>Ag-Desk</title>
        <meta name="description" content="Central hub for managing all farm activities, resources, and analytics." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <DefaultLayout>

            <FarmManagementDashboard />



        </DefaultLayout>
        {/* This is where you'd include the main dashboard component */}
    </>
  );
}