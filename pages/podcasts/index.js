import dateFormat from "dateformat";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Title } from "../../src/components/Icon";
import Layout from "../../src/vuexy/Layout";
import { adminAuthStatus } from "../../__lib__/helpers/Cookiehandler";
import {
  authPost,
  deleteData,
  getData,
  postData,
} from "../../__lib__/helpers/HttpService";
import { adminAuth } from "../../__lib__/helpers/requireAuthentication";

export default function Home() {
  const [disable, setDisable] = useState(false);
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true)
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetctPlayer()
  }, []);

  const fetctPlayer = () => {
    getData("/podcasts").then((data) => {
     if(data){
      setPodcasts(data);
      setLoading(false);
     }
    });
  };


  const onSubmit = async(data) => {
    setDisable(true);
    const { token } = await adminAuthStatus();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("audioUri", data.audioUri);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);

    authPost("/admin/podcast", formData, token).then((res) => {
      if (res?.success) {
        getData("/podcasts").then((res) => setPodcasts(res));
        toast.success(`${res.message}`);
        reset();
        setDisable(false);
      }
    });
  };

  //   delete podcast

  const handleRemove = async (id) => {
    const { token } = await adminAuthStatus();
    deleteData(`/admin/podcast/${id}`, token).then((res) => {
      if (res?.success) {
        toast.success(res.message);
        getData("podcasts").then((res) => setPodcasts(res));
      } else {
        toast.error(res.error);
      }
    });
  };

  return (
    <Layout>
      <div className="content-body">
        <div className="row">
          <div className="col-md-12">
            <div className="c-white p-2">
              <div className="card-body">
                <form onSubmit={ handleSubmit(onSubmit) }>
                  <div className="row">
                    <div className="col-sm-12">
                      <h3 className="text-center mb-2">Insert Podcasts</h3>
                      <div className="row">
                        {/* title and audio link */}
                        <div className="col-sm-12 col-md-6">
                          <div className="input-group-merge mb-1 input-group">
                            <span className="input-group-text">
                              <Title />
                            </span>
                            <input
                              {...register("title", {
                                required: "Title is required.",
                              })}
                              id="title"
                              placeholder="Podcast title"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-sm-12 col-md-6">
                          <div className="input-group-merge mb-1 input-group">
                            <span className="input-group-text">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className=""
                              >
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                              </svg>
                            </span>
                            <input
                              {...register("audioUri", {
                                required: "URL is required.",
                              })}
                              id="audioUrl"
                              placeholder="Audio url"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                        
                        <div className="col-sm-12">
                          <div className=" mb-1 input-group">
                            <textarea
                              {...register("description", {
                                required: "Description is required.",
                              })}
                              id="description"
                              placeholder="Podcasts Description"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-group-merge mb-1 input-group pr-1">
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

            {/* podacast view tabel */}

            <h6 className="mt-4">Podcasts</h6>
            
            {

            loading && <div className="d-flex justify-content-center">
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            }

           
           {!loading && podcasts.length > 0 &&  <table className="table">

              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">EMBEDDED AUDIO</th>
                  <th scope="col">Date Uploaded</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {podcasts?.map((podcast, i) => (
                  <tr key={i}>
                    <th scope="row">{++i}</th>
                    <th scope="row">{podcast.title}</th>
                    <td>
                      <audio controls>
                        <source src={podcast.audioUri} type="audio/ogg" />
                        <source src={podcast.audioUri} type="audio/mpeg" />
                      </audio>
                    </td>
                    <td>{dateFormat(podcast.createdAt, "mmm, dd, yyyy")}</td>
                    <td>
                      <a
                        onClick={() =>
                          router.push(`/admin/podcasts/edit/${podcast._id}`)
                        }
                        href="#"
                        className="text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className=""
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </a>{" "}
                      /{" "}
                      <a
                        onClick={() => handleRemove(podcast._id)}
                        href="#"
                        className="text-danger"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className=""
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          <line x1={10} y1={11} x2={10} y2={17} />
                          <line x1={14} y1={11} x2={14} y2={17} />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>}
            {podcasts.length === 0 && !loading && <div className="text-center">No data found!</div>}

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
