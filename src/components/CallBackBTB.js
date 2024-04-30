import React from "react";

function CallBackBTN({ isWideScreen, handleCallBack, handleCallBackDesktop }) {
	if (!isWideScreen)
		return (
			<>
				<div className="callBackBTN">
					<button onClick={handleCallBack}>Зворотній звязок</button>
				</div>
			</>
		);
	else {
		return (
			<>
				<div className="callBackBTN">
					<button onClick={handleCallBackDesktop}>Зворотній звязок</button>
				</div>
			</>
		);
	}
}

export default CallBackBTN;
