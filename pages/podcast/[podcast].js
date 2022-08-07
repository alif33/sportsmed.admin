import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Layout from "../../src/components/Layout";
const PlayPodCast = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <>
      <Layout>
        <div id="playPodCast" className="container-fluid">
          <div className="container-md my-5">
            <Link href="/podcast">
              <div className="d-flex  gap-1 text-white allepisodes">
                <i className="fa-solid fa-angle-left "></i>
                <p>All Episodes</p>
              </div>
            </Link>

            {/* Episoide */}
            <Slider {...settings}>
              <div>
                <div className="sliderBox d-flex align-items-center  mt-3 gap-3 px-md-5 mx-5 mb-3 ">
                  <img
                    className="img-fluid"
                    style={{ width: "350px" }}
                    src="/images/UltimateLogo.png"
                    alt=""
                  />
                  <div className="text-white">
                    <p>Sports Med Analytics Podcast</p>
                    <h3 className="text-white">Week 1 NFL Injury Report</h3>
                  </div>
                </div>
                <div className="audiobox d-flex justify-content-center gap-1 px-md-5 mx-md-5 mt-4 text-white">
                  <span>0:00</span>
                  <input
                    type="range"
                    className="porgresbar"
                    min="0"
                    max="240.00"
                    step="0.01"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="0"
                    aria-valuetext="0%"
                    value="0"
                  />
                  <span>4:00</span>
                </div>

                <div className="text-center mt-1 controlBtn">
                  <button className="">
                    <span>1x</span>
                  </button>
                  <button>
                    <svg viewBox="0 0 22 25" width="22" height="25">
                      <g
                        transform="translate(22), scale(-1, 1)"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeWidth="1"
                      >
                        <path
                          d="M20.26 10.23a10 10 0 1 1-6.53-5.85"
                          strokeLinejoin="round"
                        ></path>
                        <path d="M10 1l4 3.5L10 8"></path>
                      </g>
                      <text
                        fill="currentColor"
                        fontFamily="inherit"
                        fontSize="10"
                        fontWeight="normal"
                        letterSpacing="-.8"
                        textAnchor="middle"
                        x="10.5"
                        y="18"
                      >
                        15
                      </text>
                    </svg>
                  </button>
                  <button>
                    <svg width="40" height="40" viewBox="0 0 48 48">
                      <g fill="none">
                        <circle
                          stroke="currentColor"
                          strokeWidth="1"
                          cx="24"
                          cy="24"
                          r="23.5"
                        ></circle>
                        <path
                          d="M33.32,23.81 C33.80,24.09 33.80,24.55 33.32,24.84 L18.85,33.52 C18.38,33.81 18,33.59 18,33.05 L18,15.60 C18,15.05 18.38,14.84 18.85,15.12 L33.32,23.81 Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </button>
                  <button>
                    <svg viewBox="0 0 22 25" width="22" height="25">
                      <g
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeWidth="1"
                      >
                        <path
                          d="M20.26 10.23a10 10 0 1 1-6.53-5.85"
                          strokeLinejoin="round"
                        ></path>
                        <path d="M10 1l4 3.5L10 8"></path>
                      </g>
                      <text
                        fill="currentColor"
                        fontFamily="inherit"
                        fontSize="10"
                        fontWeight="normal"
                        letterSpacing="-.8"
                        textAnchor="middle"
                        x="10.5"
                        y="18"
                      >
                        15
                      </text>
                    </svg>
                  </button>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 22">
                      <path
                        fill="currentColor"
                        d="M8 14.4V.5a.5.5 0 0 1 1 0v13.6l5.4-5a.5.5 0 1 1 .6.8l-6.8 6.2-6.1-6.4a.5.5 0 0 1 .7-.7L8 14.4zm9 7.1c0 .3-.2.5-.5.5H.5a.5.5 0 1 1 0-1h16c.3 0 .5.2.5.5z"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div>
                  <div className="mx-auto w-md-50  mt-5 ">
                    <h4 className=" mb-2">
                      SportsMedAnalytics <span>|</span> 9/16/2020
                    </h4>
                    <h3 className="text-white ">
                      Dr. Chona breaks down the most important injury news for
                      Week 1 around the NFL.
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="sliderBox d-flex align-items-center sm:flex-column mt-3 gap-3 px-md-5 mx-5 ">
                  <img
                    className="img-fluid"
                    style={{ width: "350px" }}
                    src="/images/UltimateLogo.png"
                    alt=""
                  />
                  <div className="text-white">
                    <p>Sports Med Analytics Podcast</p>
                    <h3 className="text-white">Week 1 NFL Injury Report</h3>
                  </div>
                </div>
                <div className="audiobox d-flex justify-content-center gap-1 px-md-5 mx-5 mt-4 text-white">
                  <span>0:00</span>
                  <input
                    type="range"
                    className="porgresbar"
                    min="0"
                    max="240.00"
                    step="0.01"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="0"
                    aria-valuetext="0%"
                    value="0"
                  />
                  <span>4:00</span>
                </div>

                <div className="text-center mt-1 controlBtn">
                  <button className="">
                    <span>1x</span>
                  </button>
                  <button>
                    <svg viewBox="0 0 22 25" width="22" height="25">
                      <g
                        transform="translate(22), scale(-1, 1)"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeWidth="1"
                      >
                        <path
                          d="M20.26 10.23a10 10 0 1 1-6.53-5.85"
                          strokeLinejoin="round"
                        ></path>
                        <path d="M10 1l4 3.5L10 8"></path>
                      </g>
                      <text
                        fill="currentColor"
                        fontFamily="inherit"
                        fontSize="10"
                        fontWeight="normal"
                        letterSpacing="-.8"
                        textAnchor="middle"
                        x="10.5"
                        y="18"
                      >
                        15
                      </text>
                    </svg>
                  </button>
                  <button>
                    <svg width="40" height="40" viewBox="0 0 48 48">
                      <g fill="none">
                        <circle
                          stroke="currentColor"
                          strokeWidth="1"
                          cx="24"
                          cy="24"
                          r="23.5"
                        ></circle>
                        <path
                          d="M33.32,23.81 C33.80,24.09 33.80,24.55 33.32,24.84 L18.85,33.52 C18.38,33.81 18,33.59 18,33.05 L18,15.60 C18,15.05 18.38,14.84 18.85,15.12 L33.32,23.81 Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </button>
                  <button>
                    <svg viewBox="0 0 22 25" width="22" height="25">
                      <g
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeWidth="1"
                      >
                        <path
                          d="M20.26 10.23a10 10 0 1 1-6.53-5.85"
                          strokeLinejoin="round"
                        ></path>
                        <path d="M10 1l4 3.5L10 8"></path>
                      </g>
                      <text
                        fill="currentColor"
                        fontFamily="inherit"
                        fontSize="10"
                        fontWeight="normal"
                        letterSpacing="-.8"
                        textAnchor="middle"
                        x="10.5"
                        y="18"
                      >
                        15
                      </text>
                    </svg>
                  </button>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 22">
                      <path
                        fill="currentColor"
                        d="M8 14.4V.5a.5.5 0 0 1 1 0v13.6l5.4-5a.5.5 0 1 1 .6.8l-6.8 6.2-6.1-6.4a.5.5 0 0 1 .7-.7L8 14.4zm9 7.1c0 .3-.2.5-.5.5H.5a.5.5 0 1 1 0-1h16c.3 0 .5.2.5.5z"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div>
                  <div className="mx-auto w-md-50  mt-5 ">
                    <h4 className=" mb-2">
                      SportsMedAnalytics <span>|</span> 9/16/2020
                    </h4>
                    <h3 className="text-white ">
                      Dr. Chona breaks down the most important injury news for
                      Week 1 around the NFL.
                    </h3>
                  </div>
                </div>
              </div>
            </Slider>
            {/* <div className="d-flex justify-content-between mt-4 prbBox">
              <button onClick={previous} className="border-0 px-2">
                Previous Episode
              </button>
              <button>Next Episode</button>
            </div> */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PlayPodCast;
