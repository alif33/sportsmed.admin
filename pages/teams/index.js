import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { League, Man, Team } from "../../src/components/Icon";
import Layout from "../../src/vuexy/Layout";
import { getData, postData } from "../../__lib__/helpers/HttpService";
import { adminAuth } from "../../__lib__/helpers/requireAuthentication";
import GroupWise from "../../src/components/dashboard/player/GroupWise";
import Card from "../../src/components/dashboard/team/Card";

export default function Players() {
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState([]);
  const [disable, setDisable] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();


  useEffect(() => {
    getData("/admin/teams").then((data) => {
      if(data){
       setTeams(data);
       setLoading(false);
      }
    });
  }, []);


  const onSubmit = async (data) => {
    setDisable(true);
    postData("/admin/team", data, setDisable)
    .then((res) => {
      setDisable(false);
      if (res?.success) {
        getData("/admin/teams").then((data) => {
          if(data){
           setTeams(data);
           setLoading(false);
          }
        });
        toast.success(`${res.message}`);
        reset();
      }
    });
  };

  console.log(teams);

  return (
    <Layout>
      <div className="content-body">
        <div className="row">
          <div className="col-md-12">
            <div className="c-white p-2">
              <div className="card-body">
                <form 
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <h3 className="text-center mb-2">Add Team</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group-merge mb-1 input-group">
                            <span className="input-group-text">
                              <Man />
                            </span>
                            <input
                              {...register("name", {
                                required: "name is required",
                              })}
                              id="nameVerticalIcons"
                              placeholder="First Name"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group-merge mb-1 input-group">
                            <span className="input-group-text">
                              <League />
                            </span>
                            <select
                              {...register("league", {
                                required: "please select a league.",
                              })}
                              className="form-select"
                            >
                              <option selected>Select</option>
                              <option value="MLB">MLB</option>
                              <option value="NFL">NFL</option>
                              <option value="NBA">NBA</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group-merge mb-1 input-group">
                            <textarea
                              {...register("description", {
                                required: "Description required.",
                              })}
                              className="form-control"
                              id="descriptionArea"
                              rows="3"
                              placeholder="Description"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="d-flex">
                        <button
                          disabled={disable}
                          type="submit"
                          className="me-1 btn btn-primary"
                        >
                          Submit
                        </button>
                        <button
                          type="reset"
                          className="btn btn-outline-secondary"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <h6 className="mt-4">Teams</h6>
            
            {/* <GroupWise 
              players={ players }
            /> */}


            {!loading && teams?.length > 0 &&
              teams?.map((item, index) => <Card
                key={index} 
                setTeams={ setTeams }  
                item={item} 
              />)
              
            }

            {/* {
              players?.length === 0 && !loading && <div className="text-center">Players not found</div>
            } */}

            {

              loading && <div className="d-flex justify-content-center">
                <div className="spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }

          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = adminAuth((context) => {
  
  return {
    props: {},
  };
});
