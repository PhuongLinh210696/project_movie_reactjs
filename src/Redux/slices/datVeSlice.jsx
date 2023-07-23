import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    thongTinPhim: {},
    danhSachGheDangDat: [],
};

export const datVeSlice = createSlice({
    name: "datVe",
    initialState,
    reducers: {
        setThongTinPhim: (state, action) => {
            state.thongTinPhim = action.payload;
        },
        setDanhSachGhe: (state, action) => {
            state.danhSachGheDangDat = action.payload;
        },
        datVe: (state, action) => {
            if(!action.gheDuocChon){
                return state;
            }
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];
            const { maGhe, giaVe } = action.payload;
            let index = danhSachGheCapNhat.findIndex(ghe => ghe.maGhe === maGhe);
            if (index !== -1) {
                danhSachGheCapNhat.splice(index,1);
            } else {
                danhSachGheCapNhat.push(action.payload);
            }
            state.danhSachGheDangDat = danhSachGheCapNhat;
        },
    },
})

export const { setThongTinPhim, setDanhSachGhe, datVe } = datVeSlice.actions;

export default datVeSlice.reducer;