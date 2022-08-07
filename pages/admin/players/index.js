import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { League, Man, Team } from "../../../src/components/Icon";
import Card from "../../../src/components/dashboard/player/Card";
import Layout from "../../../src/vuexy/Layout";
import { getData, postData } from "../../../__lib__/helpers/HttpService";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";
import GroupWise from "../../../src/components/dashboard/player/GroupWise";

export default function Players() {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);
  const [disable, setDisable] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();


  useEffect(() => {
    fetctPlayer();
  }, []);

  const fetctPlayer = () => {
    getData("/players").then((data) => {
     if(data){
      setPlayers(data);
      setLoading(false);
     }
    });
  };

  const InsertPlayer = async (data) => {
    setDisable(true);
    postData("/admin/player", data, setDisable).then((res) => {
      if (res?.success) {
        fetctPlayer();
        toast.success(`${res.message}`);
        reset();
      }
    });
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("league", data.league);
    formData.append("playerTeam", data.playerTeam);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);

    await InsertPlayer(formData);
  };

console.log(players)

  return (
    <Layout>
      <div className="content-body">
        <div className="row">
          <div className="col-md-12">
            <div className="c-white p-2">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-sm-12">
                      <h6 className="text-center mb-2">Add Player</h6>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group-merge mb-1 input-group">
                            <span className="input-group-text">
                              <Man />
                            </span>
                            <input
                              {...register("firstName", {
                                required: "first name is requires",
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
                              <Man />
                            </span>
                            <input
                              {...register("lastName", {
                                required: "last name is required.",
                              })}
                              id="nameVerticalIcons"
                              placeholder="Last Name"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group-merge mb-1 input-group">
                            <span className="input-group-text">
                              <League />
                            </span>
                            <select
                              {...register("league", {
                                required: "Please select a league.",
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
                        <div className="col-md-6">
                          <div className="input-group-merge mb-1 input-group">
                            <span className="input-group-text">
                              <Team />
                            </span>
                            <input
                              {...register("playerTeam", {
                                required: "Team is required.",
                              })}
                              placeholder="Team"
                              type="text"
                              className="form-control"
                            />
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
                        <div className="col-md-6">
                          <div className="input-group-merge mb-1 input-group pr-1">
                            {/* <label htmlFor="fileManager" className="mb-2">
                            Player Image
                          </label> */}
                            <input
                              {...register("image", {
                                required: "Image is required.",
                              })}
                              id="fileManager"
                              type="file"
                              accept=".png, .jpg"
                              className="form-control"
                            />
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

            <h6 className="mt-4">Players</h6>
            
            <GroupWise 
              players={ players }
            />


            {/* {!loading && players?.length > 0 &&
              players?.map((item, index) => <Card 
                setPlayers={setPlayers}  
                key={index} 
                item={item} 
              />)
              
            } */}
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
