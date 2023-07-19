import React from "react";
import { Carousel } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { https } from "../../Services/config";
import { movieSer } from "../../Services/movieService";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HomeBanner = () => {
  const [banner, setBanner] = useState([]);
  //Call API
  const getAllBanner = async () => {
    const res = await movieSer.getAllBanner();
    console.log(res.data.content);
    setBanner(res.data.content);
  };

  useEffect(() => {
    getAllBanner();
  }, []);

  return (
    <Carousel>
      {banner.map((banner, index) => {
        return (
          <div key={index} className="h-80vh">
            <img className="w-full" src={banner.hinhAnh} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomeBanner;
