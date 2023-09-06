import React, { useEffect } from "react";
import { useState } from "react";
import ordersuccess from "../Images/ordersuccess.jpg";
import Swal from "sweetalert2";

function OrderPage() {
  const [show, setShow] = useState();



  useEffect(()=>{
  const test = setTimeout(() => {
    const swalWithBootstrapButtons = Swal.mixin({ 
      customClass: {
        confirmButton: "bg-[#22c55e] p-1 px-3 m-1 shadow-2xl rounded-[10px] text-md text-white border-2 border-green-400",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons.fire(
      "Thank You!",
      "You order has been placed.",
      "success"
    );
  }, 1000);


  },[])

  setTimeout(()=>{
    setShow(true);
  },3500)



  return (
    <div className="flex items-center justify-center  relative w-full top-20 h-[89vh] bg-green-900 border-2 border-black">
      {show && (
        <div className=" p-4">
          <div>
            <img
              className="h-60 ml-4  rounded-3xl w-80"
              src="https://cdn.dribbble.com/users/1197989/screenshots/5585685/delivery-boy.gif"
            />
          </div>
          <div>
            <h3 className="m-2 font-bold text-[#F6931E] text-xl">
              Your order has been successfully placed ✅
            </h3>
            <button className="w-80 my-2 ml-6 p-2 bg-[#F6931E] rounded-2xl text-green-900 font-bold text-xl">
              Thank You ❤️
            </button>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default OrderPage;
