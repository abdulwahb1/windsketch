import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center">
      <div className="w-screen h-[350px] bg-white">
        <div className="flex flex-col justify-center items-start ml-[300px]">
          <div className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl">
              <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
                <div>
                  <h2 className=" font-geo text-sm font-semibold text-custom-blue uppercase dark:text-white">
                    Contact
                  </h2>
                  <a
                    href="#"
                    className="hover:underline font-geo text-custom-blue font-medium"
                  >
                    Tell Us Everything
                  </a>
                  <p className="font-geo text-custom-blue mt-2 font-bold">
                    Do you have any question? Feel free to reach out.
                  </p>
                  <p className="font-geo text-custom-blue mt-2 font-bold">
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
                    <h2 className=" text-sm font-bold text-custom-blue uppercase dark:text-white">
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
                    <h2 className=" mt-5 text-sm font-bold text-custom-blue uppercase font-geo">
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
                <div className="mt-[150px]">
                  <a href="#" className="font-geo text-custom-blue font-bold">
                    Languaje
                  </a>
                  <div className="grid grid-cols-2 mt-5">
                    <Image
                      src="/images/USA.png"
                      width={73}
                      height={38}
                      alt="USA"
                    />
                    <Image
                      src="/images/spain.png"
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
      <div className="w-screen h-[80px] bg-custom-blue flex items-center justify-evenly">
        <div className="flex justify-between items-center">
          <Image
            src="/images/footer-logo.png"
            width={262}
            height={41}
            alt="footer-logo"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/icons/vector.svg"
            width={39}
            height={39}
            alt="icon"
            className="mr-5"
          />
          <Image
            src="/icons/frame.svg"
            width={39}
            height={39}
            alt="icon"
            className="mr-5"
          />
          <Image
            src="/icons/frame-1.svg"
            width={39}
            height={39}
            alt="icon"
            className="mr-5"
          />
          <Image
            src="/icons/frame-2.svg"
            width={39}
            height={39}
            alt="icon"
            className="mr-5"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
