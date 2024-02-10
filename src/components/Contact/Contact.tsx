import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center z-0">
      <div
        className="w-screen absolute mt-[100px] h-[1249px] flex flex-col justify-start items-center z-0"
        style={{ background: "var(--gradient_contact)" }}
      ></div>
      <div className="flex flex-col justify-center items-center relative mt-[100px] z-10">
        <svg
          width="1200"
          height="1031"
          viewBox="0 0 1396 1031"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="1396"
            height="1031"
            rx="10"
            fill="#7F95F4"
            fillOpacity="0.4"
          />
        </svg>
        <div className="absolute z-20 w-[826px] justify-center items-center">
          <div className="flex flex-col justify-center items-left ">
            <p className="text-[70px] font-geo font-bold text-custom-blue tracking-tight">
              CONTACT US
            </p>
            <p className="text-[16px] font-geo font-normal text-custom-blue mt-10">
              Use the form to get in touch with us regarding your plans or any
              inquiries.
            </p>
            <p className="text-[16px] font-geo font-bold text-custom-blue mt-5 uppercase">
              Name
            </p>
            <input
              type="text"
              className="w-[700px] h-[60px] bg-white rounded-lg mt-2 placeholder:p-5"
              placeholder="Enter your name"
            />
            <p className="text-[16px] font-geo font-bold text-custom-blue mt-5 uppercase">
              Email
            </p>
            <input
              type="text"
              className="w-[700px] h-[60px] bg-white rounded-lg mt-2 placeholder:p-5"
              placeholder="Enter your email"
            />
            <p className="text-[16px] font-geo font-bold text-custom-blue mt-5 uppercase">
              Message
            </p>
            <textarea
              className="w-[700px] h-[200px] bg-white rounded-lg mt-2 placeholder:p-5"
              placeholder="Enter your message"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
