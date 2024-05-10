"use client";

import React, { useRef } from "react";

import Section from "../components/Section.js";
import Footer from "../components/Footer.js";
import Animation from "../components/Animation.js";

const Contacts = ({ drawerTop }) => {
	const section1 = useRef();
	const lastSection = useRef();
	const boxikRef = useRef(null);

	return (
		<>
			<div>
				<div className="firstPageContacts">
					<div className="map-container">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10160.16799185085!2d30.62932121927265!3d50.45894261645252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4db2c3e817919%3A0x1d89a50a5bbaf4b7!2sAuto%20Safe%20Culture!5e0!3m2!1sru!2sua!4v1715167805071!5m2!1sru!2sua"
							width="100%"
							height="40vh"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Auto Safe Culture Map"
						></iframe>
					</div>
					<div className="contactContainer d-flex  w100p" style={{ marginTop: "65vh" }}>
						<div className="contacts">
							<h1>Для звязку з нами використовуйте</h1>
							<div className="single-ctas">
								<a
									href="tel:+380730040066"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div
										className="single-cta d-flex align-center"
										style={{ backgroundColor: "green" }}
									>
										<img
											width={"30px"}
											height={"30px"}
											src={process.env.PUBLIC_URL + "/img/Call.png"}
											alt="Call"
										/>
										<span>
											<p>Мобільний телефон</p>+380730040066
										</span>
									</div>
								</a>
								<a
									href="https://t.me/AutoSafeCulture"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div
										className="single-cta d-flex align-center"
										style={{ backgroundColor: "#1a9ddf" }}
									>
										<img
											width={"30px"}
											height={"30px"}
											src={process.env.PUBLIC_URL + "/img/Telegram.svg"}
											alt="Telegram"
										/>
										<span>
											<p></p>Telegram
										</span>
									</div>
								</a>
								<a
									href="https://www.instagram.com/auto.safe.culture?igsh=MTBoa2xqcXdiN3ZjMg=="
									target="_blank"
									rel="noopener noreferrer"
								>
									<div
										className="single-cta d-flex align-center"
										style={{ backgroundColor: "#be54b7" }}
									>
										<img
											width={"30px"}
											height={"30px"}
											src={process.env.PUBLIC_URL + "/img/instagram.png"}
											alt="Inst"
										/>
										<span>
											<p></p>Instagram
										</span>
									</div>
								</a>
								{/* <a
								href="https://www.tiktok.com/@autosafeculture"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div
									className="single-cta d-flex align-center"
									style={{ backgroundColor: "black" }}
								>
									<img
										width={"30px"}
										height={"30px"}
										src={process.env.PUBLIC_URL + "/img/tik-tok.png"}
										alt="TikTok"
									/>
									<span>
										<p></p>Tik-Tok
									</span>
								</div>
							</a> */}
								<a
									href="viber://chat?number=+380730040066"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div
										className="single-cta d-flex align-center"
										style={{ backgroundColor: "#601149" }}
									>
										<img
											width={"30px"}
											height={"30px"}
											src={process.env.PUBLIC_URL + "/img/Viber.png"}
											alt="Viber"
										/>
										<span>Viber</span>
									</div>
								</a>
							</div>
						</div>
						<div className="flex d-flex align-center justify-center">
							<img
								src={process.env.PUBLIC_URL + "/img/v_9_RGB.svg"}
								style={{ marginTop: "-10%" }}
								alt="Logo"
								width={"500px"}
							/>
						</div>
					</div>
				</div>

				<div ref={lastSection}>
					<Section showArrow={false} goToSectionRef={section1}>
						<Footer boxikRef={boxikRef} />
					</Section>
				</div>
			</div>
		</>
	);
};

export default Animation(Contacts);
