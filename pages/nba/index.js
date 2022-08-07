import Navbar from '../../src/components/headers/Navbar';
import db from "../../utils/db";
import Post from '../../models/Post';
import Player from '../../models/Player';
import Layout from "../../src/components/Layout";
import NbaHero from '../../src/section/hero/NbaHero';
import BettingFantasy from '../../src/section/BettingFantasy';
import MoreNews from '../../src/section/MoreNews';
import NbaNews from '../../src/section/NbaNews';
import PlayerSection from '../../src/section/PlayerSection';
import TopPicks from '../../src/section/TopPicks';

const NBA = ({ posts, players }) => {

    return (
        <div>
            <Layout navheader={ true }>
              <NbaHero />
              <NbaNews title="NBA News" />
              <TopPicks />
              <BettingFantasy title="Trendings" />
              <PlayerSection />
              <MoreNews posts={ posts } />
            </Layout>
        </div>
    );
};

export default NBA;

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
        players: players.map(db.convertDocToObj)
      },
    };
  }
  
