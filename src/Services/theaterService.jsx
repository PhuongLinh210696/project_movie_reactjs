import { https } from "./config.jsx";

export const theaterSer = {
  getAllSysTheater: () => {
    return https.get("/api/QuanLyRap/LayThongTinHeThongRap");
  },
  getAllSysTheaterShowtimes: (maHeThongRap) => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP09`
    );
  },
  getTheaterShowtimesById: (maPhim) => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    );
  },
};
