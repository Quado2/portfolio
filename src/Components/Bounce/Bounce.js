import "./Bounce.scss";

export default function Bounce() {
	return (
		<div className="Bounce">
			<div className="scene">
				<div className="floor"></div>
				<div className="cube">
					<div className="front"><h6></h6></div>
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
