import Head from "next/head";
import Layout from "@/layouts/globals"
import Updatemsg from "@/components/Update/updateMsg"

const Dashboard = () => {
  
  return (
    <>
    <Head>
        <title>Dashboard</title>
    </Head>
    <Layout>
        <Updatemsg/>
    </Layout>
    
    </>
  )
}

export default Dashboard;