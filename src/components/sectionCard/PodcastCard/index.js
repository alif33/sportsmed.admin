import Link from 'next/link';
import React from 'react';

const PodcastCard = () => {
  return (
    <div className="col-md-4 mb-3">
      <div className="podcast-card">
        <img src="/images/podcast/card-img.png" alt="" />
        <span>Fantasy & Gambling</span>
        <h4>Dominate your league with exclusive advice on who to add/drop, start/sit, trade, draft and more!</h4>
        <a href="#!"> FOLLOW PODCASTS </a>
      </div>
    </div>
  );
};

export default PodcastCard;