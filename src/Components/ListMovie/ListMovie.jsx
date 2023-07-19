import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { movieSer } from "../../Services/movieService";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import {set_loading_started,set_loading_ended} from '../../Redux/slices/loadingSlice'

const ListMovie = () => {
  const [listMovie, setlistMovie] = useState([]);
  const dispatch = useDispatch();
  //Call API
  // Cách 1
  // const getAllMovie = async () => {
  //     const res = await movieSer.getAllMovie();
  //     console.log(res.data.content);
  //     setlistMovie(res.data.content);
  //   };

  //   useEffect(() => {
  //     getAllMovie();
  //   }, []);

  //Cách 2
  useEffect(() => {
    dispatch(set_loading_started());
    movieSer
      .getAllMovie()
      .then((result) => {
        console.log(result);
        setlistMovie(result.data.content);
        dispatch(set_loading_ended())
      })
      .catch((error) => {
        console.log(error);
        dispatch(set_loading_ended())
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h2 className="text-3xl font-bold">Danh sách phim</h2>
      {/* Movie item */}
      <div className="grid grid-cols-4 gap-5">
        {listMovie.map((item, index) => {
          return (
            <div key={index} className="movie_item">
              <img
                className="h-60 w-full object-cover"
                src={item.hinhAnh}
                alt=""
              />
              <div className="text my-3">
                <h3 className="font-bold text-base">
                  <span className="text-white py-1 px-2 mr-3 bg-orange-500 rounded-md">
                    C18
                  </span>
                  {""}
                  {item.tenPhim}
                </h3>
                <p className="line-clamp-2 mt-2">{item.moTa}</p>
                <NavLink className="w-full inline-block" to={`/detail/${item.maPhim}`}>
                  <Button className="w-full text-sm h-10" type="primary" danger>
                    Xem ngay
                  </Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListMovie;
