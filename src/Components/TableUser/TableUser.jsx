import React from "react";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { userSer } from "../../Services/userService";
import { getAllUser } from "../../Redux/slices/userSlice";
import { Button, message, Popconfirm } from "antd";
//id, hoTen, email, sdt, maLoaiNguoiDung, Action
const TableUser = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.nguoiDung);
  const confirm = (id) => {
    console.log(id);
    userSer
      .deleteUser(id)
      .then((res) => {
        message.success("Xoá thành công!!!");
        dispatch(getAllUser());
      })
      .catch((err) => {
        console.log(err);
        message.error("Có vấn đề xảy ra!!!");
      });
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      //custom lai cot hien thi
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDT",
      key: "soDT",
    },
    {
      title: "Loại Người Dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (text, record, index) => {
        //text chứa goá trị
        console.log(text);
        //record chứa các phần tử trong mảng
        console.log(record);
        //index là vị trí của phần tử
        console.log(index);
        return (
          <Tag color={text == "QuanTri" ? "magenta" : "cyan"}>
            {text == "QuanTri" ? "Quản trị" : "Khách hàng"}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => { 
              confirm(record.taiKhoan)
             }}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <button className="py-2 px-5 bg-red-500 text-white rounded-lg hover:bg-red-700 duration-500">
              Xoá
            </button>
          </Popconfirm>
          <button className="py-2 px-5 bg-yellow-500 text-white rounded-lg hover:bg-yellow-700 duration-500">
            Sửa
          </button>
        </Space>
      ),
    },
  ];
  let newUser = users.map((item, index) => {
    return {
      ...item,
      id: index + 1,
    };
  });
  return <Table columns={columns} dataSource={users.length > 0 && newUser} />;
};

export default TableUser;
