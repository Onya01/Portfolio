import React from 'react';
// import CV from '../../assets/updated_cv.pdf';
import CV from '../../assets/Tec4Dev.pdf';
// import CV from '../../assets/InternshipCv.pdf';
// import CL from '../../assets/coverletter.pdf';
// import CV from '../../assets/interncv.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>

      {/* <a href={CL} download className='btn'>Download Cover Letter</a>
       */}
      <a href="#contact" className='btn btn__primary'>Let's Talk</a>
    </div>
  );
}

export default CTA;
