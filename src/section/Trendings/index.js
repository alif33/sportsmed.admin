import React from 'react';
import NewsCard from '../../components/sectionCard/NewsCard';
import NewsCard7 from '../../components/sectionCard/NewsCard7';
import NewsCard9 from '../../components/sectionCard/NewsCard9';

const Trendings = () => {
    return (
        <div className="nfl_con">
            <h4 className='nfl_card_title2 mt-3'>Trendings</h4>
            <div className="nfl_sec5_grid mt-3">

                <NewsCard img="/images/landing_Page/nfl_S5.png" title="  NBA free agency 2022 live tracker: News, rumors, trades, signings, as the offseason rolls on" description="  Follow here for signings, trades, rumors and analysis from The Athletic's staff as the" />

                <div>
                    {[1, 1, 1, 1].map((item, i) => <NewsCard9 key={i} title="Hollinger: The 5 Kevin Durant trades that make" description="Scott Wheeler" comment="377" />)}

                   

                </div>
                <div className='position-relative'>
                    {[1, 1, 1].map((item, i) => <NewsCard7 key={i} title="'Luck,' episode 3: The Colts' top pick bursts onto the scene and exceeds the hype" description="The Athletic NFL Staff" img="/images/landing_Page/cardImg1.png" />)}
                </div>
            </div>
        </div>
    );
};

export default Trendings;