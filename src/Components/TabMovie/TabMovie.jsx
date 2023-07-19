import React from "react";
import { Radio, Space, Tabs } from "antd";
import { theaterSer } from "../../Services/theaterService";
import { useState } from "react";
import { useEffect } from "react";
import TabMovieItem from "./TabMovieItem";
const TabMovie = () => {
  const [sysTheater, setsysTheater] = useState([]);
  useEffect(() => {
    theaterSer
      .getAllSysTheater()
      .then((res) => {
        console.log(res);
        setsysTheater(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderItemTab = () => {
    return sysTheater.map((item, index) => {
      return {
        label: <img src={item.logo} alt="" className="w-10 h-10" />,
        key: index ,
        children: <TabMovieItem maHeThongRap={item.maHeThongRap}/>,
      };
    });
  };
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <Tabs
        tabPosition="left"
        items={renderItemTab()}
      />
    </div>
  );
};

export default TabMovie;
