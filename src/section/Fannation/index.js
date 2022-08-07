import React from 'react';
import Featured from '../Featured';
import RecentStories from '../RecentStories';

const Fannation = () => {
    return (
        <div className="container-fluid py-3">
        <div className="row m-0 g-2">
            <div className="col-lg-5 col-md-6">
                <RecentStories />
            </div>

            <div className="col-lg-3 col-md-3">
                <Featured />
            </div>
            <div className="col-lg-4">
                <h1 className="nfl_card_title2 smd_border_bottom mb-4">Fannation</h1>

                {[1, 1, 1].map((item, i) => <a key={i} href="#!">
                    <div className="border-bottom">
                        <h4 style={{ color: '#121212' }} className="mt-2">FanNation Grades Every NFL Team’s Offseason</h4>
                        <p className="mt-1">John Holinger</p>
                    </div>
                </a>)}

            </div>
        </div>
    </div>
    );
};

export default Fannation;