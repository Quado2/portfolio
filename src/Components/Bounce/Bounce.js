import "./Bounce.scss";

export default function Bounce() {
	return (
		<div className="Bounce">
			<div className="scene">
				<div className="floor"></div>
				<div className="cube">
					<div className="front"></div>
					<div className="back"></div>
					<div className="left"> </div>
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
