import React from "react";
import YoutubeThumbnail from "youtube-thumbnail";

const Card = ({item}) => {
    console.log(item);
    return (
        <div>
            <a href="#!">
                <div>
                    <img src={`https://i.ytimg.com/vi/${item.videoId}/mq1.jpg`} className='nfl_s2_img' alt="" />
                    <p className='nfl_para1 _smd_card_desc'>
                        Follow here for signings, trades, rumors and analysis from
                    </p>
                </div>
            </a>
        </div>
    );
};

export default Card;