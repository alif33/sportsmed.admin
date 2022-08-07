import React from 'react';
import Layout from '../../src/components/Layout';
import Sidebar from '../../src/components/user/Sidebar';

const tags = () => {
    return (
        <Layout>
        <div className="" style={{ height: "70vh" }}>
          <div className="row h-100">
            <div className="col-md-2 user_sidebar ">
              <Sidebar />
            </div>
            <div className="col-md-10">
                  <h2>Hello Tags</h2>
            </div>
          </div>
          <div className="col-md-10"></div>
        </div>
      </Layout>
    );
};

export default tags;