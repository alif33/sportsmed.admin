import { useState } from "react";
import { toast } from "react-hot-toast";
import { adminAuthStatus } from "../../../../__lib__/helpers/Cookiehandler";
import { deleteData, getData } from "../../../../__lib__/helpers/HttpService";
import { useRouter } from "next/router";
import dateFormat from "dateformat";

export default function Card({ index, item, fetchPosts }) {
  const [show, setShow] = useState(false);
  const router = useRouter();


  const handleRemove = async (id) => {
    const { token } = await adminAuthStatus();

    deleteData(`/admin/post/${id}`, token).then((res) => {
      if (res?.success) {
        fetchPosts();
        toast.success(res.message);
      } else {
        toast.error(res.error);
      }
    });
  };

  return (
    <div key={index} className="c-white p-1 mb-1">
      <div className="row">
        <div className="col-md-11">
          <h4>
            {++index}. {item.title}
          </h4>
        </div>
        <div className="col-md-1">
          <i
            onClick={() => setShow(!show)}
            className={`fas fa-angle-${show ? "up" : "down"}`}
          ></i>
        </div>
      </div>
      {show && (
        <div className="row">
          <div className="col-md-11 p-2 gap-3 d-flex">
            <div className="w-25">
              <img
                src={item.image}
                alt={item.name + "not found"}
                className="img-fluid"
              />
            </div>
            <div className="w-75">
              <h5>League: {item.league}</h5>
              <h5 className="text-capitalize">
                Players Name: {item?.playersName?.map((name, i, arr) => `${name}${arr.length
                  === i + 1 ? ' ': ','} `)}
              </h5>
           
               <h5> Uploaded Date: {dateFormat(item.createdAt, "mmm, dd, yyyy")}</h5>
                {item?.tags?.map((tag, i, arr) => (
                  <span key={i} className="">
                    {tag}{arr.length === i + 1 ? ' ' : ', '}
                  </span>
                ))}
            <br/>
            <br/>
            <h5>Description: </h5>
              <p>{item.description}</p>
              <div className="d-flex justify-content-end mt-2">
                {/* edit player */}
                <a
                  className="text-primary"
                  onClick={() => router.push(`/posts/edit/${item._id}`)}
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
                /{/* delte player */}
                <a
                  className="text-danger"
                  onClick={() => handleRemove(item._id)}
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
