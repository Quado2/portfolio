import "./Portfolio.css";
import RollText from "../../Components/RollText/RollText";
import Project from "../../Components/Project/Project";
import useOnVisible from "../../hooks/useOnVisible";
import { useEffect } from "react";

import paradiso from "../../images/paradiso.png";
import medex from "../../images/Medex.webp";
import goodnews from "../../images/goodnews.png";
import vreg from "../../images/vreg.webp";
import nms from "../../images/nms1.PNG";

const portfolioData = [
  {
    title: "V-REG",
    description:
      "Official Web Application for registeration and tracking of Vehicles in Nigeria",
    stacks:
      "Next Js, Typescript, Styled Component, Redux Test Driven Development, Cypress",
    pageLink: "https://vreg.gov.ng/",
    githubLink: "#",
    imageLink: { vreg },
  },

  {
    title: "Numbering Management System",
    description:
      "Web application for registeration and management of number blocks by telecommunication companies in Nigeria",
    stacks:
      "Springboot, Microservices, Websockets, RabbitMQ, JUnit 5, React, Typescript, Tomcat, Puppeter and Cucumber js",
    pageLink: "https://numbering.ncc.gov.ng/",
    githubLink: "#",
    imageLink: { nms },
    right: true,
  },
  {
    title: "Medex",
    description:
      "Online market place for stakeholders in drugs and medical equipment",
    stacks: "React, Ruby on Rails, Typescript, RTL, Cypress",
    pageLink: "https://medex-dev.ogtlprojects.com/",
    githubLink: "#",
    imageLink: { medex },
  },

  {
    title: "Paradiso Technologies",
    description:
      "Web application built for Paradiso Technologies Limited, a laser and router service company in Nigeria",
    stacks: "React, Node js, Docker, Mysql",
    pageLink: "https://www.paradisotechs.com/",
    githubLink: "https://github.com/Quado2/paradiso",
    imageLink: { paradiso },
    right: true,
  },
  {
    title: "Goodnews Baptist Church ",
    description:
      "Official web application built for Goodnews of Christ Baptist Church, Awka.",
    stacks:
      "Next Js, GraphQl, Typescript, Styled Component, Test Driven Development",
    pageLink: "https://www.propheticvoice.online/",
    githubLink: "https://github.com/Quado2/goodnews",
    imageLink: { goodnews },
  },
];

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const options = {
    rootMargin: "0px 0px -200px 0px",
  };
  const [setRef, appearClass] = useOnVisible(options);

  return (
    <div
      className={` portfolio-wrapper mx-6 mt-24 text-5xl sm:text-7xl text-skin-button`}
    >
      <RollText text="My Portfolio" className="text-7xl" />
      <p
        ref={setRef}
        className={` ${appearClass} --removeNow mt-5 text-base text-left text-skin-muted`}
      >
        Here are a few projects that I have led teams to deliver in the recent
        past
      </p>
      <div
        className="projects mt-10  flex  w-full
                    justify-center items-center flex-wrap "
      >
       
        <Project
          title="V-REG"
          description="Official Web Application for registeration and tracking of Vehicles in Nigeria"
          stacks="Next Js, Typescript, Styled Component, Redux Test Driven Development, Cypress"
          pageLink="https://vreg.gov.ng/"
          githubLink="#"
          imageLink={vreg}
        />

        <Project
          title="Numbering Management System"
          description="Web application for registeration and management of number blocks by telecommunication companies in Nigeria"
          stacks="Springboot, Microservices, Websockets, RabbitMQ, JUnit 5, React, Typescript, Tomcat, Puppeter and Cucumber js"
          pageLink="https://numbering.ncc.gov.ng/"
          githubLink="#"
          imageLink={nms}
          right
        />

        <Project
          title="Medex"
          description="Online market place for stakeholders in drugs and medical equipment"
          stacks="React, Ruby on Rails, Typescript, RTL, Cypress"
          pageLink="https://medex-dev.ogtlprojects.com/"
          githubLink="#"
          imageLink={medex}
          left
        />

        <Project
          title="Paradiso Technologies"
          description="Web application built for Paradiso Technologies Limited, a laser and router service company in Nigeria"
          stacks="React, Node js, Docker, Mysql"
          pageLink="https://www.paradisotechs.com/"
          githubLink="https://github.com/Quado2/paradiso"
          imageLink={paradiso}
          right
        />

        <Project
          title="Goodnews Baptist Church "
          description="Official web application built for Goodnews of Christ Baptist Church, Awka."
          stacks="Next Js, GraphQl, Typescript, Styled Component, Test Driven Development"
          pageLink="https://www.propheticvoice.online/"
          githubLink="https://github.com/Quado2/goodnews"
          imageLink={goodnews}
        />
      </div>
    </div>
  );
}

export default Portfolio;
