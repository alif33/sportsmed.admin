import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Mousewheel, Navigation } from "swiper";

function TopStoryVerticalSlider() {
    return (
        <div className="position-relative">

            <Swiper
                direction={"vertical"}
                slidesPerView={5}
                spaceBetween={30}
                navigation={true}
                mousewheel={false}
                modules={[Mousewheel, Navigation]}
                className="vertical_slider"
            >
                <div className="v_s_div v_s_top"></div>
                <SwiperSlide>
                    <div className="border-bottom">
                        <a href="#!">
                            <h4 style={{ color: '#121212' }} className="mt-2">
                                Peacock <br />
                                Brother From Another</h4>
                            <h4>News</h4>
                            <h4>Wed 12am PST</h4>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-bottom">
                        <a href="#!">
                            <h4 style={{ color: '#121212' }} className="mt-2">
                                Peacock <br />
                                Brother From Another</h4>
                            <h4>News</h4>
                            <h4>Wed 12am PST</h4>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-bottom">
                        <a href="#!">
                            <h4 style={{ color: '#121212' }} className="mt-2">
                                Peacock <br />
                                Brother From Another</h4>
                            <h4>News</h4>
                            <h4>Wed 12am PST</h4>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-bottom">
                        <a href="#!">
                            <h4 style={{ color: '#121212' }} className="mt-2">
                                Peacock <br />
                                Brother From Another</h4>
                            <h4>News</h4>
                            <h4>Wed 12am PST</h4>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-bottom">
                        <a href="#!">
                            <h4 style={{ color: '#121212' }} className="mt-2">
                                Peacock <br />
                                Brother From Another</h4>
                            <h4>News</h4>
                            <h4>Wed 12am PST</h4>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-bottom">
                        <a href="#!">
                            <h4 style={{ color: '#121212' }} className="mt-2">
                                Peacock <br />
                                Brother From Another</h4>
                            <h4>News</h4>
                            <h4>Wed 12am PST</h4>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-bottom">
                        <a href="#!">
                            <h4 style={{ color: '#121212' }} className="mt-2">
                                Peacock <br />
                                Brother From Another</h4>
                            <h4>News</h4>
                            <h4>Wed 12am PST</h4>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-bottom">
                        <a href="#!">
                            <h4 style={{ color: '#121212' }} className="mt-2">
                                Peacock <br />
                                Brother From Another</h4>
                            <h4>News</h4>
                            <h4>Wed 12am PST</h4>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-bottom">
                        <a href="#!">
                            <h4 style={{ color: '#121212' }} className="mt-2">
                                Peacock <br />
                                Brother From Another</h4>
                            <h4>News</h4>
                            <h4>Wed 12am PST</h4>
                        </a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="border-bottom">
                        <a href="#!">
                            <h4 style={{ color: '#121212' }} className="mt-2">
                                Peacock <br />
                                Brother From Another</h4>
                            <h4>News</h4>
                            <h4>Wed 12am PST</h4>
                        </a>
                    </div>
                </SwiperSlide>
                <div className="v_s_div v_s_bottom"></div>
            </Swiper>
        </div>
    )
}

export default TopStoryVerticalSlider