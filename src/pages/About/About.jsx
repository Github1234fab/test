import React from 'react';
import "./About.css";
import Banner2 from '../../components/Banner2';
import Collapse from '../../components/Collapse';
import AboutData from "../../data/AboutData.json"

const About = () => {
  return (
    <>
      <div>
        <Banner2 />
      </div>
      <div className='about_collapses'>
        <div className='about_anyCollapse'>
          {AboutData.map((data) => (<Collapse description={data.content} titre={data.title} />))}
        </div>
      </div>
    </>
  );
};

export default About;