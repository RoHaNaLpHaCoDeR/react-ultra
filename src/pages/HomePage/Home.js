import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';
import {Joblist} from '../../components/InfoSection/joblist';
function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Joblist/>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
