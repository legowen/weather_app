import React from "react";
// React-Redux
import { useSelector } from "react-redux";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Footer = () => {
  const loading = useSelector((state) => state.loading.loading);

  if (loading) {
    return (
      <div className="footer">
        <div className="Wrapper">
          <Skeleton width={"200px"} height={"20px"} baseColor="#222" highlightColor="#fff" />
          <Skeleton width={"280px"} height={"20px"} baseColor="#222" highlightColor="#fff" />
        </div>
      </div>
    );
  }

  return (
    <div className="footer">
      <div className="Wrapper">
        It uses the Meteorological Administration API and is not a website designed for commercial purposes.
      </div>
    </div>
  );
};

export default Footer;