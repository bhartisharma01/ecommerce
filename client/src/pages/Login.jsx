import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Login = () => {
    const [showPassword, setShowPassword]= useState(false);
  return (
    <>
      <section id="login">
        <div className="mx-auto container p-5">
          <div className="bg-white p-5 w-full max-w-md mx-auto rounded">
            <div className="flex justify-center">
              <img src="/src/assets/logo.jpg" alt="" className="w-[150px] h-[120px]"/>
            </div>
            <form action="" className="pt-6 flex flex-col gap-3">
              <div className="grid">
                <div className="bg-slate-100 p-2 flex">

                <input type="email" name="" id="" placeholder="Enter Email" className="w-full h-full outline-none bg-transparent"/>
                </div>
              </div>
              <div >
                <div className="bg-slate-100 p-2 flex">
                <input type={showPassword?"text":"password"} name="" id="" placeholder="Enter Password" className="w-full h-full outline-none bg-transparent " onClick={()=>setShowPassword((prev)=>!prev)}/>
                <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                </div>
                <Link to={"/forgot-password"} className="block w-fit ml-auto hover:underline hover:text-orange mt-2">Forgot password</Link>
              </div>
            
             
                <button className="bg-blue hover:bg-orange text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">Login</button>
           
             
            </form>
            <p className='my-5'>Don't have an account ? <Link to={"/sign-up"} className=' text-blue hover:text-orange hover:underline'>Sign up</Link></p>
              </div>
          </div>
      
      </section>
    </>
  );
};

export default Login;
