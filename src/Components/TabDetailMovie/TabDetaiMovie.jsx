import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { theaterSer } from "../../Services/theaterService";
import { useEffect } from "react";
import { useState } from "react";
import { Tabs } from "antd";
import moment from "moment";

const TabDetaiMovie = () => {
  const [theaterShowtime, setTheaterShowtime] = useState([]);
  const params = useParams();
  console.log(params.maPhim);
  useEffect(() => {
    theaterSer
      .getTheaterShowtimesById(params.maPhim)
      .then((res) => {
        console.log(res.data.content.heThongRapChieu);
        setTheaterShowtime(res.data.content.heThongRapChieu);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.maPhim]);

  const renderItemTab = () => {
    return theaterShowtime.map((item, index) => {
      return {
        label: <img src={item.logo} alt="" className="w-10 h-10" />,
        key: index,
        children: (
          <div className="space-y-5">
            {" "}
            {item.cumRapChieu.map((item, index) => {
              return (
                <div className="flex" key={index}>
                  <div className="w-2/12">
                    <img src={item.hinhAnh} alt="" />
                  </div>
                  <div className="w-10/12">
                    <h3 className="px-4 text-red-500 font-bold">{item.tenCumRap}</h3>
                    <div className="flex flex-wrap">
                      {item.lichChieuPhim.map((newItem, index) => {
                        return (
                          <div
                            key={index}
                            className="w-1/2 py-2 px-4 mb-5"
                          >
                            <p>
                              Ngày chiếu: <span>{moment(newItem.ngayChieuGioChieu).format(
                                "DD/MM/YYYY - h:mm:ss"
                              )}</span>
                              
                            </p>
                            <p>Thời lượng: {newItem.thoiLuong} phút</p>
                            <p>Giá vé: {newItem.giaVe} VND</p>
                            <NavLink to={`/booking/${newItem.maLichChieu}`}>Booking here</NavLink>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ),
      };
    });
  };
  return (
    <div className="my-5">
      {/* {theaterShowtime.logo} */}
      <Tabs tabPosition="left" items={renderItemTab()} />
    </div>
  );
};

export default TabDetaiMovie;
