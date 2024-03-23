import "./Bounce.scss";

export default function Bounce() {
	const qualities = ['Leadership','Team Work','Effective Communication','Problem Solving', 'Empathy']

	return (
		<div className="Bounce">

			<div className="texts">
				{qualities.map((quality,i)=><h4 key={i}>{quality}</h4>)}
			</div>
			<div className="scene">
				<div className="floor"></div>
				<div className="cube">
					<div className="front flex items-center justify-center">
						<h3 className='p-1 bg-white text-gray-500 text-xs w-4/5 h-4/5'
						>
							box of qualities
						</h3>
					</div>
					<div className="qualities">
					{qualities.map((quality,i)=><h5 key={i}>{quality}</h5>)}
					</div>
					
					<div className="back"></div>
					<div className="left">
						<div className="inner-top"></div>
						<div className="inner-left"></div>
						<div className="inner-bottom"></div>
						<div className="inner-right"></div>
						<div className="door"></div>
					</div>
					<div className="right"></div>
					<div className="top">
						<div className="ballShadow"></div>
					</div>
					<div className="bottom"></div>
				</div>
				<div className="ball"></div>
			</div>
		</div>
	);
}
