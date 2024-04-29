import DefaultLayout from '@/Layouts/DefaultLayout';
import CalendarComponent from '@/components/Calendar/CalendarComponent';
import Head from 'next/head';



const CalendarPage = () => {
    return (
        <>
          <Head>
            <title>Calendar - Ag-Desk</title>
            <meta name="description" content="View and manage your farming calendar." />
          </Head>
          <DefaultLayout>
            <CalendarComponent />
          </DefaultLayout>
        </>
      );
    };

export default CalendarPage;
