import React from 'react';

const Footer = () => {
  return (
    // <footer class="bg-white rounded-lg shadow dark:bg-gray-900">
    //   <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    //     <div class="sm:flex sm:items-center sm:justify-between">
    //       <a
    //         href="https://flowbite.com/"
    //         class="flex items-center mb-4 sm:mb-0"
    //       >
    //         <img
    //           src="https://flowbite.com/docs/images/logo.svg"
    //           class="h-8 mr-3"
    //           alt="Flowbite Logo"
    //         />
    //         <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
    //           Flowbite
    //         </span>
    //       </a>
    //       <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
    //         <li>
    //           <a href="#" class="mr-4 hover:underline md:mr-6 ">
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" class="mr-4 hover:underline md:mr-6">
    //             Privacy Policy
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" class="mr-4 hover:underline md:mr-6 ">
    //             Licensing
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" class="hover:underline">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    //     <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
    //       © 2023{' '}
    //       <a href="https://flowbite.com/" class="hover:underline">
    //         Flowbite™
    //       </a>
    //       . All Rights Reserved.
    //     </span>
    //   </div>
    // </footer>
    <footer className='text-slate-500 w-full pb-6 bg-slate-950'>
      <div className='w-full block box-border ml-auto mr-auto pl-4 pr-4 sm:pl-6 sm:pr-6'>
        <div className='w-full flex flex-wrap box-border'>
          <div className='grow-0 max-w-full flex basis-full m-0 box-border sm:grow-0 sm:w-1/3 sm:basis-1/3 xl:grow-0 xl:w-1/3 xl:basis-1/3'>
            <p className='text-base font-normal leading-6 tracking-wide m-0'>
              <h6 className='text-white pt-5 pb-2 text-xs font-medium leading-6 tracking-wide m-0'>
                Movie Cyber
              </h6>
              <div className='w-full flex flex-wrap box-border'>
                <div className='grow-0 w-2/4 basis-2/4 m-0 box-border'>
                  <a className='text-gray-400 text-xs ease-in pb-2'>FAQ</a>
                </div>
                <div className='grow-0 w-2/4 basis-2/4 m-0 box-border'>
                  <a className='text-gray-400 text-xs ease-in pb-2'>Thỏa thuận sử dụng</a>
                </div>
                <div className='grow-0 w-2/4 basis-2/4 m-0 box-border'>
                  <a className='text-gray-400 text-xs ease-in pb-2'>Brand Guidelines</a>
                </div>
                <div className='grow-0 w-2/4 basis-2/4 m-0 box-border'>
                  <a className='text-gray-400 text-xs ease-in pb-2'>Chính sách bảo mật</a>
                </div>

              </div>
            </p>
          </div>

          <div className='grow-0 w-1/3 basis-1/3 m-0 box-border'>
            <p className='text-base font-normal leading-6 tracking-wide m-0'>
              <h6 className='text-white pt-5 pb-2 text-xs font-medium leading-7 tracking-wide m-0'>ĐỐI TÁC</h6>
              <div className='w-full flex flex-wrap box-border'>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://www.cgv.vn/" className='grayscale-0 hover:grayscale'>
                    <img src='/images/cgv.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://www.bhdstart.vn/" className='grayscale-0 hover:grayscale'>
                    <img src='/images/bhd.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://www.galaxycine.vn/" className='grayscale-0 hover:grayscale'>
                    <img src='/images/galaxy.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://www.cinestar.vn/" className='grayscale-0 hover:grayscale'>
                    <img src='/images/cinestar.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="http://lottecinemavn.com/LCHS/index.aspx" className='grayscale-0 hover:grayscale'>
                    <img src='/images/lotte.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://www.megagscinemas.vn/" className='grayscale-0 hover:grayscale'>
                    <img src='/images/mega.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://www.betacinemas.vn/home.htm" className='grayscale-0 hover:grayscale'>
                    <img src='/images/beta.jpg' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="http://ddcinema.vn/" className='grayscale-0 hover:grayscale'>
                    <img src='/images/ddc.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://touchcinema.com/" className='grayscale-0 hover:grayscale'>
                    <img src='/images/touch.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://cinemaxvn.com/" className='grayscale-0 hover:grayscale'>
                    <img src='/images/cinemax.jpg' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://starlight.vn/" className='grayscale-0 hover:grayscale'>
                    <img src='/images/starlight.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://www.dcine.vn/" className='grayscale-0 hover:grayscale'>
                    <img src='/images/dc.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://zalopay.vn/" className='grayscale-0 hover:grayscale'>
                    <img src='/images/zalo.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://www.payoo.vn/" className='grayscale-0 hover:grayscale'>
                    <img src='/images/payoo.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://portal.vietcombank.com.vn/Pages/Home.aspx" className='grayscale-0 hover:grayscale'>
                    <img src='/images/vietcom.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href='https://www.agribank.com.vn/' className='grayscale-0 hover:grayscale'>
                    <img src='/images/ari.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://www.vietinbank.vn/web/home/vn/index.html" className='grayscale-0 hover:grayscale'>
                    <img src='/images/vietin.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://www.indovinabank.com.vn/" className='grayscale-0 hover:grayscale'>
                    <img src='/images/ivb.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>

                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://webv3.123go.vn/" className='grayscale-0 hover:grayscale'>
                    <img src='/images/w3.png' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
                <div className='mb-4 grow-0 w-1/4 basis-1/4 m-0'>
                  <a target='_blank' href="https://laban.vn/" className='grayscale-0 hover:grayscale'>
                    <img src='/images/laban.jpg' className='w-7 h-7 rounded-lg' />
                  </a>
                </div>
              </div>
            </p>
            <div className=''>

            </div>
          </div>
          <div className='grow-0 w-1/3 basis-1/3 m-0 box-border'>
            <div className='w-full flex flex-wrap box-border'>
              <div className='grow-0 w-2/4 basis-2/4 m-0'>
                <p className='text-base font-normal leading-6 tracking-wide m-0'>
                  <h6 className='text-base pt-5 pb-2 font-medium leading-6 tracking-wide m-0'>MOBILE APP</h6>
                  <div className='w-full flex flex-wrap box-border'>
                    <div className='grow-0 w-1/4 basis-1/4 m-0'>
                      <a target='_blank' href='https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t'>
                        <img src='/images/app.png' className='w-7 h-7 rounded-lg' />
                      </a>
                    </div>
                    <div className='grow-0 w-1/4 basis-1/4 m-0'>
                      <a target='_blank' href='https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t'>
                        <img src='/images/android.png' className='w-7 h-7 rounded-lg' />
                      </a>
                    </div>
                  </div>
                </p>
              </div>
              <div className='grow-0 w-2/4 basis-2/4 m-0 box'>
                <p className='text-base font-normal leading-6 tracking-wide m-0'>
                  <h6 className='text-base pt-5 pb-2 font-medium leading-6 tracking-wide m-0'>SOCIAL</h6>
                  <div className='w-full flex flex-wrap box-border'>
                    <div className='grow-0 w-1/4 basis-1/4 m-0'>
                      <a target='_blank' href='https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t'>
                        <img src='/images/f.png' className='w-7 h-7 rounded-lg' />
                      </a>
                    </div>
                    <div className='grow-0 w-1/4 basis-1/4 m-0'>
                      <a target='_blank' href='https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t'>
                        <img src='/images/za.png' className='w-7 h-7 rounded-lg' />
                      </a>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='text-gray-400 h-1 m-0' />

        <p className='mb-4 text-base font-normal leading-6 tracking-wide m-0'>
          <div className='w-full flex flex-wrap box-border'>
            <div className='mt-6 grow-0 max-w-full basis-full sm:w-1/4 sm:basis-1/4 xl:w-1/6 xl:basis-1/6'>
              <img src='/images/zion.jpg' className='w-24' />
            </div>
            <div className='grow-0 max-w-full basis-full sm:w-1/2 sm:basis-1/2 xl:w-4/6 xl:basis-4/6'>
              <h6 className='text-white text-xs font-medium leading-6 tracking-wide m-0 pt-5 pb-2'>
                Cyber Movie – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN CYBER
              </h6>
              <h6 className='text-xs font-medium leading-6 tracking-wide m-0'>
                Địa chỉ: BCS07, Quận 10, Tp. Hồ Chí Minh, Việt Nam.
              </h6>
              <h6 className='text-xs font-medium leading-6 tracking-wide m-0'>
                Giấy chứng nhận đăng ký kinh doanh số: 0123456789
              </h6>
              <h6 className='text-xs font-medium leading-6 tracking-wide m-0'>
                đăng ký thay đổi lần thứ 01, ngày 16 tháng 07 năm 2023 do CyberSofth Thành phố Hồ Chí Minh cấp.
              </h6>
              <h6 className='text-xs font-medium leading-6 tracking-wide m-0'>
                Số Điện Thoại (Hotline): 1900 545 436
              </h6>
            </div>
            <div className='mt-6 grow-0 max-w-full basis-full sm:w-1/4 sm:basis-1/4 xl:w-1/6 xl:basis-1/6'>
              <img src='./images/tb.png' className='w-24'/>
            </div>
          </div>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
