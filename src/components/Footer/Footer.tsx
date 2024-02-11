import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center">
      <div className="w-screen h-full flex flex-col justify-center items-center bg-white py-20">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white">
            <div className="mx-auto">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                <div>
                  <h2 className="font-geo text-[16px] font-bold text-custom-blue capitalize">
                    Contact
                  </h2>
                  <a
                    href="#"
                    className="hover:underline font-geo text-custom-blue font-medium"
                  >
                    Tell Us Everything
                  </a>
                  <p className="font-geo text-custom-blue mt-2 font-bold underline">
                    Do you have any question? Feel free to reach out.
                  </p>
                  <p className="font-geo text-custom-blue mt-2 font-bold underline">
                    Lets Chat!
                  </p>
                  <div className="mt-2">
                    <p className="font-geo text-custom-blue font-bold">
                      Address
                    </p>
                    <p className="font-geo text-custom-blue">
                      1740 NW Federal Hwy, <br /> Stuart, FL 34994 <br /> United
                      States
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h2 className="text-[16px] font-bold text-custom-blue capitalize">
                      Privacy Policy And Services Agreement
                    </h2>
                    <ul className="text-custom-blue font-geo">
                      <li>
                        <a href="#" className="hover:underline">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:underline">
                          Services Agreement
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mt-[3.25rem] text-base font-bold text-custom-blue capitalize font-geo">
                      Company
                    </h2>
                    <ul className="text-custom-blue font-geo">
                      <li>
                        <a href="#" className="hover:underline">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline">
                          Customer Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-auto flex flex-col gap-5 justify-start items-start">
                  <button className="font-geo text-custom-blue font-bold">
                    Languaje
                  </button>
                  <div className="flex w-full justify-start items-center gap-10">
                    <Image
                      src="/images/USA.png"
                      width={73}
                      height={38}
                      alt="USA"
                    />
                    <Image
                      src="/images/Spain.png"
                      width={74}
                      height={38}
                      alt="USA"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] bg-custom-blue flex items-center justify-center">
        <div className="flex w-full justify-between items-center max-w-[1440px] px-4">
          <div className="flex justify-cemter items-center">
            <Image
              src="/images/footer-logo.png"
              width={262}
              height={41}
              alt="footer-logo"
            />
          </div>
          <div className="flex justify-center items-center gap-20">
            <Image
              src="/icons/Vector.svg"
              width={39}
              height={39}
              alt="icon"
              className="w-[39px] h-[39px]"
            />
            <Image
              src="/icons/Frame.svg"
              width={39}
              height={39}
              alt="icon"
              className="w-[39px] h-[39px]"
            />
            <Image
              src="/icons/Frame-1.svg"
              width={39}
              height={39}
              alt="icon"
              className="w-[39px] h-[39px]"
            />
            <Image
              src="/icons/Frame-2.svg"
              width={39}
              height={39}
              alt="icon"
              className="w-[39px] h-[39px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
