import React, { useEffect, useState } from "react";
import Layout from "../../src/components/Layout";
import NewsCard from "../../src/components/user/NewsCard";
import Sidebar from "../../src/components/user/Sidebar";
import { userAuth } from "../../__lib__/helpers/requireAuthentication";
import { getData } from './../../__lib__/helpers/HttpService';

const NewsFeed = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
      getData('users/posts')
      .then(data => setPosts(data))

  }, [])
  return (
    <Layout>
      <div className="" >
        <div className="row h-100">
          <div className="col-md-2 user_sidebar ">
            <Sidebar />
          </div>
          <div className="col-md-10 text-center">
            <div className="my-5">
              <div className="row     justify-content-center">
                  {posts.map((post, i) => <NewsCard key={i} post={post}/>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsFeed;

// export async function getStaticProps() {
//   const posts = await getData("users/posts");

//   return {
//     props: {
//       posts,
//     },
//   };
// }



// export const getServerSideProps = userAuth((context) => {
//   return {
//     props: {},
//   };
// });


