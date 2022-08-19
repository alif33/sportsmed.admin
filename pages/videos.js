import dateFormat from "dateformat";
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Trash2 } from "react-feather";
import { League } from "../src/components/Icon";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ReactPlayer from 'react-player/lazy';
import Layout from "../src/vuexy/Layout";
import { adminAuthStatus } from "../__lib__/helpers/Cookiehandler";
import { showErr } from "../__lib__/helpers/ErrHandler";
import {
  authPost,
  deleteData,
  getData
} from "../__lib__/helpers/HttpService";
import { adminAuth } from "../__lib__/helpers/requireAuthentication";


export default function Videos() {
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [isOpen, setIsOpen] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onError = (err) => showErr(err);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = () => {
    getData("watches").then((data) => {
      setVideos(data);
      setLoading(false);
    });
  };

  const onSubmit = async (data) => {
    const { token } = await adminAuthStatus();
    setDisable(true);
    authPost("/admin/watch", data, token).then((res) => {
      if (res?.success) {
        toast.success(`${res.message}`);
        setDisable(false);
        fetchVideo();
        reset();
      } else {
        toast.error(res.error);
        setDisable(false);
      }
    });
  };

  const handleDelete = async (_id) => {
    const { token } = await adminAuthStatus();
    deleteData(`/admin/watch?_id=${_id}`, token)
      .then(res => {
        if (res?.success) {
          fetchVideo()
          toast.success(res.message);
        } else {
          toast.error(`${res.error}`)
        }
      })
  }

  return (
    <Layout>
      <div className="content-body">
        <div className="row">
          <div className="col-md-12">
            <div className="c-white p-2">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                  <div className="row">
                    <div className="col-sm-12">
                      <h3 className="text-center mb-2">Insert Video</h3>
                      <div className="row">
                        <div className="col-md-6 col-12">
                          <div className="input-group-merge mb-1 input-group">
                            <span className="input-group-text">
                              {/* <Title /> */}
                            </span>
                            <input
                              {...register("title", {
                                required: "Title is required",
                              })}
                              id="nameVerticalIcons"
                              placeholder="Title"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="input-group-merge mb-1 input-group" style={{ flexWrap: 'nowrap' }}>
                            <span className="input-group-text">
                              <League />
                            </span>
                            <select
                              {...register("league", {
                                required: "Please select a league.",
                              })}
                              className="form-select"
                            >
                              <option value="">Select</option>
                              <option value="MLB">MLB</option>
                              <option value="NFL">NFL</option>
                              <option value="NBA">NBA</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-group-merge mb-1 input-group">
                        <span className="input-group-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width={25}
                            height={25}
                            viewBox="0 0 64 64"
                            style={{ fill: "#000000" }}
                          >
                            <path d="M 16 8 C 11.582 8 8 11.582 8 16 L 8 48 C 8 52.418 11.582 56 16 56 L 48 56 C 52.418 56 56 52.418 56 48 L 56 16 C 56 11.582 52.418 8 48 8 L 16 8 z M 21.199219 14 L 23.402344 14.001953 L 24.826172 20.855469 L 24.964844 20.855469 L 26.318359 14.001953 L 28.544922 14.001953 L 26 23.472656 L 26 28.400391 L 23.8125 28.400391 L 23.808594 23.738281 L 21.199219 14 z M 31.472656 17.449219 C 32.282656 17.449219 32.941031 17.700078 33.457031 18.205078 C 33.972031 18.707078 34.232422 19.358344 34.232422 20.152344 L 34.236328 25.533203 C 34.236328 26.423203 33.985469 27.125719 33.480469 27.636719 C 32.975469 28.145719 32.281578 28.398438 31.392578 28.398438 C 30.535578 28.398438 29.854891 28.133328 29.337891 27.611328 C 28.823891 27.089328 28.569359 26.384 28.568359 25.5 L 28.564453 20.095703 L 28.566406 20.097656 C 28.566406 19.291656 28.830469 18.647875 29.355469 18.171875 C 29.879469 17.692875 30.584656 17.450219 31.472656 17.449219 z M 35.931641 17.599609 L 37.914062 17.599609 L 37.919922 25.789062 C 37.919922 26.034063 37.962875 26.215125 38.046875 26.328125 C 38.125875 26.436125 38.267219 26.496094 38.449219 26.496094 C 38.598219 26.496094 38.783953 26.422437 39.001953 26.273438 C 39.227953 26.127437 39.431234 25.936984 39.615234 25.708984 L 39.613281 17.599609 L 41.599609 17.599609 L 41.599609 28.400391 L 39.890625 28.400391 L 39.617188 27.080078 C 39.251188 27.510078 38.872609 27.836594 38.474609 28.058594 C 38.080609 28.281594 37.696219 28.400391 37.324219 28.400391 C 36.863219 28.400391 36.519156 28.242734 36.285156 27.927734 C 36.051156 27.616734 35.935547 27.146578 35.935547 26.517578 L 35.931641 17.599609 z M 31.382812 19.255859 C 31.143812 19.255859 30.948828 19.327797 30.798828 19.466797 C 30.649828 19.606797 30.576172 19.791578 30.576172 20.017578 L 30.578125 25.695312 C 30.578125 25.977313 30.646969 26.203375 30.792969 26.359375 C 30.930969 26.513375 31.127719 26.591797 31.386719 26.591797 C 31.651719 26.591797 31.859625 26.511609 32.015625 26.349609 C 32.170625 26.194609 32.25 25.972359 32.25 25.693359 L 32.246094 20.017578 C 32.246094 19.791578 32.163859 19.607797 32.005859 19.466797 C 31.848859 19.327797 31.639813 19.255859 31.382812 19.255859 z M 32 31 C 32 31 42.468484 31.000406 44.771484 31.566406 C 46.042484 31.878406 47.044766 32.799797 47.384766 33.966797 C 48.000766 36.084797 48 40.5 48 40.5 C 48 40.5 47.999812 44.91525 47.382812 47.03125 C 47.042812 48.20025 46.042484 49.119641 44.771484 49.431641 C 42.468484 49.999641 32 50 32 50 C 32 50 21.531516 49.999594 19.228516 49.433594 C 17.957516 49.121594 16.955234 48.200203 16.615234 47.033203 C 15.999234 44.915203 16 40.5 16 40.5 C 16 40.5 16.000187 36.08475 16.617188 33.96875 C 16.957187 32.80075 17.957516 31.880359 19.228516 31.568359 C 21.530516 31.000359 32 31 32 31 z M 18.800781 33.199219 L 18.800781 35.185547 L 20.800781 35.185547 L 20.800781 47.599609 L 22.800781 47.599609 L 22.800781 35.185547 L 24.800781 35.185547 L 24.800781 33.199219 L 18.800781 33.199219 z M 32 33.199219 L 32 47.599609 L 33.800781 47.599609 L 34 46.359375 C 34.63 47.133375 35.450141 47.599609 36.119141 47.599609 C 36.879141 47.599609 37.529297 47.202734 37.779297 46.427734 C 37.899297 46.009734 37.988047 45.623047 37.998047 44.748047 L 37.998047 39.535156 C 37.999047 38.552156 37.870234 37.808625 37.740234 37.390625 C 37.490234 36.615625 36.879141 36.188734 36.119141 36.177734 C 35.149141 36.167734 34.75 36.675828 34 37.548828 L 34 33.199219 L 32 33.199219 z M 24.800781 36.199219 L 24.800781 45.310547 C 24.800781 46.024547 24.899297 46.500406 25.029297 46.816406 C 25.249297 47.323406 25.699844 47.599609 26.339844 47.599609 C 27.070844 47.599609 28.010781 47.095188 28.800781 46.242188 L 29 47.599609 L 30.800781 47.599609 L 30.800781 36.199219 L 28.800781 36.199219 L 28.800781 44.892578 C 28.360781 45.468578 27.720312 45.904297 27.320312 45.904297 C 27.060313 45.904297 26.850781 45.795812 26.800781 45.507812 L 26.800781 36.199219 L 24.800781 36.199219 z M 42.230469 36.201172 C 41.220469 36.201172 40.439141 36.518281 39.869141 37.113281 C 39.439141 37.549281 39.199219 38.263312 39.199219 39.195312 L 39.199219 44.707031 C 39.199219 45.629031 39.470625 46.283938 39.890625 46.710938 C 40.460625 47.304938 41.239297 47.601562 42.279297 47.601562 C 43.309297 47.601562 44.120156 47.295156 44.660156 46.660156 C 44.900156 46.383156 45.060859 46.06575 45.130859 45.71875 C 45.140859 45.56075 45.199219 45.134906 45.199219 44.628906 L 43.199219 44.628906 L 43.199219 45.421875 C 43.199219 45.877875 42.749219 46.253906 42.199219 46.253906 C 41.649219 46.253906 41.199219 45.877875 41.199219 45.421875 L 41.199219 42.396484 L 45.199219 42.396484 L 45.199219 39.154297 C 45.199219 38.222297 44.970547 37.549281 44.560547 37.113281 C 44.010547 36.518281 43.220469 36.201172 42.230469 36.201172 z M 42.199219 37.636719 C 42.749219 37.636719 43.199219 38.004703 43.199219 38.470703 L 43.199219 41.017578 L 41.199219 41.017578 L 41.199219 38.470703 C 41.199219 38.004703 41.649219 37.636719 42.199219 37.636719 z M 35.220703 37.917969 C 35.760703 37.917969 36 38.245109 36 39.287109 L 36 44.492188 C 36 45.535187 35.760703 45.892578 35.220703 45.892578 C 34.910703 45.892578 34.32 45.683234 34 45.365234 L 34 38.542969 C 34.32 38.224969 34.910703 37.917969 35.220703 37.917969 z" />
                          </svg>
                        </span>
                        <input
                          {...register("videoId", {
                            required: "ID is required.",
                          })}
                          id="nameVerticalIcons"
                          placeholder="YouTube video ID"
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="input-group-merge mb-1 input-group">
                        <textarea
                          rows={4}
                          {...register("description", {
                            required: "Description is required.",
                          })}
                          id="description"
                          placeholder="Description...."
                          type="text"
                          className="form-control"
                        ></textarea>
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

            <h6 className="mt-4">Videos ({videos.length})</h6>

            {loading && <div className="d-flex justify-content-center">
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>}



            {!loading && videos.length > 0 && (
              <div className="mt-2">
                <div className="row">
                  {
                    videos?.map((item, index) => {
                      return (
                        <div key={index} className=" col-sm-12 col-md-6 col-lg-4">
                          <div className="bg-white rounded-1" key={index}>
                            <div className="p-2">
                              {/* <h2 scope="row">{++index}.</h2> */}

                              <ReactPlayer

                                width='100%'
                                height='100%'
                                controls={true}
                                url={`https://www.youtube.com/watch?v=${item.videoId}`} />

                              <div className="d-flex justify-content-between align-items-center mt-2" style={{ background: '#fdfdfd' }}>
                                <h5 className="mb-0">
                                  Upload Date: {dateFormat(item.createdAt, "mmm, dd, yyyy")}
                                  
                                  <span className="ms-25">  {(isOpen === index) ? <ChevronUp onClick={() => setIsOpen("")}/> : <ChevronDown onClick={() => setIsOpen(index)}/>}</span>

                                  </h5>
                                
                                
                                <span className="text-center text-danger">
                                 
                                  <Trash2
                                  size={18}
                                   onClick={() => handleDelete(item._id)}
                                  />
                                </span>
                              </div>
                             { (isOpen === index) && <div className="mt-2">
                                <p>{item.description}</p>
                              </div>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {!loading && videos.length === 0 && <div className="text-center">Not availabel</div>}
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
