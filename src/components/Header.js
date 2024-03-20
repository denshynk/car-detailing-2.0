import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Drawer from "./Drawer";

function Header() {
	const [isActiveLink, setIsActiveLink] = useState(null);
	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 750);
	const [burgerOpened, setBurgerOpened] = React.useState(false);
	const [isChecked, setIsChecked] = useState(false);

	const handleLinkClick = (link) => {
		setIsActiveLink(link);
		if (link === "/save") {
		} else {
		}
	};

	const toggleBasket = () => {
		setBurgerOpened(!burgerOpened);
		document.body.style.overflow = burgerOpened ? "auto" : "hidden";
		setIsChecked(!isChecked);
	};

	const hadleClickHome = () => {

		setIsActiveLink(null);
	};

	const scrolTo = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 750);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	if (!isWideScreen) {
		return (
			<>
				<div className="header">
					<div className="stuctureHeader d-flex justify-between">
						<Link to="/" onClick={() => { hadleClickHome(); scrolTo();}}>
							<img
								src="/img/Logo/ASC_logo_бiлий_на_прозорому_фонi.svg"
								className="animate__animated animate__flash"
								alt="Logo"
								width={"50px"}
							/>
						</Link>
						<div class="hamburger">
							<input
								className="checkbox"
								type="checkbox"
								onClick={toggleBasket}
								checked={isChecked}
								onChange={() => setIsChecked(!isChecked)}
							/>
							<svg fill="none" viewBox="0 0 50 50" height="50" width="50">
								<path
									class="lineTopHamburger lineHamburger"
									stroke-linecap="round"
									stroke-width="4"
									stroke="white"
									d="M6 11L44 11"
								></path>
								<path
									stroke-linecap="round"
									stroke-width="4"
									stroke="white"
									d="M6 24H43"
									class="lineMidHamburger lineHamburger"
								></path>
								<path
									stroke-linecap="round"
									stroke-width="4"
									stroke="white"
									d="M6 37H43"
									class="lineBottomHamburger lineHamburger"
								></path>
							</svg>
						</div>
					</div>
				</div>
				<Drawer
					opened={burgerOpened}
					handleLinkClick={handleLinkClick}
					isActiveLink={isActiveLink}
					setBurgerOpened={setBurgerOpened}
					setIsChecked={setIsChecked}
					toggleBasket={toggleBasket} // передаем функцию в Drawer
				/>
			</>
		);
	}

	return (
		<div className="header">
			<div className="stuctureHeader">
				<Link to="/" onClick={() => hadleClickHome()}>
					<img
						src="/img/Logo/ASC_logo_бiлий_на_прозорому_фонi.svg"
						className="animate__animated animate__flash"
						alt="Logo"
						width={"75px"}
					/>
				</Link>

				<div className="d-flex flex-column w100p justify-around ">
					<div className="d-flex justify-end ">
						<div className=" contact">
							<img
								width={"30px"}
								height={"30px"}
								src={process.env.PUBLIC_URL + "/img/Maps.png"}
								alt="Maps"
							/>
							<img
								width={"30px"}
								height={"30px"}
								src={process.env.PUBLIC_URL + "/img/Telegram.svg"}
								alt="Telegram"
							/>
							<img
								width={"30px"}
								height={"30px"}
								src={process.env.PUBLIC_URL + "/img/Viber.png"}
								alt="Viber"
							/>
						</div>
					</div>
					<div className=" d-flex justify-end ">
						<div className="containerAch">
							<Link
								className={isActiveLink === "/save" ? "active" : ""}
								to="/save"
								onClick={() => handleLinkClick("/save")}
							>
								Захист вiд викрадення
							</Link>
							<Link
								className={isActiveLink === "/shumoizol" ? "active" : ""}
								to="/shumoizol"
								onClick={() => handleLinkClick("/shumoizol")}
							>
								Шумо- вiбро iзоляцiя
							</Link>
							<Link
								className={isActiveLink === "/zahysnaplivka" ? "active" : ""}
								to="/zahysnaplivka"
								onClick={() => handleLinkClick("/zahysnaplivka")}
							>
								Захисна плiвка i тонування
							</Link>
							<Link
								className={isActiveLink === "/detailing" ? "active" : ""}
								to="/detailing"
								onClick={() => handleLinkClick("/detailing")}
							>
								Детейлiнг
							</Link>
							<Link
								className={isActiveLink === "/galery" ? "active" : ""}
								to="/galery"
								onClick={() => handleLinkClick("/galery")}
							>
								Галерея
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Header;
