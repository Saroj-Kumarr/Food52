import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import boy from "../Images/dboy1.jpg";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";
import leaf from "../Images/leaf2.png";

function SignUp() {
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const auth = getAuth();

  function handleInput(event) {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  }

  function handleSubmit(e) {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => {
        alert(err.message);
      });
    e.preventDefault();
  }

  return (
    <div className="flex bg-green-900 h-[100vh] text-center border-2 border-black justify-center items-center">
      <div className="flex border-4 p-8 rounded-[25px] shadox-xl hover:shadow-2xl bg-white border-none duration-500 z-10">
        <div class="w-96 overflow-y-hidden	">
          <img
            className="absolute z-20 w-[330px] left-[290px] top-[310px] -rotate-[470deg]"
            src={leaf}
            alt="leaf"
          />
          <img src={boy} alt="delivery-boy" className="relative" />
        </div>

        <div className="">
          <form>
            <h1 className="font-bold mr-20 text-xl">
              Sign <span className="text-green-900">Up</span>
            </h1>

            <FaUserCircle className="text-green-900 absolute  text-xl left-[810px] top-[286px] z-50" />

            <input
              className="block text-green-900 border-b-2 border-green-900 focus:outline-none text-md text-green-900  p-2 m-1"
              type="text"
              id="username"
              name="username"
              required
              placeholder="username"
            />
            <MdEmail className="left-[810px] top-[333px] text-green-900 absolute top-7  text-xl" />

            <input
              className="block border-b-2 text-green-900 border-green-900 focus:outline-none text-md align-middle p-2 m-1"
              type="text"
              id="email"
              name="email"
              required
              placeholder="email"
              onChange={(event) => {
                handleInput(event);
              }}
            />
            <BiSolidLock className="left-[810px] top-[374px] text-green-900 absolute top-7 text-2xl" />
            <input
              className="block border-b-2 text-green-900 border-green-900 focus:outline-none text-md p-2 m-1"
              type="password"
              id="password"
              name="password"
              required
              placeholder="password"
              onChange={(event) => {
                handleInput(event);
              }}
            />

            <button
              className=" text-white relative w-48 -left-6 font-bold mt-2 bg-green-900 p-1 rounded-2xl shadow-2xl "
              type="submit"
              onClick={handleSubmit}
            >
              Sign up
            </button>

            <div className="m-3 relative -left-3">
              <span className="font-bold">Already have an account ? </span>
              <span className="signup">
                <Link to="/login" className="font-bold">
                  Sign <span className="text-green-900">In</span>
                </Link>
              </span>
            </div>
          </form>
          <img
            className="absolute z-20 w-[350px] left-[965px]  top-[103px] rotate-[65deg]"
            src={leaf}
            alt="leaf"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;


