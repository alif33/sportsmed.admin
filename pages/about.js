import React from "react";
import Layout from "../src/components/Layout";

const About = () => {
  return (
    <>
      <Layout>
        <div
          id="about"
          data-aos="fade-in"
          data-aos-easing="linear"
          data-aos-duration="1200"
        >
          <div className=" text-center text-white">
            <div className="mt-5 w-75 mx-auto lh-lg">
              <img
                src="/images/about/profile.png"
                className="img-fluid"
                alt="profile"
              />
              <h1 className="my-3 " style={{ fontSize: "45px" }}>
                BACKGROUND
              </h1>
              <p className="my-2">
                I’m Deepak Chona, MD, a final-year orthopedic surgery resident
                physician at Stanford University. Hearing about Dr. James
                Andrews – a living legend in sports medicine – performing
                career-saving surgery on Drew Brees’s shoulder drew me to
                orthopedics. Motivated by the story, I started to pursue
                orthopedic sports medicine with the goal of helping people
                return to sports, activity, and generally healthy lifestyles. I
                obtained an MD from University of Pennsylvania in 2017, and have
                been training in orthopedic surgery at Stanford since, with the
                plan to complete residency in June 2022 and pursue
                sub-specialization in sports medicine at Harvard-Boston
                Children&apos;s Hospital starting August 2022.
              </p>
              <p className="my-3">
                These posts represent the application of my training to my
                hobbies. The injuries, athletes, predicting outcomes and
                prognoses – I love it.
              </p>
              <p className="my-3">
                My goal is to deliver data-driven injury analysis, just as I
                would for a patient asking about his/her prognosis. All
                information sources used are publicly available, I am not
                involved in the medical care of any of the athletes discussed,
                and this does not constitute medical advice. The views shared
                are purely my own, and are not those of any institution I am
                affiliated with. The information that gets shared publicly is in
                some cases a limiting factor for this type of analysis, and it
                is an imperfect science to apply statistics to individual cases.
                Nevertheless, I hope you will enjoy our content.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
