import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import style from './Booking.module.css';
import style2 from './Booking.css';
import { CloseOutlined, UserOutlined, CheckOutlined } from '@ant-design/icons';
import { datVeServ } from '../../Services/datVeService';
import { datVeSlice } from '../../Redux/slices/datVeSlice';

const Booking = (props) => {
    const { hoTen } = useSelector(state => state.nguoiDung);
    const { danhSachGheDangDat } = useSelector(state => state.datVe);
    const [isBookingSuccess, setIsBookingSuccess] = useState(false);
    const navigate = useNavigate();
    const [showNotification, setShowNotification] = useState(false);
    const Notification = ({ message }) => {
        return (
          <div className="notification-container">
            <div className="notification-content">
              {message}
            </div>
          </div>
        );
      };
    useEffect(() => {
        if (!hoTen?.taiKhoan) {
            setShowNotification(true);
            const notificationTimeout = setTimeout(() => {
                setShowNotification(false);
                navigate('/login');
            }, 1500);
            return () => clearTimeout(notificationTimeout);
        }
    }, [hoTen, navigate]);

    const [selectedGhe, setSelectedGhe] = useState([]);
    const [movie, setMovie] = useState({});
    const [ghe, setGhe] = useState([]);
    const params = useParams();
    const dispatch = useDispatch();

    const getSelectedSeats = () => {
        return selectedGhe.map((selectedSeat) => selectedSeat.stt);
    };
    const getTotalPrice = () => {
        return selectedGhe.reduce((totalPrice, seat) => totalPrice + seat.giaVe, 0).toLocaleString();
    };
    const updateSelectedSeatsAfterBooking = () => {
        setSelectedGhe([]);
        dispatch(datVeSlice.actions.setDanhSachGhe([]));
    };

    const handleBooking = () => {

        const thongTinDatVe = {
            maLichChieu: params.maLichChieu,
            danhSachVe: danhSachGheDangDat,
        };
        datVeServ
            .postDatVe(thongTinDatVe)
            .then((res) => {
                console.log("Booking successful!");
                setIsBookingSuccess(true);
                updateSelectedSeatsAfterBooking();
                window.location.reload();
            })
            .catch((error) => {
                console.error("Booking failed:", error);
            });
    };



    console.log(selectedGhe);
    useEffect(() => {
        datVeServ
            .getPhongVe(params.maLichChieu)
            .then((res) => {
                // console.log(res.data.content.thongTinPhim);
                setMovie(res.data.content.thongTinPhim);

                // console.log(res.data.content.danhSachGhe);
                setGhe(res.data.content.danhSachGhe);
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(params.maLichChieu);
    }, [params.maLichChieu]);
    useEffect(() => {
        dispatch(datVeSlice.actions.setDanhSachGhe(selectedGhe));
    }, [selectedGhe, dispatch]);

    console.log(danhSachGheDangDat);
    const rederSeats = () => {
        return ghe.map((gheItem, index) => {
            let isSelected = selectedGhe.some((selectedSeat) => selectedSeat.maGhe === gheItem.maGhe);
            let classGheVip = gheItem.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = gheItem.daDat === true ? 'gheDaDat' : '';
            let classGheDangDat = '';
            let indexGheDD = selectedGhe.findIndex(gheDD => gheDD.maGhe === gheItem.maGhe);
            let classGheDaDuocDat = '';
            if (hoTen?.taiKhoan === ghe.taiKhoanNguoiDat) {
                classGheDaDuocDat = 'gheDaDuocDat';

            }

            if (indexGheDD != -1) {
                classGheDaDat = 'gheDangDat';
            }

            return <Fragment key={index}>
                <button
                    onClick={() => {

                        const index = selectedGhe.findIndex(
                            (selectedSeat) => selectedSeat.maGhe === gheItem.maGhe
                        );
                        if (index !== -1) {
                            setSelectedGhe((prevSelected) => [
                                ...prevSelected.slice(0, index),
                                // { ...prevSelected[index], daDat: false },
                                ...prevSelected.slice(index + 1),
                            ]);
                            dispatch(datVeSlice.actions.setDanhSachGhe(selectedGhe));
                        } else {
                            // setSelectedGhe((prevSelected) => [...prevSelected, gheItem]);
                            setSelectedGhe((prevSelected) => [...prevSelected, { ...gheItem, daDat: true, taiKhoanNguoiDat: hoTen.taiKhoan }]);
                            dispatch(datVeSlice.actions.setDanhSachGhe(selectedGhe));
                        }
                    }}
                    disabled={gheItem.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} text-center`} key={index}>
                    {gheItem.daDat ? classGheDaDuocDat != '' ? <UserOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : gheItem.stt}
                </button>

                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
        })
    }

    return (
        <div className='min-h-screen mt-5'>
            {showNotification && <Notification message="Bạn cần đăng nhập để tiếp tục đặt vé." />}
            <div className='grid grid-cols-12'>
                <div className='col-span-9'>
                    <div className='flex flex-col items-center mt-5'>

                        <div className='bg-black' style={{ width: "80%", height: 15 }}>
                        </div>
                        <div className={`${style['trapezoid']} text-center`}>
                            <h3 className='mt-2 text-black'>Màn hình</h3>
                        </div>
                        <div>
                            {rederSeats()}
                        </div>
                    </div>

                    <div className='mt-5 flex justify-center'>
                        <table className='divide-y divide-gray-200 w-3/4'>
                            <thead className='bg-gray-50 p-5'>
                                <tr>
                                    <th>Ghế chưa đặt</th>
                                    <th>Ghế đang đặt</th>
                                    <th>Ghế VIP</th>
                                    <th>Ghế đã đặt</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-gray-200'>
                                <tr style={{ textAlign: 'center' }}>
                                    <td><button className='ghe text-center'><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                                    <td><button className='ghe gheDangDat text-center'><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                                    <td><button className='ghe gheDaDat text-center'><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                                    <td><button className='ghe gheDaDuocDat text-center'><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>


                <div className='col-span-3'>
                    <h3 className='text-green-400 text-center text-2xl'>{getTotalPrice()}đ</h3>
                    <hr />
                    <h3 className='text-xl mt-2'>{movie?.tenPhim}</h3>
                    <p>Địa điểm: {movie?.tenCumRap}</p>
                    <p>Ngày chiếu: {movie?.ngayChieu} - {movie?.gioChieu} {movie?.tenRap}</p>
                    <hr />
                    <div className='flex flex-row my-5'>
                        <div className='w-4/5'>
                            <span className='text-red-400 text-lg'>Ghế</span>

                            {getSelectedSeats().map((seatNumber, index) => (
                                <span key={index} className='text-green-500 text-xl'> {seatNumber}</span>
                            ))}

                        </div>
                        <div className='text-right col-span-1'>
                            <span className='text-green-400 text-lg'>
                                {/* {getTotalPrice()} */}
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className='my-5'>
                        <i>Email</i> <br />
                        {hoTen?.email}
                    </div>
                    <div className='my-5'>
                        <i>Số điện thoại</i> <br />
                        {hoTen?.soDT}
                    </div>
                    <hr />
                    <div style={{ marginBottom: 0 }}>
                        <div onClick={handleBooking}
                            className='bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer'>
                            ĐẶT VÉ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking