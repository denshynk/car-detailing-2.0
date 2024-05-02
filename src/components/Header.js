import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Drawer from "./Drawer";
import Headroom from "react-headroom";

function Header({ isWideScreen, scrolTo, setDrawerTop, drawerTop, isActiveLink,setIsActiveLink,handleLinkClick}) {
	const [burgerOpened, setBurgerOpened] = React.useState(false);
	const [isChecked, setIsChecked] = useState(false);

	const toggleBasket = () => {
		setBurgerOpened(!burgerOpened);
		document.body.style.overflow = burgerOpened ? "auto" : "hidden";
		setIsChecked(!isChecked);
	};
	const hadleClickHome = () => {
		setIsActiveLink(null);
	};

	const headerRef = useRef(null);

	useEffect(() => {
		// Функция обновления drawerTop
		const updateDrawerTop = () => {
			if (headerRef.current) {
				const headerHeight = headerRef.current.offsetHeight;
				setDrawerTop(headerHeight);
			}
		};

		// Создание нового экземпляра MutationObserver
		const observer = new MutationObserver(updateDrawerTop);

		// Настройка наблюдения за изменениями внутри document.body
		observer.observe(document.body, {
			attributes: true,
			childList: true,
			subtree: true,
		});

		// Вызов функции обновления при монтировании компонента и при изменении ширины экрана
		updateDrawerTop();
		window.addEventListener("resize", updateDrawerTop);

		// Обновление высоты с небольшой задержкой после загрузки DOM
		setTimeout(updateDrawerTop, 10);

		// Отписка от событий при размонтировании компонента и от наблюдения за изменениями DOM
		return () => {
			window.removeEventListener("resize", updateDrawerTop);
			observer.disconnect();
		};
	}, [setDrawerTop]); // Зависимость от headerRef

	if (!isWideScreen) {
		return (
			<>
				<Headroom>
					<div className="header" ref={headerRef}>
						<div className="stuctureHeader d-flex justify-between">
							<Link
								to="/"
								onClick={() => {
									hadleClickHome();
									scrolTo();
								}}
							>
								<img
									src={process.env.PUBLIC_URL + "/img/ASC_logo_5_RGB.svg"}
									className="animate__animated animate__flash"
									alt="Logo"
									width={"100px"}
								/>
							</Link>
							<div className="hamburger">
								<input
									className="checkbox"
									type="checkbox"
									onClick={toggleBasket}
									checked={isChecked}
									onChange={() => setIsChecked(!isChecked)}
								/>
								<svg fill="none" viewBox="0 0 50 50" height="40" width="40">
									<path
										className="lineTopHamburger lineHamburger"
										strokeLinecap="round"
										strokeWidth="4"
										stroke="white"
										d="M6 11L44 11"
									></path>
									<path
										strokeLinecap="round"
										strokeWidth="4"
										stroke="white"
										d="M6 24H43"
										className="lineMidHamburger lineHamburger"
									></path>
									<path
										strokeLinecap="round"
										strokeWidth="4"
										stroke="white"
										d="M6 37H43"
										className="lineBottomHamburger lineHamburger"
									></path>
								</svg>
							</div>
						</div>
					</div>
				</Headroom>

				<Drawer
					drawerTop={drawerTop}
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
		<div className="header" ref={headerRef}>
			<div className="stuctureHeader">
				<Link to="/" onClick={() => hadleClickHome()}>
					<img
						src={process.env.PUBLIC_URL + "/img/ASC_logo_5_RGB.svg"}
						className="animate__animated animate__flash"
						alt="Logo"
						width={"22%"}
					/>
				</Link>

				<div className="d-flex flex-column w100p justify-around ">
					<div className="d-flex justify-end ">
						<div className=" contact">
							<a
								className="d-flex"
								style={{ width: "20px" }}
								href="https://g.co/kgs/HgQFxDY"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									width="20px"
									height="20px"
									src={process.env.PUBLIC_URL + "/img/Maps.png"}
									alt="Maps"
								/>
							</a>

							<a
								className="d-flex"
								style={{ width: "20px" }}
								href="https://t.me/AutoSafeCulture"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									width={"20px"}
									height={"20px"}
									src={process.env.PUBLIC_URL + "/img/Telegram.svg"}
									alt="Telegram"
								/>
							</a>
							<a
								className="d-flex"
								style={{ width: "20px" }}
								href="viber://chat?number=+380730040066"
								rel="noopener noreferrer"
							>
								<img
									width={"20px"}
									height={"20px"}
									src={process.env.PUBLIC_URL + "/img/Viber.png"}
									alt="Viber"
								/>
							</a>
							<a
								className="d-flex"
								style={{ width: "20px" }}
								href="https://www.instagram.com/auto.safe.culture?igsh=MTBoa2xqcXdiN3ZjMg=="
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									width={"20px"}
									height={"20px"}
									src={process.env.PUBLIC_URL + "/img/instagram.png"}
									alt="Inst"
								/>
							</a>
							<a
								className="d-flex"
								style={{ width: "20px" }}
								href="https://www.tiktok.com/@autosafeculture"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									width={"20px"}
									height={"20px"}
									src={process.env.PUBLIC_URL + "/img/tik-tok.png"}
									alt="TikTok"
								/>
							</a>
						</div>
					</div>
					<div className=" d-flex justify-end">
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
								Шумо та вiбро iзоляцiя
							</Link>
							<Link
								className={isActiveLink === "/zahysnaplivka" ? "active" : ""}
								to="/zahysnaplivka"
								onClick={() => handleLinkClick("/zahysnaplivka")}
							>
								Захисна плiвка i тонування
							</Link>
							<Link
								className={isActiveLink === "/dodatkoviposlugy" ? "active" : ""}
								to="/dodatkoviposlugy"
								onClick={() => handleLinkClick("/dodatkoviposlugy")}
							>
								Додаткове обладнання
							</Link>
							<Link
								className={isActiveLink === "/detailing" ? "active" : ""}
								to="/detailing"
								onClick={() => handleLinkClick("/detailing")}
							>
								Детейлiнг
							</Link>
							<Link
								className={isActiveLink === "/faq" ? "active" : ""}
								to="/faq"
								onClick={() => handleLinkClick("/faq")}
							>
								Питання відповідь
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
