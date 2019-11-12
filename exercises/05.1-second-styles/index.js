import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const buttonStyles = {
	//write button styles here
	fontSize: "16px",
	color: "black",
	background: "yellow"
};

const badgeStyles = {
	//write the span styles here
	fontSize: "12px",
	color: "white"
};

const Badge = props => {
	return (
		<button style={buttonStyles} type="button" className="btn btn-light">
			{props.label}
			<span style={badgeStyles} className="badge badge-pill badge-danger">
				{props.number}
			</span>
		</button>
	);
};
Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string
};
//dont forget to change the label
ReactDOM.render(<Badge label="Alerts" number="2" />, document.querySelector("#myDiv"));
