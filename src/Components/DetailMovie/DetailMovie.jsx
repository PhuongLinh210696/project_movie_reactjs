import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { movieSer } from "../../Services/movieService";
import { theaterSer } from "../../Services/theaterService";
import { Button, Rate  } from 'antd';
import moment from "moment";
import TabDetaiMovie from "../TabDetailMovie/TabDetaiMovie";

const DetailMovie = () => {
  const [movie, setMovie] = useState({});
  const [theaterShowtime, setTheaterShowtime] = useState({});
  const params = useParams();
  console.log(params.maPhim);
  useEffect(() => {
    movieSer
      .getMovieById(params.maPhim)
      .then((res) => {
        //console.log(res.data.content);
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });

    theaterSer
      .getTheaterShowtimesById(params.maPhim)
      .then((res) => {
        //console.log(res.data.content);
        setTheaterShowtime(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.maPhim]);

  
  return (
    <div className="container mx-auto">
      <div class="flex ...">
        <div class="w-1/3 ...">
          <img src={movie.hinhAnh} alt="" />
        </div>
        <div class="w-2/3 ...">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.tenPhim}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {movie.moTa}
            </p>
            <div className="flex flex-wrap">
              <p className="w-1/4">Ngày khởi chiếu</p>
              <p className="w-3/4">
                {moment(movie.ngayKhoiChieu).format("DD/MM/YYYY - h:mm:ss")}
              </p>
            </div>
            <div className="my-5">
                <Rate defaultValue={5} />
            </div>
            <div className="my-5">
                <Button type="primary" danger>Mua vé</Button>
            </div>
          </div>
        </div>
      </div>
      <TabDetaiMovie/>
    </div>
  );
};

export default DetailMovie;
