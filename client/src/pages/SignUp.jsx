import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import profileIcon from '/src/assets/user.png';
import imageTobase64 from "../helpers/imageTobase64.js";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic:""
  });
  
  const { name, email, password, confirmPassword, profilePic } = userData;

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: [e.target.value] });
  };

  const handleUploadPic = async (e) =>{
    const file = e.target.files[0];
    const profileImg = await imageTobase64(file);
    setUserData((prev)=>{
        return{
        ...prev,
        profilePic:profileImg
        }

    })
    console.log("files", profileImg)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <>
      <section id="login">
        <div className="mx-auto container p-5">
          <div className="bg-white p-5 w-full max-w-md mx-auto rounded">
          <div className='w-28 h-28 mx-auto relative overflow-hidden rounded-full'>
            <div className="flex justify-center">
              <img
                src={profilePic || profileIcon}
                alt=""
                name="profilePic"
              />
             </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center relative bottom-10 w-full">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
           </div>
            <form className="pt-6 flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="grid">
                <div className="bg-slate-100 p-2 flex">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full h-full outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="grid">
                <div className="bg-slate-100 p-2 flex">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full h-full outline-none bg-transparent"
                  />
                </div>
              </div>
              <div>
                <div className="bg-slate-100 p-2 flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="w-full h-full outline-none bg-transparent "
                  />
                  <div
                    className="cursor-pointer text-xl"
                    onClick={() => setShowPassword((preve) => !preve)}
                  >
                    <span>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-slate-100 p-2 flex">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    placeholder="Enter confirm password"
                    className="w-full h-full outline-none bg-transparent "
                  />
                  <div
                    className="cursor-pointer text-xl"
                    onClick={() => setConfirmShowPassword((preve) => !preve)}
                  >
                    <span>
                      {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                </div>
              </div>

              <button className="bg-blue hover:bg-orange text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
                Sign Up
              </button>
            </form>
            <p className="my-5">
              Already have an account ?{" "}
              <Link
                to={"/login"}
                className=" text-blue hover:text-orange hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
