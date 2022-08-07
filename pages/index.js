import Layout from "../src/vuexy/Layout";
import { adminAuth } from "../__lib__/helpers/requireAuthentication";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row breadcrumbs-top">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">Home</h2>
              <div className="breadcrumb-wrapper">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/admin/dashboard">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">Docs</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-body">
        {/* Kick start */}
        <div className=" bg-white my-2">
          {/* <div className="card-header"> */}
            {/* <h4 className="card-title">Kick start your next project 🚀</h4> */}
          {/* </div> */}
          <div className="p-2">
            <div className="card-text">
              <p>These different variables will be visible on the client application for each player report.</p>
              <p>
                Underneath the information upload area is where the data will be
                located. Each of these cells contains the data of the player
                that was uploaded. When the cell is expanded, the data will be
                visible, and you will have the accessibility to delete or edit
                the player information.
              </p>
              <p>
                In addition, these player data values can be updated. To do so,
                new information can be added to the player through the cell, and
                the old information will still be visible/editable on the card.
                All old player information will still be used towards the SEO.
              </p>
            </div>
          </div>
        </div>
        {/*/ Kick start */}
        {/* Page layout */}
        <div className="bg-white my-2">
          <div className="card-header">
            <h4 className="card-title">Post Tags: </h4>
          </div>
          <div className="p-2">
            <div className="card-text">
              <p>
                These tags are what will be fed into the SEO and will accompany
                each post that will be submitted through the admin dashboard. By
                adding new tags, you will have the opportunity to associate them
                with each post when that is being made.
              </p>
              <p>
                The features are straightforward here. Tags can be submitted and
                deleted.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white my-2">
          <div className="p-2">
            <h4 className="card-title">Posts</h4>
          </div>
          <div className=" p-2">
            <div className="card-text">
              <p>
                The features here are straightforward and are similar to that of
                the “Players” section. Underneath the upload information data,
                the submitted data will be visible.
                <p>
                  Each cell will be separated by the date that it was submitted.
                  When these cells are expanded, the individual posts made on
                  that particular date will be visible. These posts can be
                  edited and/or deleted.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white my-2">
          <div className="p-1">
            <h4 className="card-title">Videos/Podcasts:</h4>
          </div>
          <div className="p-2">
            <div className="card-text">
              <p>
                Videos and podcasts can be submitted here that will be visible
                on the client-side of the application. The features are
                straightforward in that data can be uploaded and deleted.
              </p>
            </div>
          </div>
        </div>
        {/*/ Page layout */}
      </div>
    </Layout>
  );
}

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
