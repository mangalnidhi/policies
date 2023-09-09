import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FiUser } from "react-icons/fi";
import { BsTelephoneForward, BsSend } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdCancelPresentation } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../app/fonts.css";
const Form = (props) => {
  const [formInfo, setFormInfo] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const form = useRef();
  const formData = (e) => {
    e.preventDefault();
    const name = form.current.name.value;
    const email = form.current.email.value;
    const number = phoneNumber;
    setFormInfo({ name, email, number });
    console.log(formInfo);
    props.show();
  };
  return ReactDOM.createPortal(
    <div className=" flex flex-col  justify-center items-center fixed bg-black opacity-90  text-white  top-0 left-0 w-full h-[100vh] z-[1000]">
      <h2 className="mb-8">{props.title}</h2>
      <form
        data-aos="fade-down"
        action=""
        ref={form}
        onSubmit={formData}
        className="w-[90%] max-w-[600px] "
      >
        <div className=" mb-6 relative">
          <input
            type="text"
            required
            name="name"
            placeholder=""
            id="name"
            className="w-full p-3 outline-none border-2 border-white bg-transparent text-sm"
          />
          <label
            htmlFor="name"
            className=" h-full flex items-center  absolute left-0 top-0 p-3 text-white cursor-text"
          >
            <FiUser className="m-2 text-lg" />
            Your Name
          </label>
        </div>

        <div className=" mb-10 relative">
          <label
            htmlFor="phone"
            className="  h-full  flex items-center  left-0 top-0  text-white cursor-text"
          >
            <BsTelephoneForward className="m-2 text-lg" />
            Your Phone Number
          </label>
          <PhoneInput
            country={"in"}
            placeholder="Your Phone Number"
            required
            value={phoneNumber}
            onChange={(phone) => setPhoneNumber(phone)}
            className="pi"
          />
        </div>
        <div className=" mb-10 relative">
          <input
            type="email"
            required
            name="email"
            id="email"
            placeholder=" "
            className="w-full p-3 outline-none border-2 border-white bg-transparent text-sm"
          />
          <label
            htmlFor="email"
            className=" h-full absolute flex items-center  left-0 top-0 p-3 text-white cursor-text"
          >
            <AiOutlineMail className="m-2 text-lg" />
            Your Email
          </label>
        </div>
        <input
          type="submit"
          value="Send"
          className="w-full bg-transparent cursor-pointer p-2 hover:bg-green-700 duration-300 outline-none border-2 border-white"
        />
      </form>
      <div className=" absolute text-2xl  top-24 w-[600px] max-[680px]:w-[90%] flex justify-end    ">
        <MdCancelPresentation
          onClick={() => props.show()}
          className="hover:text-red-600 duration-300 cursor-pointer"
        />
      </div>
    </div>,
    document.getElementById("form")
  );
};

export default Form;
