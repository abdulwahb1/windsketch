import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center z-0 w-full mb-16 mt-10">
      <div className="flex flex-col justify-center items-center relative z-10">
        <div
          className="flex flex-col z-20 w-full justify-center items-center px-[50px] xl:px-[200px] lg:py-[100px] py-[50px] rounded-md"
          style={{
            background: "rgba(127, 149, 244, 0.40)",
          }}
        >
          <div className="flex flex-col justify-center items-left ">
            <p className="lg:text-[70px] text-[35px] font-geo font-bold text-custom-blue tracking-tight">
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
              className="w-full sm:w-[700px] h-[60px] bg-white rounded-lg mt-2 placeholder:p-5"
              placeholder="Enter your name"
            />
            <p className="text-[16px] font-geo font-bold text-custom-blue mt-5 uppercase">
              Email
            </p>
            <input
              type="text"
              className="w-full sm:w-[700px] h-[60px] bg-white rounded-lg mt-2 placeholder:p-5"
              placeholder="Enter your email"
            />
            <p className="text-[16px] font-geo font-bold text-custom-blue mt-5 uppercase">
              Message
            </p>
            <textarea
              className="w-full sm:w-[700px] h-[200px] bg-white rounded-lg mt-2 placeholder:p-5"
              placeholder="Enter your message"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
