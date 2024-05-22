import RollText from "../../Components/RollText/RollText";
import Work from "../../Components/Work/Work";
import { useEffect } from "react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Outsource Global Technologies Limited",
    period: "June 2022 - Present (Full Time)",
    jd: `•	Operating as a senior software engineer at Africa’s leading business and knowledge process outsourcing company, serving clients in the US, UK and Japan.;
    •	Worked collaboratively with five different teams on five distinct products, each comprising two front-end developers, two back-end developers, and one UI/UX designer;
    •	Designed and developed reusable UI components using standard front-end design patterns;
    •	Wrote clean, efficient, reusable, fast, non-blocking, and testable web sockets for real-time communications;
    •	Increased the rate of feature delivery by 200% within the first month, which led to a promotion to the role of a senior developer after just two months as a mid-level developer;
    •	Utilized AWS Lambda, API gateways, Amazon Simple Queue Service (Amazon SQS), and Amazon Simple Notification Service (Amazon SNS) to implement an event-driven architecture for backlog payments;
    •	Employed Docker and Kubernetes for containerization;
    •	Practiced test-driven development (TDD) for unit and integration testing using Jest and behavior-driven development (BDD) for end-to-end testing with Puppeteer and Cucumber;
    •	Collaborated with stakeholders and the software development team to refine project requirements.;
    •	Participated in code reviews, providing constructive feedback to enhance code quality and maintainability.
    `,
  },
  {
    role: "Senior Software Engineer",
    company: "Molcom Multi-Concepts Limited, Abuja, Nigeria.",
    period: "Nov 2022 - Present(Part Time)",
    jd: `• Currently operating as a senior software developer, leading a team
    comprising one UI/UX designer, two front-end developers, and two backend developers.;
    • Designed and architected software for a numbering management system
    used by the Nigerian Communications Commission (NCC) for administering
    number blocks in Nigeria.;
    • Designed flow algorithms for various product features.;
    Developed APIs using Spring Boot;
    • Built UI components using React.js and integrated them with APIs developed.;
    for the back-end using Spring Boot.;
    • Managed collaborations and versioning with git and github.;
    • Implemented highly efficient and testable web socket for real time.;
    notifications using spring boot web socket and socket.io.;
    • Authored unit, integration, and end-to-end tests for the application using
    tools like Jest and Cypress.;
    • Managed deployments to tomcat.;
    `,
  },
  {
    role: "Full Stack Developer",
    company: "BizGem, VI, Lagos, Nigeria.",
    period: "Dec 2021 - Jun 2022 (Full Time)",
    jd: `
    • Took charge of the design and development of reusable React front-end UI
    components.;
    •C reated clean, high-performance APIs and GraphQL endpoints in Next js
    framework and TypeScript.;
    • Designed and implemented database schemas for SQL and NoSQL
    databases using Prisma object-relational mapping (ORM) tool.;
    • Integrated UI with REST APIs and GraphQL back ends.;
    • Maintained a legacy codebase based on Backbone and Marionette.js.;
    • Authored end-to-end tests using Cypress.;
    ;
    `,
  },
  {
    role: "Full Stack Developer",
    company: "Paradiso Technologies Limited.",
    period: "Mar 2019 - August 2021 (Full Time)",
    jd: `• Engaged in full-stack development in various projects for different clients.;
    • Developed customized applications for a diverse range of clients using
    Node.js, Spring Boot, React.js, and Next.js.;
    • Employed Node.js for server-side development to achieve optimal
    performance and responsiveness.;
    • Designed and implemented scalable, maintainable APIs using Spring Boot,
    enhancing communication between front-end and back-end systems
    Implemented responsive and user-friendly interfaces using React.js and
    Next.js, tailored to meet specific client design criteria.;
    • Applied Agile/Scrum methodologies for delivering software solutions in
    iterative and incremental cycles, focusing on client satisfaction.;
    • Conducted thorough code reviews.;
    • Worked with cross-functional teams to maintain code quality and meet
    client expectations.;
    • Collaborated with clients to identify requirements, analyze business needs,
    and devise effective technical solutions.;
    `,
  },
];

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
        {experiences?.map((exp) => (
          <Work
            role={exp.role}
            company={exp.company}
            period={exp.period}
            jd={exp.jd}
          />
        ))}

      </div>
    </div>
  );
}

export default Experience;
