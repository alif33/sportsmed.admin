import React from 'react';

const PageNewsSection = ({title}) => {
    return (
        <div className="nfl_con">
        <div className="nfl_sec_three">

        </div>
        <h4 className='nfl_card_title2'>{title}</h4>
        <div className="nfl_sec_grid">

            <div>
                <a href="#!">
                    <img src="/images/landing_Page/nfl_S3_img.png" className='nfl_s2_img' alt="" />
                </a>
            </div>

            <div>
                <a href="#!">
                    <h4 className='nfl_title1'>
                        What happened to Andrew Luck? Our new series goes inside his rise, shocking retirement
                    </h4>
                    <p className='nfl_para1'>
                        What happened to Andrew Luck? Our new series goes inside his rise, shocking retirement
                    </p>
                    <p>Scott Wheeler <span className='nfl_comment_num'>377</span></p>
                </a>
            </div>

            <div className='position-relative'>
                <div className='nfl_sec2_vertical_line'></div>
                <div className='d-flex'>
                    <h3 className='nfl_sec3_title'>Headlines</h3>
                </div>

                <ul className='nfl_S3__ul'>
                    <li><a href="#!">Former Chiefs OL Mitchell Schwartz retires</a></li>
                    <li><a href="#!">Dan Snyder: Will testify July 28,' no need for subpoena'</a></li>
                    <li><a href="#!">Patriots trade WR N'Keal Harry to Bears</a></li>
                    <li><a href="#!">Patriots trade WR N'Keal Harry to Bears</a></li>
                    <li><a href="#!">Texans to wear 'Battle Red' helmets in Week 9 vs. Eagles</a></li>
                    <li><a href="#!">Patriots trade WR N'Keal Harry to Bears</a></li>
                </ul>

            </div>
        </div>
    </div>
    );
};

export default PageNewsSection;