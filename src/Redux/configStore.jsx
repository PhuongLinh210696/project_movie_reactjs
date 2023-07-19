import {configureStore} from '@reduxjs/toolkit'

import  loadingSlice  from './slices/loadingSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
    reducer:{
        nguoiDung:userSlice,
        loading:loadingSlice
    },
});