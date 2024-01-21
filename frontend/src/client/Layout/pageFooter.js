import * as React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Typography } from "@mui/joy";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
export default function PageFooter() {
  return (
    <>
      <footer
        className="relative bg-gray-300 pt-8 pb-6"
        style={{ marginTop: "70px" }}
      >
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <img
                src="https://www.asgardsys.co.il/wp-content/uploads/2022/08/AsgardsSystems-01.png"
                width="180px"
                alt="Asgard"
              />
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <PhoneIcon sx={{ fontSize: "50px" }} />

                  <div>
                    <Typography
                      level="body-xs"
                      sx={{ fontSize: "20px", color: "black" }}
                    >
                      Contact us on:
                    </Typography>
                    <Typography
                      level="body-xs"
                      sx={{ fontSize: "20px", color: "black" }}
                    >
                      2547686769
                    </Typography>
                  </div>
                </Box>
              </h5>
              <div className="mt-6" style={{ display: "flex", gap: "20px" }}>
                <button type="button">
                  <XIcon sx={{ fontSize: "30px" }} />
                </button>
                <button type="button">
                  <WhatsAppIcon sx={{ fontSize: "30px" }} />
                </button>
                <button type="button">
                  <FacebookIcon sx={{ fontSize: "30px" }} />
                </button>
                {/* <button
                className="text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <XIcon />
              </button> */}
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="#"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="#"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="#"
                      >
                        Testimonial
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="#"
                      >
                        Refund and Returns
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="#"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="#"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="#"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Johsafe{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
