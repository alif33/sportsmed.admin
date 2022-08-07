import { useState } from 'react';
import NewsCard4 from '../../components/sectionCard/NewsCard4';
import NewsCard7 from '../../components/sectionCard/NewsCard7';
import PlayerTab from './PlayerTab';

const NewsTab = () => {

    return (
        <div className="nfl_con">
            <div className="nfl_sec_two">
                <div>
                    <NewsCard4 img="/images/landing_Page/nfl_s2_img.png" title="Russell Wilson, Broncos need efficient run game to excel. Will they have one?" description="Follow here for signings, trades, rumors and analysis from The Athletic's staff as the" name="John Holinger" comment="541" />
                </div>
                <div>
                    {[1, 1, 1].map((item, i) => <NewsCard7 key={i} title="'Luck,' episode 3: The Colts' top pick bursts onto the scene and exceeds the hype" description="The Athletic NFL Staff" img="/images/landing_Page/cardImg1.png" />)}
                </div>

                <PlayerTab/>
            </div>
        </div>
    );
};

export default NewsTab;