import React from "react";
// React-Redux
import { useSelector } from "react-redux";
// Data
import { hours, minutes, amPm } from "../../../data/time";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Title = () => {
  const loading = useSelector((state) => state.loading.loading);

  if (loading) {
    return (
      <div className="title">
        <Skeleton width={"280px"} height={"40px"} baseColor="#222" highlightColor="#fff" />
        <Skeleton width={"150px"} height={"40px"} baseColor="#222" highlightColor="#fff" />
      </div>
    );
  }

  return (
    <div className="title">
      <h1>Weather Dashboard</h1>
      <h2>
        {hours} : {minutes} {amPm}
      </h2>
    </div>
  );
};

export default Title;