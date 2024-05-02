import React, { useRef, useLayoutEffect, useEffect } from "react";
import Section from "../components/Section.js";
import styles from "./Container.module.scss";
import Footer from "../components/Footer.js";
import Animation from "../components/Animation.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Link } from "react-router-dom";

const Home = ({ setIsActiveLink, handleLinkClick }) => {
	const section1 = useRef();
	const section2 = useRef();
	const section3 = useRef();
	const lastSection = useRef();
	const boxikRef = useRef(null);
	gsap.registerPlugin(ScrollTrigger);

	function scrollTo(section) {
		section.current.scrollIntoView({ behavior: "smooth" });
	}
	gsap.registerPlugin(ScrollTrigger);
	const headlineRef = useRef();
	useLayoutEffect(() => {
		gsap.fromTo(
			headlineRef.current,
			{
				opacity: 0,
				x: 100,
			},
			{
				duration: 1,
				opacity: 1,
				x: 0,
				scrollTrigger: {
					scroller: ".boxik",
					trigger: headlineRef.current,
					start: "top center",
					end: "bottom center",
				},
			}
		);
	});

		const secondRef = useRef();
		useLayoutEffect(() => {
			gsap.fromTo(
				secondRef.current,
				{
					opacity: 0,
					x: -100,
				},
				{
					opacity: 1,
					x: 0,
					duration: 1,
					scrollTrigger: {
						scroller: ".boxik",
						trigger: secondRef.current,
						start: "top center",
						end: "bottom center",
					},
				}
			);
		});

	const [isWideScreen, setIsWideScreen] = React.useState(
		window.innerWidth > 600
	);
	const showLines = React.useState(true);

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 600);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const ImageRef = useRef();

	useLayoutEffect(() => {
		gsap.fromTo(
			ImageRef.current,
			{
				opacity: 0,
				x: 1000,
			},
			{
				opacity: 1,
				x: 0,
				duration: 2,
				scrollTrigger: {
					scroller: ".boxik",
					trigger: ImageRef.current,
					start: "top center",
					end: "bottom center",
				},
			}
		);
	});

	const ImagePhone = useRef();

	useLayoutEffect(() => {
		gsap.fromTo(
			ImagePhone.current,
			{
				opacity: 0,
				y: -1000,
			},
			{
				opacity: 1,
				y: 0,
				duration: 3,
				scrollTrigger: {
					scroller: ".boxik",
					trigger: ImagePhone.current,
					start: "top center",
					end: "bottom center",
				},
			}
		);
	});

	return (
		<>
			<div className={`boxik ${styles.container}`} ref={boxikRef}>
				<div ref={section1}>
					<Section
						showArrow={true}
						scrollTo={scrollTo}
						goToSectionRef={section2}
					>
						<div className="mainpage">
							<div clasname="mainpaeBackGround"></div>
							<img
								src={process.env.PUBLIC_URL + "/img/v_9_RGB.svg"}
								className="animate__animated animate__flash"
								alt="Logo"
								width={"55%"}
							/>

							<h1>КУЛЬТУРА АВТОБЕЗПЕКИ</h1>
						</div>
					</Section>
				</div>
				<div ref={section2}>
					<Section
						showArrow={true}
						scrollTo={scrollTo}
						goToSectionRef={section3}
					>
						<div className="secondpage">
							<div className="pageSlice">
								<h1 className="seconPageText">Auto Safe Culture</h1>
								{isWideScreen ? (
									<div className={`image-container`} ref={ImageRef}>
										<>
											<div className={`line line1${showLines ? " show" : ""}`}>
												<div className="lineText">
													<Link
														style={{ textDecoration: "none" }}
														to="/dodatkoviposlugy"
													>
														<h2>Автооптика</h2>
													</Link>
												</div>
											</div>
											<div className={`line line2${showLines ? " show" : ""}`}>
												<div className="lineText">
													<Link style={{ textDecoration: "none" }} to="/save">
														<h2>Автозапуск</h2>
													</Link>
												</div>
											</div>

											<div className={`line line5${showLines ? " show" : ""}`}>
												<div className="lineText">
													<Link
														style={{ textDecoration: "none" }}
														to="/zahysnaplivka"
													>
														<h2 className="h22">Тонування </h2>
													</Link>
												</div>
											</div>
											<div className={`line line6${showLines ? " show" : ""}`}>
												<div className="lineText">
													<Link
														style={{ textDecoration: "none" }}
														to="/shumoizol"
													>
														<h2>Шумо та вiбро iзоляція</h2>
													</Link>
												</div>
											</div>
											<div className={`line line7${showLines ? " show" : ""}`}>
												<div className="lineText">
													<Link
														style={{ textDecoration: "none" }}
														to="/dodatkoviposlugy"
													>
														<h2>Системи паркування</h2>
													</Link>
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
									<div className={`image-container-phone`} ref={ImagePhone}>
										<>
											<div
												className={`line-phone line1-phone${
													showLines ? " show" : ""
												}`}
											>
												<div className="lineText-phone">
													<Link
														style={{ textDecoration: "none", color: "#fafafa" }}
														to="/dodatkoviposlugy"
													>
														<h2>Системи паркування</h2>
													</Link>
												</div>
											</div>
											<div
												className={`line-phone line2-phone${
													showLines ? " show" : ""
												}`}
											>
												<div className="lineText-phone">
													<Link
														style={{ textDecoration: "none", color: "#fafafa" }}
														to="/shumoizol"
													>
														<h2>Шумо та вiбро iзоляція</h2>
													</Link>
												</div>
											</div>
											<div
												className={`line-phone line3-phone${
													showLines ? " show" : ""
												}`}
											>
												<div className="lineText-phone">
													<Link
														style={{ textDecoration: "none", color: "#fafafa" }}
														to="/zahysnaplivka"
													>
														<h2 className="h22">Тонування </h2>
													</Link>
												</div>
											</div>

											<div
												className={`line-phone line6-phone${
													showLines ? " show" : ""
												}`}
											>
												<div className="lineText-phone">
													<Link
														style={{ textDecoration: "none", color: "#fafafa" }}
														to="/save"
													>
														<h2>Автозапуск</h2>
													</Link>
												</div>
											</div>
											<div
												className={`line-phone line7-phone${
													showLines ? " show" : ""
												}`}
											>
												<div className="lineText-phone">
													<Link
														style={{ textDecoration: "none", color: "#fafafa" }}
														to="/dodatkoviposlugy"
													>
														<h2>Автооптика</h2>
													</Link>
												</div>
											</div>
										</>

										<img src="/img/m4.png" alt="Описание изображения" />
									</div>
								)}
							</div>
						</div>
					</Section>
				</div>
				<div ref={section3}>
					<Section
						showArrow={false}
						goToSectionRef={section1}
						scrollTo={scrollTo}
					>
						<div className="thirdpage">
							<div className="Box" ref={headlineRef}>
								<h1>AUTO SAFE CULTURE – ВАШ НАДІЙНИЙ ПАРТНЕР!</h1>
								<p>
									Автомобільна культура в сучасному світі – це більше, ніж
									засоби пересування. Це про стиль життя, свободу, та спосіб
									вираження ідентичності. Наша компанія прагне втілити
									збереження цієї культури через надання послуг вищого класу,
									які перетворюють авто на справжній витвір мистецтва, шляхом
									підвищення комфорту та різностороннього захисту автомобіля.
								</p>
								<p>
									Ми застосовуємо новітні технології та матеріали для того, щоб
									ваш автомобіль не лише виглядав неперевершено, а й був
									захищений на довгі роки. Наша студія – це місце, де ваш
									транспортний засіб отримає заслужену увагу, а ви – задоволення
									від кожної подорожі.
								</p>
							</div>
						</div>
					</Section>
				</div>
				<div ref={section3}>
					<Section
						showArrow={false}
						goToSectionRef={section1}
						scrollTo={scrollTo}
					>
						<div className="fourthpage">
							<div className="Box" ref={secondRef}>
								<p>
									Auto Safe Culture - є центром нового покоління по
									різносторонньому захисту автомобіля та підвищенню комфорту
									власника. Наша концепція заключається в комплексному підході
									до питання - від збереження первозданного виду авто та захисту
									проти викрадення, до підйому рівня комфорту вище чим надає
									авто виробник.
								</p>
								<p>
									Мета - створити культуру захисту та догляду за автомобілями.
									Ми прагнемо виховувати у власників авто усвідомлення
									важливості якісного обслуговування та збереження їхніх
									транспортних засобів через передові технології, інноваційні
									рішення та персоналізований підхід. Основа нашої роботи
									ґрунтується на дбайливому ставленні до безпеки, зовнішнього
									вигляду та довговічності автомобіля.
								</p>
								<p>
									Погляди нашої команди виражаються у відданості до безпеки та
									збереження автомобілів, надійності та якості обслуговування, а
									також унікальному підході до кожного клієнта, спираючись на
									сучасні технології та персоналізацію.
								</p>
							</div>
						</div>
					</Section>
				</div>
				<div ref={lastSection}>
					<Footer boxikRef={boxikRef} />
				</div>
			</div>
		</>
	);
};

export default Animation(Home);
