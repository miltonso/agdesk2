import DefaultLayout from '@/Layouts/DefaultLayout';
import InfrastructureMangementComponent from '@/components/InfrastructureManagement/InfrastructureManagement';
import Head from 'next/head';



const InfrastructureManagement = () => {
    return (
        <>
          <Head>
            <title>InfrastructureManagement - Ag-Desk</title>
            <meta name="InfrastructureManagement" content="View and manage your farming Infrastructure." />
          </Head>
          <DefaultLayout>
          <InfrastructureMangementComponent />
          </DefaultLayout>
        </>
      );
    };

export default InfrastructureManagement;
