import Image from "next/image";
import PodcastCard from "../../src/components/sectionCard/PodcastCard";
import Layout from "./../../src/components/Layout";

const PodcastPage = () => {
    return (
        <Layout>
            <div className="podcast-header">
                <img src="/images/podcast/header-bg.png" alt="" />
                <h3>Sports Meds Analytics Podcasts</h3>
            </div>


            <div className="featured-podcast my-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                           <div className="w-100 pt-2">
                           <Image width="489"
                                height="312" src="/images/podcast/featured.png" alt="" />
                           </div>
                        </div>
                        <div className="col-md-7">
                            <div className="featured-text">
                                <h4>FEATURED PODCASTS</h4>
                                <h3>The Early Edge: A Daily SportsLine Betting Podcast</h3>
                                <p>Looking for the best picks against the spread, sharp action on the total and props you can take to the ticket window? Join The Coach, Jonathan Coachman, on the Early Edge as he speaks with the best handicappers to preview every</p>
                                <h2>FOLLOW PODCASTS</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

<div className="podcast-cards">
    <div className="container-fluid">
        <div className="row">
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
        </div>
    </div>
</div>
            
        </Layout>
    );
};

export default PodcastPage;