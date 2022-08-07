import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import {  getData, updateData } from "../../../__lib__/helpers/HttpService";
import { Title } from "../../../src/components/Icon";
import Layout from "../../../src/vuexy/Layout";
import { adminAuthStatus } from "../../../__lib__/helpers/Cookiehandler";

const PodcastId = () => {
  const [disable, setDisable] = useState(false);
  const [podcast, setPodcast] = useState(null);

  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetctPost(router.query.Id);
  }, [router.query.Id]);

  const fetctPost = (id) => {
    getData(`/admin/podcast/${id}`).then((data) => {
      setPodcast(data);
    });
  };
  const onSubmit = async (data) => {
    const { token } = await adminAuthStatus();
    setDisable(true);
    updateData(`/admin/podcast/${router.query.Id}`, data, token).then(
      (res) => {
        if (res?.success) {
         fetctPost(router.query.podcastId)
          toast.success(`${res.message}`);
          setDisable(false);
          router.push('/admin/podcasts')
        } else {
          toast.error(res.error);
          setDisable(false)
        }
      }
    );
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
                    <h6 className="text-center mb-2">Insert Podcasts</h6>
                    <div className="row">
                      {/* title and audio link */}
                      <div className="col-sm-12 col-md-6">
                        <div className="input-group-merge mb-1 input-group">
                          <span className="input-group-text">
                            <Title />
                          </span>
                          <input
                            {...register("title", {
                              required: false,
                            })}
                            id="title"
                            placeholder="Podcast title"
                            type="text"
                            className="form-control"
                            defaultValue={podcast?.title}
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
                              required: false,
                            })}
                            id="audioUrl"
                            placeholder="Audio url"
                            type="text"
                            className="form-control"
                            defaultValue={podcast?.audioUri}
                          />
                        </div>
                      </div>
                      {/* title and audio link en */}

                      {/* input description start */}

                      <div className="col-sm-12">
                        <div className=" mb-1 input-group">
                          <textarea
                            {...register("description", {
                              required: false,
                            })}
                            id="description"
                            placeholder="Podcasts Description"
                            type="text"
                            className="form-control"
                            defaultValue={podcast?.description}
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
};

export default PodcastId;
