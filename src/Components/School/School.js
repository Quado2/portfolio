import "./School.scss";
import useOnVisible from "../../hooks/useOnVisible";

function School(props) {
	const options = {
		rootMargin: "0px 0px -150px 0px",
	};
	const [setRef, appearClass] = useOnVisible(options);

	const { grade, awards, dept, school, courses, period, role } = props;

	return (
		<div ref={setRef} className={`${appearClass} school w-100 flex`}>
			<div className={` w-7 flex flex-col items-center justify-center`}>
				<div className=" outer-ball bg-skin-base  rounded-3xl flex justify-center items-center">
					<div className="inner-ball w-5 h-5 bg-skin-button rounded-3xl"></div>
				</div>
				<div className={` w-px bg-skin-muted h-full `}></div>
			</div>
			<div className="ml-2">
				<div className=" w-100 flex ">
					
					<h3 className=" pl-1 text-skin-base w-100 text-left ">
						{dept}
						<span className="text-skin-muted"> {"at " + school} </span>
					</h3>
				</div>

				<div
					className="details mb-10 text-base text-skin-muted text-left
                     mx-4  px-7"
				>
					<h4 className="pt-7">{period}</h4>
					<h4 className="pt-3">{grade}</h4>
					{awards ? <h4 className="pt-3">{awards}</h4> : null}
					{role ? <h4 className="pt-3">{role}</h4> : null}
					{courses ? <p className=" mt-2 pb-5 ">{courses}</p> : null}
				</div>
			</div>
		</div>
	);
}

export default School;
