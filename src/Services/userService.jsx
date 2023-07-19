import { https } from "./config";

export const userSer = {
  login: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
  register: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", data);
  },
  getAllUser: () => {
    return https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09");
  },
  deleteUser: (taiKhoan) => {
    return https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  addUser: (data) => {
    return https.post("/api/QuanLyNguoiDung/ThemNguoiDung", data);
  },
};
