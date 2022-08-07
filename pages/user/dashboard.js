import React from "react";
import Layout from "../../src/components/Layout";
import Sidebar from "../../src/components/user/Sidebar";
import { userAuth } from "../../__lib__/helpers/requireAuthentication";

const dashboard = () => {
  return (
    <Layout>
      <div className="" style={{ height: "70vh" }}>
        <div className="row h-100">
          <div className="col-md-2 user_sidebar ">
          <Sidebar/>
          </div>
        </div>
        <div className="col-md-10"></div>
      </div>
    </Layout>
  );
};

export default dashboard;


export const getServerSideProps = userAuth(context => {
  return {
      props: {}
  }
})
