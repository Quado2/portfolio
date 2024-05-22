import "./Work.scss";
import useOnVisible from "../../hooks/useOnVisible";
import { useState } from "react";

function Work(props) {
  const options = {
    rootMargin: "0px 0px -200px 0px",
  };
  const [setRef, appearClass] = useOnVisible(options);

  const { jd, company, period, role } = props;

  const [showAll, setShowAll] = useState(false);

  return (
    <div
      ref={setRef}
      className={`${appearClass} --removeNow work w-100 flex overflow-hidden`}
    >
      <div className={` w-7 flex flex-col items-center justify-center`}>
        <div className=" outer-ball bg-skin-button  rounded-3xl flex justify-center items-center">
          <div className="inner-ball w-5 h-5 bg-skin-base rounded-3xl"></div>
        </div>
        <div className={` w-px bg-skin-muted h-full `}></div>
      </div>
      <div className="ml-2 pb-8 relative">
        <div className=" w-100 flex ">
          <h3 className=" pl-1 text-skin-base w-100 text-left ">
            {role}
            <span className="text-skin-muted"> {"at " + company} </span>
          </h3>
        </div>
        <div
          style={{ maxHeight: showAll ? "150vh" : "50vh" }}
          className="details transition-all duration-700 ease-in-out mb-10 text-base text-skin-muted text-left
                     mx-0 sm:mx-4  px-2 sm:px-7 z-5"
        >
          <h4 className="pt-7 pb-3 text-skin-button">{period}</h4>
          {jd &&
            jd
              .split(";")
              .map((jobdesc) => <p className=" mt-2 pb-4 ">{jobdesc}</p>)}
        </div>
        <div className={`${!showAll ? "gradient-hide": ""} from-20% h-72 w-full z-10 absolute bottom-0 right-0 flex justify-center items-end  pb-12`}>
          <button 
            onClick={() => setShowAll((prev) => !prev)}
            className="border cursor-pointer
                    border-skin-button_sec 
                     mt-12 mx-0 text-sm"
          >
            <h6 className="text-skin-button_sec  py-1.5 px-10 ">
              {showAll ? "Show Less" : "View More"}
            </h6>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Work;
