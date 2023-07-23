import { https } from './config';

export const datVeServ = {
  getPhongVe: (maLichChieu) => {
    return https.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
  },

  postDatVe: (thongTinDatVe) => {
    return https.post('/api/QuanLyDatVe/DatVe', thongTinDatVe);
  }
};
