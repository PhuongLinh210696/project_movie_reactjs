import React from 'react'
import Lottie from "react-lottie";
import FormLoginAdmin from '../../Components/FormLoginAdmin/FormLoginAdmin'
import * as login from "../../Assets/Animation/login.json";
const LoginAdmin = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: login,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <div className='min-h-screen flex items-center'>
        <div className='w-1/2'>
        <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className='w-1/2'>
            <FormLoginAdmin/>
        </div>
    </div>
  )
}

export default LoginAdmin