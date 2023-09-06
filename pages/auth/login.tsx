import React from 'react';
import Layout from '@/layouts/globals';
import Login from '@/components/Auth/Login';
import Router from "next/router";
import { useEffect } from 'react';
import { Spinner } from "@nextui-org/react";
import { useSession } from 'next-auth/react';

const LoginPage = () => {
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") Router.replace("/dashboard");
  });

  if (status === "unauthenticated")
    return (
        <Layout title="Login">
          <Login />
        </Layout>
    );

  return (
    <Layout title="Loading">
      <Spinner label="Loading..."  labelColor="primary"  size="lg" color="primary"/>
    </Layout> 
    
  );
};

export default LoginPage;