import React from "react";
import { Link } from "react-router-dom";

import styles from "./Drawer.module.scss";

function Drawer({
	opened,
	handleLinkClick,
	toggleBasket,
	drawerTop,
}) {
	return (
		<div
			className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}
			style={{ top: `${drawerTop}px` }}
		>
			<div className={styles.drawer}>
				<div className="p-30 d-flex flex-column">
					<Link
						to="/"
						onClick={() => {
							handleLinkClick("/");
							toggleBasket();
						}}
					>
						Головна
					</Link>
					<Link
						to="/save"
						onClick={() => {
							handleLinkClick("/save");
							toggleBasket();
						}}
					>
						Захист вiд викрадення
					</Link>
					<Link
						to="/shumoizol"
						onClick={() => {
							handleLinkClick("/shumoizol");
							toggleBasket();
						}}
					>
						Шумо та вiбро iзоляцiя
					</Link>
					<Link
						to="/zahysnaplivka"
						onClick={() => {
							handleLinkClick("/zahysnaplivka");
							toggleBasket();
						}}
					>
						Захисна плiвка i тонування
					</Link>
					<Link
						to="/detailing"
						onClick={() => {
							handleLinkClick("/detailing");
							toggleBasket();
						}}
					>
						Детейлiнг
					</Link>

					<Link
						to="/dodatkoviposlugy"
						onClick={() => {
							handleLinkClick("/dodatkoviposlugy");
							toggleBasket();
						}}
					>
						Додаткове обладнання
					</Link>
					<Link
						to="/faq"
						onClick={() => {
							handleLinkClick("/faq");
							toggleBasket();
						}}
					>
						Питання відповідь
					</Link>
					<Link
						to="/galery"
						onClick={() => {
							handleLinkClick("/galery");
							toggleBasket();
						}}
					>
						Галерея
					</Link>

					<div className="contentBasket d-flex">
						<div className="d-flex flex-column w100p justify-around">
							<div className="d-flex justify-center ">
								<div className={styles.contact}>
									<a
										className="d-flex"
										style={{ width: "30px" }}
										href="https://g.co/kgs/HgQFxDY"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											width="30px"
											height="30px"
											src={process.env.PUBLIC_URL + "/img/Maps.png"}
											alt="Maps"
										/>
									</a>

									<a
										className="d-flex"
										style={{ width: "30px" }}
										href="https://t.me/AutoSafeCulture"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											width={"30px"}
											height={"30px"}
											src={process.env.PUBLIC_URL + "/img/Telegram.svg"}
											alt="Telegram"
										/>
									</a>
									<a
										className="d-flex"
										style={{ width: "30px" }}
										href="https://vibr.cc/380730040066"
										rel="noopener noreferrer"
									>
										<img
											width={"30px"}
											height={"30px"}
											src={process.env.PUBLIC_URL + "/img/Viber.png"}
											alt="Viber"
										/>
									</a>
									<a
										className="d-flex"
										style={{ width: "30px" }}
										href="https://www.instagram.com/auto.safe.culture?igsh=MTBoa2xqcXdiN3ZjMg=="
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											width={"30px"}
											height={"30px"}
											src={process.env.PUBLIC_URL + "/img/instagram.png"}
											alt="Inst"
										/>
									</a>
									<a
										className="d-flex"
										style={{ width: "30px" }}
										href="https://www.tiktok.com/@autosafeculture"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											width={"30px"}
											height={"30px"}
											src={process.env.PUBLIC_URL + "/img/tik-tok.png"}
											alt="TikTok"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Drawer;
