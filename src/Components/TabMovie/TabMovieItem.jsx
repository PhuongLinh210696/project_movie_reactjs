import React from "react";
import { Tabs } from "antd";
import { useState, useEffect } from "react";
import { theaterSer } from "../../Services/theaterService";
import moment from "moment";
const TabMovieItem = ({ maHeThongRap }) => {
  const [showtime, setshowtime] = useState([]);

  useEffect(() => {
    theaterSer
      .getAllSysTheaterShowtimes(maHeThongRap)
      .then((res) => {
        console.log(res.data.content);
        setshowtime(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [maHeThongRap]);

  const renderItemTabMovie = () => {
    // lịch chiếu phẩn tử 0 ? có nghĩa là nếu phần tử đầu tiên của mảng có thì mới .lstCumRap
    return showtime[0]?.lstCumRap?.map((item, index) => {
      return {
        label: (
          <div className="text-left w-60">
            <p>{item.tenCumRap}</p>
            <p className="truncate ... ">{item.diaChi}</p>
          </div>
        ),
        key: index,
        children: (
          <div className="space-y-5">
            {" "}
            {item.danhSachPhim.map((item, index) => {
              if (item.dangChieu) {
                return (
                  <div className="flex" key={index}>
                    <div className="w-2/12">
                      <img src={item.hinhAnh} alt="" />
                    </div>
                    <div className="w-10/12">
                        <h3>{item.tenPhim}</h3>
                        <div className="flex flex-wrap">
                        {item.lstLichChieuTheoPhim.slice(0,5).map((newItem,index) => { 
                            return(
                                <p key={index} className="w-1/2 border border-black rounded-md py-2 px-4 mb-5">{moment(newItem.ngayChieuGioChieu).format("DD/MM/YYYY - h:mm:ss")}</p>
                            )
                         })}
                        </div>
                        
                    </div>
                  </div>
                );
              }
            })}
          </div>
        ),
      };
    });
  };
  return (
    <Tabs
      tabPosition="left"
      style={{ maxHeight: "400px", overflowY: "scroll" }}
      items={renderItemTabMovie()}
    />
  );
};

export default TabMovieItem;
