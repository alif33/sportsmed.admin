import React from 'react';
import NewsCard6 from '../../components/sectionCard/NewsCard6';

const BettingFantasy = ({title}) => {
    return (
        <div className="container-fluid py-2" style={{ background: '#000' }}>

            <h1 className="nfl_card_title2 text-white bf_title mb-4">{title}</h1>

            <div className="_smd_bf_grid_main">



                {[1, 1, 1, 1, 1].map((tiem, i) => (<NewsCard6 img="/images/landing_Page/b_f_img1.png" title="Betting" description=" Who profited most from transfer portal?" key={i} />))}


            </div>
        </div>
    );
};

export default BettingFantasy;