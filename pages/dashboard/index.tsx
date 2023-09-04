import React from 'react';
import Layout from '@/layouts/globals';
import Updatemsg from '@/components/Update/updateMsg';
import Login from '@/components/Auth/Login';

const Dashboard = () => {
  const logged = true;

  return (
    <>
      {logged ? (
        <Layout title="Dashboard">
          <Updatemsg />
        </Layout>
      ) : (
        <Layout title="Login">
          <Login />
        </Layout>
      )}
    </>
  );
};

export default Dashboard;
