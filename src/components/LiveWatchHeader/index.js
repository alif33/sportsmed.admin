import Image from 'next/image'

const LiveWatchHeader = () => {
    return (
        <div className="bg-black">
            <div className="_smd_live_watch_bg" style={{ backgroundImage: `url('/images/watch/live-header.png')` }}>
                <button className="_smd_live_btn">Live</button>
                <div className="_smd_live_video_tilte">
                    <Image height='75' width='59.5' src="/images/watch/play-btn-icon.png" alt="" /> <h2>Jim Bowden joins Jeremy St. Louis to discuss the two players the Dodgers need to target ahead
                        of the MLB trade deadline</h2>
                </div>
            </div>
            <div className="_smd_watch_system">
                <p>Watch anywhere, anytime</p>
                <ul>
                    <li><img src="/images/watch/roku.png" alt="" /></li>
                    <li><img src="/images/watch/apple-tv.png" alt="" /></li>
                    <li><img src="/images/watch/apple.png" alt="" /></li>
                    <li><img src="/images/watch/amazon.png" alt="" /></li>
                    <li><img src="/images/watch/brodcast.png" alt="" /></li>
                    <li><img src="/images/watch/andu.png" alt="" /></li>
                    <li><img src="/images/watch/lg.png" alt="" /></li>
                    <li><img src="/images/watch/vizio.png" alt="" /></li>
                </ul>
            </div>
        </div>
    );
};

export default LiveWatchHeader;