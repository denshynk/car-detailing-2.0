// ImageComponent.js
import React, { useEffect, useState, useRef } from "react";

const ImageComponent = ({ showImageComponent }) => {
	const [showImage, setShowImage] = useState(false);
	const [showLines, setShowLines] = useState(false);
	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 750);
	const [burgerOpened, setBurgerOpened] = React.useState(false);

	const headlineRef = useRef();

	const openBurger = () => {
		setBurgerOpened(true);
		document.body.style.overflow = "hidden"; // Запретить скролл body
	};

	const closeBurger = () => {
		setBurgerOpened(false);
		document.body.style.overflow = "auto"; // Включить скролл body
	};

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 750);
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
		<div className={`image-container ${showImage ? "show" : ""}`}>
			<>
				<div className={`line line1${showLines ? " show" : ""}`}>
					<div className="lineText">
						<h2>Автозапуск</h2>
					</div>
				</div>
				<div className={`line line2${showLines ? " show" : ""}`}>
					<div className="lineText">
						<h2>Сигналізація</h2>
					</div>
				</div>
				<div className={`line line3${showLines ? " show" : ""}`}>
					<div className="lineText">
						<h2>Тонування</h2>
					</div>
				</div>
				<div className={`line line4${showLines ? " show" : ""}`}>
					<div className="lineText">
						<h2 className="h22">Шумо-вiбро iзоляція </h2>
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
						<h2>Автозапуск</h2>
					</div>
				</div>
				<div className={`line-phone line2-phone${showLines ? " show" : ""}`}>
					<div className="lineText-phone">
						<h2>Сигналізація</h2>
					</div>
				</div>
				<div className={`line-phone line3-phone${showLines ? " show" : ""}`}>
					<div className="lineText-phone">
						<h2>Тонування</h2>
					</div>
				</div>
				<div className={`line-phone line4-phone${showLines ? " show" : ""}`}>
					<div className="lineText-phone">
						<h2 className="h22">Шумо-вiбро iзоляція </h2>
					</div>
				</div>
			</>

			<img src="/img/m4.png" alt="Описание изображения" />
		</div>
	);
};

export default ImageComponent;
