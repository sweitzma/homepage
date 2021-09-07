import React from "react";
import { LoremIpsum } from "lorem-ipsum";

const About = () => {
  const lorem = new LoremIpsum();
  const spacer = (<p className="my-3"/>);
  return(
    <div>
      <div className="p-4 text-lg">
        { spacer }
        Welcome to my home page! I am based out of the lovely Richmond district of San Francisco.

        Professionally, I am a <code>machine learning engineer</code> at <a className="hover:underline italic bg-grey-100" href="http://meraki.cisco.com">Cisco Meraki</a>.

        Unprofessionally, I try my hand at all sorts of things that catch my interest.

        { spacer }

          At work I spend my time working between the domains of machine learning, software engineering, and research into network measurement. I tackle problems such as meaningful passive measurement of TCP/UDP flows on the network or forecasting network usage. The work spans the planning, experimentation, and delivery of new features to production. I can work anyware from the data side to the UI (although much prefer the machine learning work).

        { spacer }

          I am also very interested in sustainable agriculture, food systems, and earth systems. Presently diving deeper into groundwater monitoring and storage as it pertains to climate change. Previously, I have been a part of the Clement St. Sunday farmers market helping to run the Bounty Box CSA program.
      </div>
    </div>
  );
};

export default About;
