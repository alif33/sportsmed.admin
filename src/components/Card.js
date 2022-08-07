import { useRouter } from "next/router";
import React from "react";

const Card = ({ item }) => {
  const {_id, lastName, firstName, image, playerTeam, league, description, posts} = item
  const router = useRouter();
  const gotofullPage = () => {

    router.push({
      pathname: `nfl/${item.lastName}`,
      query: { _id, image, lastName, firstName, playerTeam, league, description },
    });
  };
  return (
    <>
      <div className="position-relative col-md-4  col-11 mb-5 overflow-hidden card p-0 border-0">
        <img src={item.image} className="img-fluid " alt="not found" />
        <a
          onClick={() => {
            gotofullPage();
          }}
        >
          <button className="position-absolute text-center px-2 py-2  border-0  hoverBtn">
            {`${item.lastName} ,${item.firstName} `}
          </button>
        </a>
      </div>
    </>
  );
};

export default Card;
