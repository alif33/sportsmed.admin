import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Layout from "../../../../src/vuexy/Layout";
import { adminAuthStatus } from "../../../../__lib__/helpers/Cookiehandler";
import { getData, updateData } from "../../../../__lib__/helpers/HttpService";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";
import { League, Man, Team } from './../../../../src/components/Icon';



export default function SinglePlayer() {
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState(null);
  const [disable, setDisable] = useState(false);
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onError = (err) => showErr(err);

  useEffect(() => {
    fetctPlayer(router.query.playerId);
  }, [router.query.playerId]);

  const fetctPlayer = (id) => {
    getData(`/admin/player/${id}`).then((data) => {
      setPlayer(data);
      setLoading(false);
    });
  };


  const InsertPlayer = async (data) => {
    const { token } = await adminAuthStatus()
    setDisable(true);
    updateData(`/admin/player/${router.query.playerId}`, data, token).then((res) => {
      if (res?.success) {
        fetctPlayer(router.query.playerId);
        toast.success(`${res.message}`);
        setDisable(false);
        router.push('/admin/players')
      } else {
        toast.error(res.error)
        setDisable(false);
      }
    });
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("firstName", data?.firstName);
    formData.append("lastName", data?.lastName);
    formData.append("league", data?.league);
    formData.append("playerTeam", data?.playerTeam);
    formData.append("description", data?.description);
    formData.append("image", data?.image[0]);

    await InsertPlayer(formData);
  };



  return (
    <Layout>
      <div className="content-body">
        <div className="row">
        
          <div className="col-md-12">
            <div className="c-white">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-sm-12">
                      <h6 className="text-center mb-2">Edit Player</h6>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group-merge mb-1 input-group">
                            <span className="input-group-text">
                              <Man />
                            </span>
                            <input
                              {...register("firstName", {
                                required: false,
                              })}
                              id="nameVerticalIcons"
                              placeholder="First Name"
                              type="text"
                              className="form-control"
                              defaultValue={player?.firstName}
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
                                required: false,
                              })}
                              id="nameVerticalIcons"
                              placeholder="Last Name"
                              type="text"
                              className="form-control"
                              defaultValue={player?.lastName}
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
                                required: false,
                              })}
                              className="form-select"
                            >

                              <option slected={player?.league === "MLB" ? player?.league : undefined} value="MLB">MLB</option>
                              <option slected={player?.league === "NFL" ? player?.league : undefined} value="NFL">NFL</option>
                              <option slected={player?.league === "NBA" ? player?.league : undefined} value="NBA">NBA</option>

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
                                required: false,
                              })}
                              placeholder="Team"
                              type="text"
                              className="form-control"
                              defaultValue={player?.playerTeam}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group-merge mb-1 input-group">
                            <textarea
                              {...register("description", {
                                required: false,
                              })}
                              className="form-control"
                              id="descriptionArea"
                              rows="3"
                              placeholder="Description"
                              defaultValue={player?.description}
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
                                required: false,
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
