import "./About.scss";
import RollText from "../../Components/RollText/RollText";
import Bounce from "../../Components/Bounce/Bounce";

function About() {
	return (
		<div className="about w-100  m-0 mb-20">
			<div className="about-top text-skin-button  w-100 text-5xl mx-5">
				<RollText text="About Me" />
				<div className="w-full about-level2 mt-5 flex flex-col items-start justify-start ">
					<div className={`w-full md:w-1/2 `}>
						<h4 className="about-description text-base text-skin-muted pr-5 text-left">
							Hello! I’m Chikwado Emmanuel. I'm extremely passionate about software
							development, I love the challenges that comes with it and the exploding
							joy that comes after you've nailed it. I have skills in lots of front end
							tools as well as backend. I learn very quickly, goal driven and prefers
							to work as a team, albeit confident to deliver works personally.
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
                    <div className={`w-full`}>
                        <Bounce />
                    </div>
				</div>
			</div>
		</div>
	);
}

export default About;
