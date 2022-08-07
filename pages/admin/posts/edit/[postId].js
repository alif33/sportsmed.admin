import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Select from "react-select";
import { League, TagIcon, Team, Title } from "../../../../src/components/Icon";
import Layout from "../../../../src/vuexy/Layout";
import { adminAuthStatus } from "../../../../__lib__/helpers/Cookiehandler";
import { getData, updateData } from "../../../../__lib__/helpers/HttpService";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

export default function Players() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [disable, setDisable] = useState(false);
  const [selectedTag, setSelectedTag] = useState([]);
  const [tags, setTags] = useState([]);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const router = useRouter();


  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetctPost(router.query.postId);

    getData("/tags").then((res) => setTags(res));

    getData("/players").then((res) => setPlayers(res));
    

  }, [router.query.postId]);

  const fetctPost = (id) => {
    getData(`/admin/post/${id}`).then((data) => {
      setPost(data);
      setLoading(false);
    });
  };

  const InsertPlayer = async (data) => {

    const { token } = await adminAuthStatus();
    setDisable(true);
    updateData(`/admin/post/${router.query.postId}`, data, token).then(
      (res) => {
        if (res?.success) {
          fetctPost(router.query.postId);
          toast.success(`${res.message}`);
          setDisable(false);
        router.push('/admin/posts')          
        } else {
          toast.error(res.error);
          setDisable(false);
        }
      }
    );
  };

  
  const onSubmit = async (data) => {

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("league", data.league);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);

   for (let i = 0; i < selectedPlayers.length; i++) {
    const element = selectedPlayers[i];
    formData.append("playersName", element.value);
   }
   for (let i = 0; i < selectedTag.length; i++) {
    const element = selectedTag[i];
    formData.append("tags", element.value);
   }

    await InsertPlayer(formData);
  };

  const handleSelectTag = (e) => {
    setSelectedTag(e);
  };
  const handleSelectPlayer = (e) => {
    setSelectedPlayers(e);
  };

  const tagsOption = tags?.map((tag) => ({
    label: tag.tagName,
    value: tag.tagName,
  }));
  const playersOption = players?.map((player) => ({
    label: player.firstName + " " + player.lastName,
    value: player.firstName + " " + player.lastName,
  }));

 


  
 
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
                    <h3 className="text-center mb-2">Add Post</h3>
                    {/* title */}
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <div className="input-group-merge mb-1 input-group">
                          <span className="input-group-text">
                            <Title />
                          </span>
                          <input
                            {...register("title", {
                              required: false,
                            })}
                            id="nameVerticalIcons"
                            placeholder="Title"
                            type="text"
                            className="form-control"
                            defaultValue={post?.title}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div
                          className="input-group-merge mb-1 input-group"
                          style={{ flexWrap: "nowrap" }}
                        >
                          <span className="input-group-text">
                            <Team />
                          </span>
                          <Select
                            onChange={handleSelectPlayer}
                            isMulti
                            name="colors"
                            options={playersOption}
                            className="basic-multi-select text-capitalize w-100"
                            classNamePrefix="select"
                          />
                        </div>
                      </div>
                    </div>

                    {/* league */}

                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="input-group-merge mb-1 input-group"
                          style={{ flexWrap: "nowrap" }}
                        >
                          <span className="input-group-text">
                            <League />
                          </span>
                          <select
                            {...register("league", {
                              required: false,
                            })}
                            className="form-select"
                          >
                            <option
                              slected={
                                post?.league === "MLB"
                                  ? post?.league
                                  : undefined
                              }
                              value="MLB"
                            >
                              MLB
                            </option>
                            <option
                              slected={
                                post?.league === "NFL"
                                  ? post?.league
                                  : undefined
                              }
                              value="NFL"
                            >
                              NFL
                            </option>
                            <option
                              slected={
                                post?.league === "NBA"
                                  ? post?.league
                                  : undefined
                              }
                              value="NBA"
                            >
                              NBA
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* tags */}

                      <div className="col-md-6">
                        <div
                          className="input-group-merge mb-1 input-group"
                          style={{ flexWrap: "nowrap" }}
                        >
                          <span className="input-group-text">
                            <TagIcon />
                          </span>
                          <Select
                            onChange={handleSelectTag}
                            isMulti
                            name="colors"
                            options={tagsOption}
                            className="basic-multi-select text-capitalize w-100"
                            classNamePrefix="select"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {/* description */}

                      <div className="col-md-12">
                        <div className="input-group-merge mb-1 input-group">
                          <textarea
                            {...register("description", {
                              required: false,
                            })}
                            className="form-control"
                            id="descriptionArea"
                            rows="3"
                            placeholder="Description"
                            defaultValue={post?.description}
                          ></textarea>
                        </div>
                      </div>
                      {/* image */}
                      <div className="col-md-4">
                        <div className="input-group-merge mb-1 input-group pr-1">
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
