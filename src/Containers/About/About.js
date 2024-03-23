import RollText from "../../Components/RollText/RollText";
import Bounce from "../../Components/Bounce/Bounce";

import useOnVisible from "../../hooks/useOnVisible";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const options = {
    rootMargin: "0px 0px -200px 0px",
  };
  const [setRef, appearClass] = useOnVisible(options);

  return (
    <div className="about m-0 mt-20 ">
      <div className="about-top text-skin-button text-5xl md:text-7xl mx-5">
        <RollText text="About Me" />
        <div
          ref={setRef}
          className={`${appearClass} --removeNow w-full about-level2 mt-5 flex flex-wrap items-start justify-start `}
        >
          <div className={`w-full md:w-1/2 `}>
            <h4 className="about-description text-base md:text-lg text-skin-muted pr-5 text-justify">
              I am is a skilled Full-Stack Engineer with 5+ years of experience
              in building efficient, scalable software across diverse domains. I
              have led various projects in the fields of medicine, government,
              eCommerce, Web3 finance, and education, using microservices and
              technologies like RabbitMQ, Kafka, Amazon Web Services (AWS) such
              as AWS Lambda, AWS SQS and SNS, Api Gateways and many others. I’m
              also proficient in designing software architectures applying
              relevant software design patterns and leveraging technologies like
              Java, Spring Boot, Ruby on Rails (Rails), Node.js, GraphQL,
              TypeScript, React.js, and Next.js. <br/> <br/>
							On top of this,  I am an
              excellent communicator with strong English language skills, both
              spoken and written. I can effectively iterate with corporate
              executives to add definitions to technical requirements and also
              convey ideas to same without a technical background. This ability
              ensures clear and concise communication, facilitating
              collaboration and understanding between technical and
              non-technical stakeholders.
            </h4>

            <div className="about-contact text-left mt-4 ">
              <h3 className="text-2xl">Contact</h3>
              <div className="text-base text-skin-muted flex flex-col pt-3 items-start">
                <div className="flex">
                  <h3 className="w-24 text-left">Phone:</h3>
                  <h3>+2348137796116</h3>
                </div>
                <div className="flex">
                  <span className=" w-24 text-left">Email:</span>
                  <span>chikwadonuel@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`w-full md:w-1/2`}>
            <Bounce />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
