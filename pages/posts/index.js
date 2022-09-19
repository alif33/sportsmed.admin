import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Select from "react-select";
import DateWise from "../../src/components/dashboard/post/DateWise";
import { League, TagIcon, Team, Title } from "../../src/components/Icon";
import Layout from "../../src/vuexy/Layout";
import { adminAuthStatus } from "../../__lib__/helpers/Cookiehandler";
import {
  authPost,
  getData
} from "../../__lib__/helpers/HttpService";
import { adminAuth } from "../../__lib__/helpers/requireAuthentication";


export default function Posts() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [disable, setDisable] = useState(false);
  const [selectedTag, setSelectedTag] = useState([])
  const [tags, setTags] = useState([]);
  const [players, setPlayers] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  useEffect(() => {
    fetchPosts()
    getData('/tags')
      .then(res => setTags(res));

    getData('/admin/players')
      .then(res => setPlayers(res));

    getData('/authors')
      .then(res => setAuthors(res));

  }, []);

  const fetchPosts = () => {
    getData("/admin/posts").then((data) => {
      if (data) {
        setPosts(data);
        setLoading(false);
      }
      // setPlayers(data);
      // setLoading(false);
    });
  };

  const InsertPlayer = async (data) => {
    const { token } = await adminAuthStatus();
    setDisable(true);
    authPost("/admin/post", data, token).then((res) => {
      if (res.success) {
        fetchPosts();
        toast.success(`${res.message}`);
        reset();
        setDisable(false);
      } else {
        setDisable(false);
      }
    });
  };

  const onSubmit = async (data) => {

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("league", data.league);
    formData.append("description", data.description);
    formData.append("_author", data._author);
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
            <div className="c-white p-2">
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
                                required: "title is requires",
                              })}
                              id="nameVerticalIcons"
                              placeholder="Title"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-12">
                          <div className="input-group-merge mb-1 input-group" style={{ flexWrap: 'nowrap' }}>
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

                        {/* tags */}

                        <div className="col-md-6">
                          <div className="input-group-merge mb-1 input-group" style={{ flexWrap: 'nowrap' }}>
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
                                required: "Description required.",
                              })}
                              className="form-control"
                              id="descriptionArea"
                              rows="3"
                              placeholder="Description"
                            ></textarea>
                          </div>
                        </div>
                        {/* Author */}
                        <div className="col-md-6">
                          <div className="input-group-merge mb-1 input-group" style={{ flexWrap: 'nowrap' }}>
                            <span className="input-group-text">
                              <League />
                            </span>
                            <select
                              {...register("_author", {
                                required: "Author is required",
                              })}
                              className="form-select"
                            >
                              <option value="">Select</option>
                              {
                                authors && authors.map((item, index)=>{
                                  	return(
                                      <option
                                        key={ index } 
                                        value={ item.name }>{ item.name }</option>
                                    )
                                })
                              }
                            </select>
                          </div>
                        </div>

                        {/* image */}
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

            <h3 className="mt-4">Posts</h3>

            {loading && <div className="d-flex justify-content-center">
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>}


            {!loading && posts.length > 0 && <DateWise fetchPosts={fetchPosts} loading={loading} posts={posts} />}


            {!loading && posts.length === 0 && <div>No data found!</div>}


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
