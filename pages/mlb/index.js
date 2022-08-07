import { useState } from 'react';
import db from "../../utils/db";
import Post from '../../models/Post';
import Player from '../../models/Player';
import Layout from "../../src/components/Layout";
import NFLSlider from '../../src/components/nlf_Slider/NFLSlider';
import ArticleSection from '../../src/section/ArticleSection';
import Trendings from '../../src/section/Trendings';
import MoreNews from '../../src/section/MoreNews';
import PageNewsSection from '../../src/section/PageNewsSection';
import NewsTab from '../../src/section/NewsTap';

const MLB = ({ posts }) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className='_nfl'>
            <Layout navheader={ true }>
            <NFLSlider />
            <NewsTab/>
              <div className="nfl_con">
                  <div className='nfl_hr_line'></div>
              </div>
              <PageNewsSection title="MLB News" />
              <ArticleSection 
                posts={ posts } 
              />
              <Trendings />
              <div className="nfl_con">
                  <div className='nfl_hr_line'></div>
              </div>
              <MoreNews posts={ posts }/>
              <div className="nfl_con">
                  <div className='nfl_hr_line'></div>
              </div>
            </Layout>
        </div>
    )
};

export default MLB;


export async function getServerSideProps() {
  
  await db.connect();
    const posts = await Post.find()
        .lean()
        .limit(50);

    const players = await Player.find()
        .lean()
        .limit(50);

  await db.disconnect();

  return {
    props: {
      posts: posts.map(db.convertDocToObj),
      players: players.map(db.convertDocToObj),
    },
  };
}
