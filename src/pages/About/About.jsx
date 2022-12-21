import React from 'react';
import "./About.css";
import Banner2 from '../../components/Banner2';
import Collapse from '../../components/Collapse';
// import DataLogements from "../../data/data.json";

const About = () => {

  return (
    <>
    <div>
      <Banner2 />
      </div>
      <div className='about_collapses'>
        <div className='about_anyCollapse'>
        <Collapse className='about_collapseFiabilite' />
        <Collapse className='about_collapseRespect' />
        <Collapse className='about_collapseService' />
        <Collapse className='about_collapseResponsabilite' />
        </div>
      </div>
    </>
  );
};

export default About;