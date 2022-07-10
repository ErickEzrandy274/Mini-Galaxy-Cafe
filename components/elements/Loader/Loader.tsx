import React from "react";

const Loader = () => {
	return (
		<div className="cascade mx-auto my-20 h-5 relative grid grid-cols-5 gap-3">
			<div className="border-[.75rem] border-white rounded-sm"></div>
			<div className="border-[.75rem] border-white rounded-sm"></div>
			<div className="border-[.75rem] border-white rounded-sm"></div>
			<div className="border-[.75rem] border-white rounded-sm"></div>
			<div className="border-[.75rem] border-white rounded-sm"></div>
		</div>
	);
};

export default Loader;
