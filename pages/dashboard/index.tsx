import { useEffect } from "react";
import Router from "next/router";
import Layout from '@/layouts/globals';
import { useSession } from "next-auth/react";
import { Spinner } from "@nextui-org/react";
import Dashboard from "@/components/Dashboard/IndexView"

const Protected = () => {
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/login");
  }, [status]);

  if (status === "authenticated")
    return (
      <>
        <Dashboard />
      </>
    );

  return (
    <Layout title="Loading">
      <Spinner label="Loading..."  labelColor="primary"  size="lg" color="primary"/>
    </Layout> 
    
  );
};

export default Protected;
