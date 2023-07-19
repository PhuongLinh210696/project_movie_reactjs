import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Input, message } from "antd";
import { userSer } from "../../Services/userService";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
    //dùng để thông báo
    const [messageApi, contextHolder] = message.useMessage();
    //dùng để chuyển hướng trang
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      hoTen: "",
    },
    onSubmit: (values) => {
      console.log(values);
      //dispatch(setDataName(values));
      //xử lý gửi dữ liệu lên server
      userSer
        .register(values)
        .then((res) => {
          console.log(res);
          //Nếu login thành công sẽ lưu thông tin xuống local và chuyển hướng người dùng về trang chủ
        //   luuLocal("user", res.data.content);
        messageApi.success("Đăng ký thành công!!!");
        //   //Khi gọi dữ liệu thành công sẽ lấy dữ liệu gửi lên redux
        //   console.log(typeof res.data.content);
        //   dispatch(setDataName(res.data.content));

          setTimeout(() => {
            navigate("/login");
          }, [1000]);
        })
        .catch((err) => {
          console.log(err.response.data.content);
          messageApi.error(err.response.data.content);
        });
    },
    validationSchema: yup.object({
      taiKhoan: yup.string().required("Nhớ chú ý nhập dữ liệu nhé"),
      matKhau: yup
        .string()
        .required("Nhớ nhập mật khẩu")
        .min(3, "Mật khẩu ít nhất 3 ký tự"),
      email: yup
        .string()
        .required("Nhớ chú ý nhập dữ liệu nhé")
        .email("Vui lòng nhập đúng định dạng email!!!"),
      soDt: yup
        .string()
        .required("Vui lòng nhập đúng số điện thoại!!!")
        .matches(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
          "Vui lòng nhập đúng số điện thoại!!!"
        ),
      maNhom: yup.string().required("Vui lòng nhập mã nhóm!!!"),
      hoTen: yup.string().required("Họ tên không được để trống!!!"),
    }),
  });
  const { handleSubmit, handleChange, handleBlur } = formik;
  return (
    <div>
        {contextHolder}
      <form onSubmit={handleSubmit}>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tài khoản
            </label>
            <Input
              status={formik.errors.taiKhoan && formik.touched ? "error" : ""}
              name="taiKhoan"
              placeholder="Nhập tài khoản"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formik.values.taiKhoan}
            />
            {formik.errors.taiKhoan && formik.touched ? (
              <span className="text-red-500">{formik.errors.taiKhoan}</span>
            ) : (
              ""
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mật khẩu
            </label>
            <Input
              status={formik.errors.matKhau && formik.touched ? "error" : ""}
              type="password"
              name="matKhau"
              placeholder="Nhập mật khẩu"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formik.values.matKhau}
            />
            {formik.errors.matKhau && formik.touched ? (
              <span className="text-red-500">{formik.errors.matKhau}</span>
            ) : (
              ""
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <Input
              status={formik.errors.email && formik.touched ? "error" : ""}
              type="email"
              name="email"
              placeholder="Nhập email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched ? (
              <span className="text-red-500">{formik.errors.email}</span>
            ) : (
              ""
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mã nhóm
            </label>
            <Input
              status={formik.errors.maNhom && formik.touched ? "error" : ""}
              type="text"
              name="maNhom"
              placeholder="Nhập mã nhóm"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formik.values.maNhom}
            />
            {formik.errors.maNhom && formik.touched ? (
              <span className="text-red-500">{formik.errors.maNhom}</span>
            ) : (
              ""
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Số điện thoại
            </label>
            <Input
              status={formik.errors.soDt && formik.touched ? "error" : ""}
              type="text"
              name="soDt"
              placeholder="Nhập số điện thoại"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formik.values.soDt}
            />
            {formik.errors.soDt && formik.touched ? (
              <span className="text-red-500">{formik.errors.soDt}</span>
            ) : (
              ""
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Họ tên
            </label>
            <Input
              status={formik.errors.hoTen && formik.touched ? "error" : ""}
              type="text"
              name="hoTen"
              placeholder="Nhập họ tên"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formik.values.hoTen}
            />
            {formik.errors.hoTen && formik.touched ? (
              <span className="text-red-500">{formik.errors.hoTen}</span>
            ) : (
              ""
            )}
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default FormRegister;
