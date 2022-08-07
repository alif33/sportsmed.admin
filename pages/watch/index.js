import React from "react";
import Watch from "../../models/Watch";
import db from "../../utils/db";
import LiveWatchHeader from "../../src/components/LiveWatchHeader";
import Section from "../../src/components/watches/Section";
import Layout from "../../src/components/Layout";
import { watchlistByLeague } from "../../__lib__/helpers/Filter";

const WatchPage =({ watches }) => {

   const { NFL, NBA, MLB } = watchlistByLeague(watches); 

    return (
        <Layout>
            <LiveWatchHeader />
            <Section
                title="Watch more live"
                live={ true }
            />
            <Section
                title="Top Videos"
                live={ false }

            />

            <Section
                title="NFL"
                live={ false }
                lists={ NFL }
            />

            <Section
                title="NBA"
                live={ false }
                lists={ NBA }
            />

            <Section
                title="MLB"
                live={ false }
                lists={ MLB }
            />
        </Layout>
    );
};

export default WatchPage;


export async function getServerSideProps() {

    await db.connect();
    const watches = await Watch.find()
        .lean()
        .limit(50);
    await db.disconnect();

    return {
        props: {
            watches: watches.map(db.convertDocToObj),
        },
    };
}









// import React, { Component } from "react";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import Slider from "react-slick";
// import Layout from "../../src/components/Layout";
// import { settings } from "../../src/components/Slider";
// import { getData } from "../../__lib__/helpers/HttpService";
// export default class Watch extends Component {
//   constructor(props) {
//     super(props);
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//   }

//   async componentDidMount() {
//     const videos = await getData("watches");
//     this.setState({
//       ...this.state,
//       videos,
//     });
//   }
//   next() {
//     this.slider.slickNext();
//   }
//   previous() {
//     this.slider.slickPrev();
//   }

//   render() {
//     return (
//       <>
//         <Layout>
//           {this.state?.videos ? (
//             <div
//               className="container-fluid pt-3"
//               id="watch"
//               data-aos="fade-in"
//               data-aos-easing="linear"
//               data-aos-duration="1200"
//             >
//               <div className="container-md mx-auto">
//                 <div className="row ">
//                   <iframe
//                     className="col-md-8 mx-auto col-12 "
//                     height="350"
//                     src="https://www.youtube-nocookie.com/embed/53cvnxsLuig"
//                     title="YouTube video player"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//                 <Slider {...settings} ref={(c) => (this.slider = c)}>
//                   {this.state.videos.map((item, index) => {
//                     return (
//                       <div key={index}  className="mt-4 col-4 mx-auto">
//                         <iframe
//                           width="300"
//                           height="200"
//                           src={item.videoUri}
//                           title="YouTube video player"
//                           frameBorder="0"
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                           allowFullScreen
//                         ></iframe>
//                       </div>
//                     );
//                   })}
//                 </Slider>
//                 <div className="container-md mt-4 mb-4">
//                   <button
//                     onClick={this.previous}
//                     className="float-start  border-0 bg-transparent text-white"
//                   >
//                     <i className="fas fa-arrow-left fa-2x"></i>
//                   </button>
//                   <button
//                     onClick={this.next}
//                     className="float-end border-0 bg-transparent text-white"
//                   >
//                     <i className="fas fa-arrow-right fa-2x"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <SkeletonTheme baseColor="#fff" highlightColor="#808080">
//               <Skeleton count={30} />
//             </SkeletonTheme>
//           )}
//         </Layout>
//       </>
//     );
//   }
// }



