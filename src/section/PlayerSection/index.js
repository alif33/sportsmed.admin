import { useState } from 'react';
import NewsCard3 from '../../components/sectionCard/NewsCard3';
import NewsCard4 from '../../components/sectionCard/NewsCard4';
import PlayerTab from './PlayerTab';


const PlayerSection = ({ players }) => {


    return (
        <div className="container-fluid py-3">
            <h1 className="nfl_card_title2">Player News</h1>
            <div className="_smd_player_news_main">
                <div>

                    <NewsCard3 img="/images/landing_Page/palyer_news_card_img1.png" title="Who profited most from transfer portal?" name="John Holinger" comment="541" link='#!' />
                    <NewsCard3 img="/images/landing_Page/palyer_news_card_img1.png" title="Who profited most from transfer portal?" name="John Holinger" comment="541" link='#!' />
                    <NewsCard3 img="/images/landing_Page/palyer_news_card_img1.png" title="Who profited most from transfer portal?" name="John Holinger" comment="541" link='#!' />
                    
                </div>
                <div>

                    <NewsCard4 img="/images/landing_Page/player_news_img2.png" title="Who profited most from transfer portal?" name="John Holinger" comment="541" />
                    <NewsCard4 img="/images/landing_Page/player_news_img2.png" title="Who profited most from transfer portal?" name="John Holinger" comment="541" />
                </div>
                <PlayerTab players={ players } />
            </div>
        </div>
    );
};

export default PlayerSection;