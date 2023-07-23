import {configureStore} from '@reduxjs/toolkit'

import  loadingSlice  from './slices/loadingSlice';
import userSlice from './slices/userSlice';
import datVeSlice from './slices/datVeSlice';

export const store = configureStore({
    reducer:{
        nguoiDung:userSlice,
        loading:loadingSlice,
        datVe: datVeSlice,
    },
});