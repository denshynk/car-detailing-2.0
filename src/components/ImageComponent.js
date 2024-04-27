// ImageComponent.js
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ImageComponent = ({ showImageComponent }) => {
	const [showImage, setShowImage] = useState(false);
	const [showLines, setShowLines] = useState(false);
	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);

	const headlineRef = useRef();
	gsap.registerPlugin(ScrollTrigger);
	useLayoutEffect(() => {
		gsap.fromTo(
			".image-container",
			{
				opacity: 0,
				x: 1000,
			},
			{
				opacity: 1,
				x: 0,

				scrollTrigger: {
					scroller: ".image-container",
					trigger: ".image-container",
					start: "top center",
					end: "bottom center",
					markers: true,
					duration: 50,
				},
			}
		);
	});

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 600);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (headlineRef) {
			setShowImage(true);
			setTimeout(() => {
				setShowLines(true);
			}, 2000);
		} else {
			setShowImage(false);
			setShowLines(false);
		}
	}, [showImageComponent]);

	return isWideScreen ? (
		<div className={`image-container`}>
			<>
				<div className={`line line1${showLines ? " show" : ""}`}>
					<div className="lineText">
						<h2>Автооптика</h2>
					</div>
				</div>
				<div className={`line line2${showLines ? " show" : ""}`}>
					<div className="lineText">
						<h2>Автозапуск</h2>
					</div>
				</div>
				{/* <div className={`line line3${showLines ? " show" : ""}`}>
					<div className="lineText">
						<h2>Сигналізація</h2>
					</div>
				</div>
				<div className={`line line4${showLines ? " show" : ""}`}>
					<div className="lineText">
						<h2>Дотягувач дверей</h2>
					</div>
				</div> */}
				<div className={`line line5${showLines ? " show" : ""}`}>
					<div className="lineText">
						<h2 className="h22">Тонування </h2>
					</div>
				</div>
				<div className={`line line6${showLines ? " show" : ""}`}>
					<div className="lineText">
						<h2>Шумо-вiбро iзоляція</h2>
					</div>
				</div>
				<div className={`line line7${showLines ? " show" : ""}`}>
					<div className="lineText">
						<h2>Системи паркування</h2>
					</div>
				</div>
			</>

			<img
				src="/img/bmw4.png"
				style={{ width: "80%" }}
				alt="Описание изображения"
			/>
		</div>
	) : (
		<div className={`image-container-phone ${showImage ? "show" : ""}`}>
			<>
				<div className={`line-phone line1-phone${showLines ? " show" : ""}`}>
					<div className="lineText-phone">
						<h2>Системи паркування</h2>
					</div>
				</div>
				<div className={`line-phone line2-phone${showLines ? " show" : ""}`}>
					<div className="lineText-phone">
						<h2>Шумо-вiбро iзоляція</h2>
					</div>
				</div>
				<div className={`line-phone line3-phone${showLines ? " show" : ""}`}>
					<div className="lineText-phone">
						<h2>Тонування</h2>
					</div>
				</div>
				{/* <div className={`line-phone line4-phone${showLines ? " show" : ""}`}>
					<div className="lineText-phone">
						<h2 className="h22">Дотягувач дверей</h2>
					</div>
				</div>
				<div className={`line-phone line5-phone${showLines ? " show" : ""}`}>
					<div className="lineText-phone">
						<h2 className="h22">Сигналізація</h2>
					</div>
				</div> */}
				<div className={`line-phone line6-phone${showLines ? " show" : ""}`}>
					<div className="lineText-phone">
						<h2 className="h22">Автозапуск </h2>
					</div>
				</div>
				<div className={`line-phone line7-phone${showLines ? " show" : ""}`}>
					<div className="lineText-phone">
						<h2 className="h22">Автооптика</h2>
					</div>
				</div>
			</>

			<img src="/img/m4.png" alt="Описание изображения" />
		</div>
	);
};

export default ImageComponent;
