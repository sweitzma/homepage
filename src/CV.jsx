import React, { useState } from 'react';
import { LoremIpsum } from "lorem-ipsum";


const Section = (props) => {
  const [open, setOpen] = useState(!props.collapsed);
  
  let sym;
  let innerContent;
  if (open) {
    sym = "▼";
    innerContent = props.children;
  } else {
    sym = "▶";
    innerContent = (<div />);
  }

  return (
    <div className="border-l-2 border-gray-600 m-5">
      <div className="p-3">
        <div className="text-xl font-bold font-mono pb-3">
          { props.title } 
          <button className="pl-4" onClick={ () => setOpen(!open) }> { sym } </button>
        </div>
        { innerContent }
      </div>
    </div>
  );
};

const Header = (props) => {
  return (
    <div className="mb-4">
      <div className="flex flex-row justify-between italic text-xl">
        <div>
          { props.where }
        </div>
        <div className="text-lg">
          { props.when }
        </div>
      </div>
      { props.children }
    </div>
  );
};

const AddOn = (props) => {
  return (
    <div className="italic ml-2 -mt-1">
       > { props.text }
    </div>
  );
};

const Skill = (props) => {
  // enumerate these out so that PurgeCSS keeps them
  const levelToClassName = [
    "w-0", "w-1", "w-2", "w-3", "w-4",
    "w-5", "w-6", "w-7", "w-8", "w-9",
  ];
  const width = levelToClassName[props.level];
  return (
    <div className="w-36 my-0.5 flex flex-row justify-between">
      <div>
        { props.name }
      </div>
      <div className="place-self-center">
        <div className={ `rounded-sm h-3 bg-green-400 ${width}` }/>
        <div className="rounded-sm border border-gray-400 h-3 w-9 -mt-3"/>
      </div>
    </div>
  );

};

const CV = () => {
  const lorem = new LoremIpsum();
  return(
    <div className="w-full xl:w-9/12 mx-auto">
      <div className="text-center m-3 bg-red-100 w-10/12 mx-auto rounded-lg">
        See my resume as a PDF <a className="underline" href="https://github.com/sweitzma/tex-resume/raw/master/sam-weitzman-resume.pdf">here</a>.
      </div>

      <Section title="work">
        <Header where="Cisco Meraki" when="Sep. 2019 - Present">
          <AddOn text="Machine Learning Engineer" />
          <AddOn text="San Francisco, CA" />
        </Header>
        <Header where="Cisco Meraki" when="Sep. 2018 - Sep. 2019">
          <AddOn text="Full Stack Engineer" />
          <AddOn text="San Francisco, CA" />
        </Header>
      </Section>

      <Section title="education">
        <Header where="Brown Univeristy" when="Sep. 2014 - May 2018">
          <AddOn text="B.Sc. Mathematics - Computer Science" />
          <AddOn text="GPA: 4.0" />
          <AddOn text="Providence, RI" />
        </Header>
      </Section>

      <Section title="programming languages" collapsed>
        <Skill level={ 8 } name="Python"/>
        <Skill level={ 7 } name="Sql"/>
        <Skill level={ 6 } name="Bash"/>
        <Skill level={ 8 } name="Ruby"/>
        <Skill level={ 5 } name="Javascript"/>
        <Skill level={ 5 } name="LaTeX"/>
      </Section>

      <Section title="scientific libraries" collapsed>
        <Skill level={ 8 } name="Pandas"/>
        <Skill level={ 7 } name="Numpy"/>
        <Skill level={ 5 } name="Scikit-learn"/>
        <Skill level={ 6 } name="Dask"/>
        <Skill level={ 7 } name="Matplotlib"/>
        <Skill level={ 5 } name="Numpyro"/>
      </Section>

      <Section title="tools" collapsed>
        <Skill level={ 8 } name="Docker"/>
        <Skill level={ 7 } name="Postgres"/>
        <Skill level={ 8 } name="Git"/>
        <Skill level={ 6 } name="AWS"/>
        <Skill level={ 6 } name="Elasticsearch"/>
        <Skill level={ 3 } name="Terraform"/>
        <Skill level={ 4 } name="Kubeflow"/>
        <Skill level={ 6 } name="MLFlow"/>
      </Section>

      <Section title="web development libraries" collapsed>
        <Skill level={ 7 } name="Rails"/>
        <Skill level={ 5 } name="React"/>
        <Skill level={ 4 } name="TailwindCSS"/>
        <Skill level={ 3 } name="Flask"/>
      </Section>

      {/* future section - volunteering? */}
      {/* future section - research */}
      {/* future section - patent pending */}

    </div>
  );
};

export default CV;
