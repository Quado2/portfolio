import RollText from "../../Components/RollText/RollText";
import Work from "../../Components/Work/Work";
import { useEffect } from "react";

function Experience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="experience mx-5 mt-16">
      <div className=" mb-10 text-left  text-skin-button text-5xl sm:text-7xl ">
        <RollText text="Experience" />
      </div>
      <div className="pb-4 h-full">
        <Work
          role="Full Stack Developer"
          company="Quickgem digital solutions"
          period="December 2021 - Present"
          jd="
                      Building and maintaining loan application using the MVVC architecture.;
                      Providing post production support to users on application built.;
                      Paired with the team to develop in-house core banking application using agile methodology."
        />
        <Work
          role="Frontend Developer"
          company="Hotels.ng"
          period="August 2021 - Oct 2021"
          jd="Led a front-end sub team to build and integrate Google drive plugin tool.
                      Managed Real time communication in the channel using Centrifuge library.
                      Migrated the application from a native react application to a Single-SPA micro frontend.
                      Completed the internship program as one of the 300 finalists out of 12,000 participants that started."
        />
        <Work
          role="Full Stack Developer"
          company="Paradiso Technologies Limited"
          period="July 2019 - present"
          jd="Built the company’s web application where potential clients can view and make requests for the products and services.
                      Developed the administration dashboard where the contents can be managed.
                      Maintained, improved and extended the overall functionalities of the application to suit current needs."
        />
        <Work
          role="Technical Assitant and Developer"
          company="ICT unit, FUTO"
          period="May 2018 - March 2019"
          jd="Asiisted the lead programmer with software maintenance and upgrade. Trained colleagues on soft development stacks"
        />
      </div>
    </div>
  );
}

export default Experience;
