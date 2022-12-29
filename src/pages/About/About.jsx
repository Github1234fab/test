import React from 'react';
import "./About.css";
import Banner2 from '../../components/Banner2';
import Collapse from '../../components/Collapse';
import AboutTxt from "../../data/AboutTxt.json"

const About = () => {
  const text = AboutTxt.find((text)=>text);
  const {txt1, title1, txt2, title2, txt3, title3, txt4, title4 } = text;
  

  return (
    <>
      <div>
        <Banner2 />
      </div>
      <div className='about_collapses'>
        <div className='about_anyCollapse'>
          <Collapse className='about_collapseTxt1' description={txt1} titre={title1} />
          <Collapse className='about_collapseTxt2' description={txt2} titre={title2} />
          <Collapse className='about_collapseTxt3' description={txt3} titre={title3} />
          <Collapse className='about_collapseTxt4' description={txt4} titre={title4} /> 
        </div>
      </div>
    </>
  );
};

export default About;