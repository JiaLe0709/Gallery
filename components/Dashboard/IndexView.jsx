import React from 'react';
import Layout from '@/layouts/globals';
import Updatemsg from '@/components/Update/updateMsg';
import { signOut } from 'next-auth/react';

const Dashboard = () => {
  return (
    <>
        <Layout title="Dashboard">
        <button onClick={() => signOut()}>Sign out</button>
          <Updatemsg />
        </Layout>
    </>
  );
};

export default Dashboard;