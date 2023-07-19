import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userSer } from '../../Services/userService';
import { getData } from '../../Utils/localStore';

//nơi tạo các các creatAsyncThunk để xử lý các bất đồng bộ trước khi gửi dữ liệu lên store bằng redux-thunk
//bên trong creatAsyncThunk sẽ có 2 tham số, 1 là type của hàm, 2 là hàm cần xử lý bất đồng bộ
export const getAllUser = createAsyncThunk('nguoiDung/getAllUser',
async () => { 
    const res = await userSer.getAllUser();
    //return về giá trị muốn store lưu trữ
    return res.data.content
 })

//lần đầu tiên khi vào trang web store sẽ được tạo
const initialState = {
    hoTen: getData('user'),
    //luu trữ các người dùng call từ api 
    users: [],
  }
  
  export const userSlice = createSlice({
    name: 'nguoiDung',
    initialState,
    reducers:{
        //ở đây tạo 1 phương thức giúp xử lý bên trên store redux
        setDataName : (state,action) =>{
            console.log("abc")
            //Check xem có dữ liệu hay không, nếu không có set dữ liệu cho nó
            if(state.hoTen == null){
                state.hoTen = action.payload;
            }
        }
    },
    // extraReducers giúp tách biệt các logic bất đồng bộ ra khỏi reducer vì khi xử lí bất đồng bộ có nhiều trường hợp xả ra 
    extraReducers: (builder) => { 
        //khi xử lí thì bên trong hàm sẽ có 3 phương thức tương ứng với các trường hợp chạy thành công, đang chạy, thất bại
        //pending là đang chạy, reject là thất bại, fullfilled là thành công
        builder.addCase(getAllUser.fulfilled, (state,action) => { 
            //thuộc tính payload sẽ chứa các giá trị được trả về từ hàm chạy creatAsyncThunk
            console.log(state);
            console.log(action);
            state.users = action.payload;
         });
         //reject để chạy khi mà chạy bất đồng bộ có lỗi, sẽ vào casr này xử lý
         builder.addCase(getAllUser.rejected, (state,action) => { 
            state.users =[{
                hoTen: "Khai",
                maLoaiNguoiDung: "QuanTri",
            }];
          })
     }
  })

  export const { setDataName} = userSlice.actions;
  export default userSlice.reducer;