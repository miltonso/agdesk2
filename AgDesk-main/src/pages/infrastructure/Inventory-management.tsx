import DefaultLayout from '@/Layouts/DefaultLayout';
import InventoryManagementComponent from '@/components/InfrastructureManagement/InventoryManagement';
import Head from 'next/head';



const InventoryManagement = () => {
    return (
        <>
          <Head>
            <title>InventoryManagement - Ag-Desk</title>
            <meta name="InventoryManagement" content="View and manage your farming Inventory" />
          </Head>
          <DefaultLayout>
            <InventoryManagementComponent/>

          </DefaultLayout>
        </>
      );
    };

export default InventoryManagement;
