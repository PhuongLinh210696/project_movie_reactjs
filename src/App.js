import { BrowserRouter,Routes,Route } from "react-router-dom";
import DetailMovie from "./Components/DetailMovie/DetailMovie";
import MovieBooking from "./Pages/MovieBooking/MovieBooking";
import HomePage from "./Pages/HomePage/HomePage";
import Loading from "./Pages/Loading/Loading";
import Login from "./Pages/Login/Login";
import LoginAdmin from "./Pages/LoginAdmin/LoginAdmin";
import Page404 from "./Pages/Page404/Page404";
import Register from "./Pages/Register/Register";
import UserManagement from "./Pages/UserManagement/UserManagement";
import AdminTemplate from "./Templates/AdminTemplate";
import UserTemplate from "./Templates/UserTemplate";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate/>}>
          {/* <Route  path="/home" element={<HomePage/>}/> */}
          <Route index element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/detail">
            <Route path=":maPhim" element={<DetailMovie/>}/>
          </Route>
          <Route path='/booking'>
            <Route path=':maLichChieu' element={<MovieBooking />} />
          </Route>
          
        </Route>
        <Route path="/admin" element={<AdminTemplate/>}>
          <Route path="user" element={<UserManagement/>}/>
        </Route>
        <Route path="/admin-login" element={<LoginAdmin/>}/>
        <Route path='*' element={<Page404/>}/>
        {/* <Route path='loading' element={<Loading/>}/> */}
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
