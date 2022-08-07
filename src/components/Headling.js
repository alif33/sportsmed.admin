import React from "react";

const Headling = ({ title }) => {
  return (
    <>
      <h1 className="text-center py-4 text-uppercase fs-1 text-white">
        {title}
      </h1>
    </>
  );
};

export default Headling;
