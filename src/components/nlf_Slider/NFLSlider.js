import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <div key={1} className="item" data-value="1">
        <div className='nfl_sec_one'>
            <img src="/images/landing_Page/nfl_sec_one_bg.png" className='nfl_sec_one_img w-100' alt="" />
            <div className='nfl_sec_one_overlay'>
                <img src="/images/landing_Page/video_icon.png" className='nfl_video_icon' alt="" />
                <div>
                    <h3>Rice diversifies NFL</h3>
                    <p>
                        Condoleezza Rice gives the NFL a great opportuinty to <br />
                        increase diversity from the top down.
                    </p>
                </div>
            </div>
        </div>
    </div>,
    <div key={2} className="item" data-value="2">
        <div className='nfl_sec_one'>
            <img src="/images/landing_Page/nfl_sec_one_bg.png" className='nfl_sec_one_img w-100' alt="" />
            <div className='nfl_sec_one_overlay'>
                <img src="/images/landing_Page/video_icon.png" className='nfl_video_icon' alt="" />
                <div>
                    <h3>Rice diversifies NFL</h3>
                    <p>
                        Condoleezza Rice gives the NFL a great opportuinty to <br />
                        increase diversity from the top down.
                    </p>
                </div>
            </div>
        </div>
    </div>,
    <div key={3} className="item" data-value="3">
        <div className='nfl_sec_one'>
            <img src="/images/landing_Page/nfl_sec_one_bg.png" className='nfl_sec_one_img w-100' alt="" />
            <div className='nfl_sec_one_overlay'>
                <img src="/images/landing_Page/video_icon.png" className='nfl_video_icon' alt="" />
                <div>
                    <h3>Rice diversifies NFL</h3>
                    <p>
                        Condoleezza Rice gives the NFL a great opportuinty to <br />
                        increase diversity from the top down.
                    </p>
                </div>
            </div>
        </div>
    </div>
];


function NFLSlider() {
    return (
        <div className='nfl_slider'>
            <AliceCarousel
                autoPlay
                autoPlayStrategy="none"
                autoPlayInterval={3000}
                animationDuration={1000}
                infinite
                touchTracking={false}
                disableDotsControls
                disableButtonsControls
                items={items}
                controlsStrategy="alternate"
            />
        </div>
    )
}

export default NFLSlider