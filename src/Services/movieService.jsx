import { https } from "./config";

export const movieSer = {
  getAllBanner: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
  getAllMovie: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09");
  },
  getMovieById: (maPhim) => {
    return https.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },
};
