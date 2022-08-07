import Layout from "../../src/components/Layout";
import Sidebar from "../../src/components/user/Sidebar";

const account = () => {
  return (
    <Layout>
      <div className="" >
        <div className="row h-100">
          <div className="col-md-2 user_sidebar ">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <div className="w-50 mx-auto">

              <form className="mt-3">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="Name">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        aria-describedby="emailHelp"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="Name">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        aria-describedby="emailHelp"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea id="description"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              
            <form className="py-3">
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input type="text" className="form-control" id="Name" aria-describedby="emailHelp" placeholder="Enter Name" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              {/* <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div> */} 
              <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default account;
// export const getServerSideProps = userAuth((context) => {
//   return {
//     props: {},
//   };
// });
