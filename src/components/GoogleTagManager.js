import React, { useEffect } from "react";

const GoogleTagManager = () => {


	let GTM_ID = "GTM-MCJH2HP2";

	useEffect(() => {
		const loadGoogleTagManagerScript = () => {
			const script = document.createElement("script");
			script.async = true;
			script.src = `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`;
			document.body.appendChild(script);

			window.dataLayer = window.dataLayer || [];
			function gtag() {
				window.dataLayer.push(arguments);
			}
			gtag("js", new Date());
			gtag("config", GTM_ID, {
				page_path: window.location.pathname,
			});
		};

		loadGoogleTagManagerScript();
	}, []);

	return <div>{/* Your component content */}</div>;
};

export default GoogleTagManager;
