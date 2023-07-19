import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Input,message } from "antd";
import { userSer } from "../../Services/userService";
import { luuLocal } from "../../Utils/localStore"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDataName } from "../../Redux/slices/userSlice";


const FormLogin = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(setDataName(values))
      //xử lý gửi dữ liệu lên server
      userSer
        .login(values)
        .then((res) => {
          console.log(res);
          //Nếu login thành công sẽ lưu thông tin xuống local và chuyển hướng người dùng về trang chủ
          luuLocal("user",res.data.content)
          messageApi.success("Đăng nhập thành công!!!");
          //Khi gọi dữ liệu thành công sẽ lấy dữ liệu gửi lên redux
          console.log(typeof res.data.content);  
          dispatch(setDataName(res.data.content))
          
          setTimeout(() => { 
            navigate('/');
           },[1000]);
          
        })
        .catch((err) => {
          //console.log(err.response.data.content);
          messageApi.error(err.response.data.content);
        });
    },
    validationSchema: yup.object({
      taiKhoan: yup.string().required("Nhớ chú ý nhập dữ liệu nhé"),
      matKhau: yup
        .string()
        .required("Nhớ nhập mật khẩu")
        .min(3, "Mật khẩu ít nhất 3 ký tự"),
    }),
  });
  const { handleSubmit, handleChange, handleBlur } = formik;
  return (
    
    <div>
        {contextHolder}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tài khoản
          </label>
          {/* <input
            type="text"
            name="taiKhoan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nhập tài khoản"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formik.values.taiKhoan}
          /> */}
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
          {/* <input
            type="password"
            name="matKhau"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nhập mật khẩu"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formik.values.matKhau}
          /> */}
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

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
