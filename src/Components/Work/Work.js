import "./Work.scss";
import useOnVisible from "../../hooks/useOnVisible";

function Work(props) {
	const options = {
		rootMargin: "0px 0px -200px 0px",
	};
	const [setRef, appearClass] = useOnVisible(options);

	const { jd, company, period, role } = props;

	return (
		<div ref={setRef} className={`${appearClass} --removeNow work w-100 flex`}>
			<div className={` w-7 flex flex-col items-center justify-center`}>
				<div className=" outer-ball bg-skin-button  rounded-3xl flex justify-center items-center">
					<div className="inner-ball w-5 h-5 bg-skin-base rounded-3xl"></div>
				</div>
				<div className={` w-px bg-skin-muted h-full `}></div>
			</div>
			<div className="ml-2">
				<div className=" w-100 flex ">
					<h3 className=" pl-1 text-skin-base w-100 text-left ">
						{role}
						<span className="text-skin-muted"> {"at " + company} </span>
					</h3>
				</div>

				<div
					className="details mb-10 text-base text-skin-muted text-left
                     mx-4  px-7"
				>
					<h4 className="pt-7">{period}</h4>
					{jd && jd.split(';').map(jobdesc => <p className=" mt-2 pb-5 ">{jobdesc}</p>)}
					
				</div>
			</div>
		</div>
	);
}

export default Work;
