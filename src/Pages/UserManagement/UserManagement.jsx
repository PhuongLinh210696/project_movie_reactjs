import React, { useEffect, useState } from "react";
import { userSer } from "../../Services/userService";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../Redux/slices/userSlice";
import {} from "../../Redux/slices/userSlice.jsx";
import TableUser from "../../Components/TableUser/TableUser";
import { Button, Drawer } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import FormAddUser from "../../Components/FormAddUser/FormAddUser";
const UserManagement = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.nguoiDung);

  useEffect(() => {
    // userSer.getAllUser().then((res) => {
    //     console.log(res.data.content);
    //  })
    dispatch(getAllUser());
  }, []);
  console.log(users);
  //một hàm vừa gọi dữ liệu và gửi dữ liệu lên redux
  //redux không cho phép gọi bất đồng bộ bên trên reducer
  //redux-thunk là một middleware cho phép xử lý trước khi dispatch tới store

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button
        className="bg-green-600 text-white py-2 px-5 rounded-lg mb-5"
        onClick={showDrawer}
        icon={<PlusOutlined />}
      >
        Thêm người dùng
      </button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
        size="large"
      >
        <FormAddUser />
      </Drawer>
      <TableUser />
    </div>
  );
};

export default UserManagement;
