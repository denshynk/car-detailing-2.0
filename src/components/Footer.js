import React, {useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


import {
	faMapMarkerAlt,
	faPhone,
	faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import Section from "./Section";

function Footer({ boxikRef }) {
	const [formData, setFormData] = React.useState({
		firstName: "",
		phoneNumber: "",
		email: "",
		coment: "",
	});
	const [isWideScreen, setIsWideScreen] = React.useState(
		window.innerWidth > 750
	);

	React.useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 750);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);


	const handleChange = (e) => {
		const { placeholder, value } = e.target; // Исправлено использование placeholder на name
		setFormData({ ...formData, [placeholder]: value }); // Исправлено использование placeholder на name
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.phoneNumber && formData.firstName) {
			try {
				console.log(formData);
				const response = await axios.post(
					"https://server.autosafeculture.com/callBack",
					formData
				);
				setFormData({
					firstName: "",
					phoneNumber: "",
					email: "",
					comment: "",
				});
			} catch (error) {
				console.error("Error:", error);
			}
		} else {
			alert(
				"Пожалуйста, заполните все поля, или проверьте правильность написанного номера."
			);
		}
	};

	gsap.registerPlugin(ScrollTrigger);
	const firstRef = useRef();
	const trigerRef = useRef();
	const trigerRefDesktop = useRef();
	React.useLayoutEffect(() => {
		gsap.fromTo(
			firstRef.current,
			{
				opacity: 0,
				x: -400,
			},
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					trigger: trigerRef.current,
					start: "top center",
					end: "bottom center",
				},
			}
		);
	});
	const secondtRef = useRef();
	React.useLayoutEffect(() => {
		gsap.fromTo(
			secondtRef.current,
			{
				opacity: 0,
				x: 400,
			},
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					
					trigger: trigerRef.current,
					start: "top center",
					end: "bottom center",
				},
			}
		);
	});
	const thirstRef = useRef();
	React.useLayoutEffect(() => {
		gsap.fromTo(
			thirstRef.current,
			{
				opacity: 0,
				x: -400,
			},
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					
					trigger: trigerRef.current,
					start: "top center",
					end: "bottom center",
				},
			}
		);
	});
	const fourthRef = useRef();
	React.useLayoutEffect(() => {
		gsap.fromTo(
			fourthRef.current,
			{
				opacity: 0,
				x: 400,
			},
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					
					trigger: trigerRef.current,
					start: "top center",
					end: "bottom center",
				},
			}
		);
	});
	const fifthRef = useRef();
	React.useLayoutEffect(() => {
		gsap.fromTo(
			fifthRef.current,
			{
				opacity: 0,
				y: 40,
			},
			{
				opacity: 1,
				y: -40,
				duration: 1,
				scrollTrigger: {
					scroller:trigerRef.current,
					trigger: trigerRefDesktop.current,
					start: "top center",
					end: "top center",
				},
			}
		);
	});

	if (isWideScreen) {
		return (
			<Section>
				<div className="LastPagepage">
					<div className="CallBackBlock">
						<div className="LastBox">
							<div className="flex-box">
								<h1 className="">Зворотній звязок</h1>
								<div className="form__group field mt-0 p-0">
									<input
										type="text"
										className="form__field"
										placeholder="firstName"
										required=""
										value={formData.firstName}
										onChange={handleChange}
									/>
									<label htmlFor="name" className="form__label">
										Ваше ім’я *
									</label>
								</div>
								<div className="form__group field">
									<input
										type="text"
										className="form__field"
										placeholder="phoneNumber"
										required=""
										onChange={handleChange}
									/>
									<label htmlFor="name" className="form__label">
										Ваш телефон *
									</label>
								</div>
								<div className="form__group field">
									<input
										type="text"
										className="form__field"
										placeholder="email"
										required=""
										onChange={handleChange}
									/>
									<label htmlFor="name" className="form__label">
										Ел. пошта
									</label>
								</div>
								<div className="form__group field">
									<input
										type="input"
										className="form__field"
										placeholder="coment"
										required=""
										onChange={handleChange}
									/>
									<label
										htmlFor="name"
										className="form__label"
										ref={trigerRefDesktop}
									>
										Коментар
									</label>
								</div>
								<button className="btn" onClick={handleSubmit}>
									Зворотній звязок
								</button>
							</div>
						</div>
					</div>
					<footer className="footer-section">
						<div className="footer-container">
							<div className="footer-cta pt-5 pb-5">
								<div className="row">
									<a
										className="d-flex"
										style={{ textDecoration: "none" }}
										href="https://g.co/kgs/HgQFxDY"
										target="_blank"
										rel="noopener noreferrer"
									>
										<div className="col-xl-4 col-md-4 mb-30">
											<div className="single-cta">
												<FontAwesomeIcon icon={faMapMarkerAlt} />

												<div className="cta-text">
													<h4>Знайти нас</h4>
													<span>
														вулиця Вінстона Черчилля, 46г, Київ, 02094
													</span>
												</div>
											</div>
										</div>
									</a>
									<a
										href="tel:+380730040066"
										style={{ textDecoration: "none" }}
									>
										<div className="col-xl-4 col-md-4 mb-30">
											<div className="single-cta">
												<FontAwesomeIcon icon={faPhone} />

												<div className="cta-text">
													<h4>Телефонуйте</h4>
													<span className="nowrap">+38 073 004 0066</span>
												</div>
											</div>
										</div>
									</a>
									<a
										href="mailto:autosafeculture@gmail.com"
										style={{ textDecoration: "none" }}
									>
										<div className="col-xl-4 col-md-4 mb-30">
											<div className="single-cta">
												<FontAwesomeIcon icon={faEnvelopeOpen} />
												<div className="cta-text">
													<h4>Пишіть</h4>
													<span>autosafeculture@gmail.com</span>
												</div>
											</div>
										</div>
									</a>
								</div>
							</div>
							<div
								className="footer-content pt-5 pb-5"
								style={{ height: "30vh" }}
							>
								<div className="rower">
									<div className="col-xl-4 col-lg-4 ">
										<div className="footer-widget d-flex">
											<div className="footer-last-text">
												<p>
													МІСІЯ. Реалізація комплексних проєктів з дотриманням
													високих стандартів якості.
												</p>
												<p>
													ЦІЛЬ. Створення провідної мережі та підхід до поняття
													автобезпеки як до культури, зібравши результати
													напрацювань даної галузі у нашій студії
												</p>
												<p>
													ЦІННОСТІ. Головними складовими являються якість,
													індивідуальний підхід до автомобілів та емоції їх
													власників
												</p>
												<p>
													ПІДХІД. Клієнт обов’язково повинен залишитись
													задоволеним результатом нашої роботи.
												</p>
											</div>
											{/* <div className="footer-logo">
												<a href="/">
													<img
														src={
															process.env.PUBLIC_URL + "/img/ASC_logo_5_RGB.svg"
														}
														className="img-fluid"
														alt="logo"
														style={{ maxWidth: "40%" }}
													/>
												</a>
											</div>
											<div className="footer-text">
												<p>
													Реалізація комплексних проєктів з дотриманням високих
													стандартів якості Створення провідної мережі та підхід
													до поняття автобезпеки як до культури, зібравши
													результати напрацювань даної галузі у нашій студії
													Націленість на індивідуальний підхід до автомобілів та
													їх власників
												</p>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</Section>
		);
	} else {
		return (
			<>
				<Section>
					<footer className="footer-section d-flex" style={{ height: "100vh" }}>
						<div className="footer-container ">
							<div className="footer-cta ">
								<div className="d-flex justify-center">
									<div className="row d-flex">
										<a
											className="d-flex"
											style={{ textDecoration: "none" }}
											href="https://g.co/kgs/HgQFxDY"
											target="_blank"
											rel="noopener noreferrer"
										>
											<div className="col-xl-4 col-md-4">
												<div className="single-cta">
													<FontAwesomeIcon icon={faMapMarkerAlt} />
													<div className="cta-text">
														<h4>Знайти нас</h4>
														<span>
															вулиця Вінстона Черчилля, 46г, Київ, 02094
														</span>
													</div>
												</div>
											</div>
										</a>
										<a
											href="tel:+380730040066"
											style={{ textDecoration: "none" }}
										>
											<div className="col-xl-4 col-md-4 mb-5">
												<div className="single-cta">
													<FontAwesomeIcon icon={faPhone} />
													<div className="cta-text">
														<h4>Телефонуйте</h4>
														<span>+38 073 004 0066</span>
													</div>
												</div>
											</div>
										</a>
										<a
											href="mailto:autosafeculture@gmail.com"
											style={{ textDecoration: "none" }}
										>
											<div className="col-xl-4 col-md-4 mb-5">
												<div className="single-cta">
													<FontAwesomeIcon icon={faEnvelopeOpen} />
													<div className="cta-text">
														<h4>Пишіть</h4>
														<span>autosafeculture@gmail.com</span>
													</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
							<div className="footer-content pt-5 pb-5" ref={trigerRef}>
								<div className="rower d-flex justify-between">
									<div className="col-xl-4 col-lg-4 mb-0">
										<div className="footer-widget d-flex mb-0">
											<div className="footer-last-text">
												<p >
													МІСІЯ. Реалізація комплексних проєктів з дотриманням
													високих стандартів якості.
												</p>
												<p>
													ЦІЛЬ. Створення провідної мережі та підхід до поняття
													автобезпеки як до культури, зібравши результати
													напрацювань даної галузі у нашій студії
												</p>
												<p >
													ЦІННОСТІ. Головними складовими являються якість,
													індивідуальний підхід до автомобілів та емоції їх
													власників
												</p>
												<p>
													ПІДХІД. Клієнт обов’язково повинен залишитись
													задоволеним результатом нашої роботи.
												</p>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-4 col-md-6"></div>
									<div className="col-xl-4 col-lg-4 col-md-6 mb-50">
										<div className="footer-widget"></div>
									</div>
								</div>
							</div>
						</div>
					</footer>
				</Section>
			</>
		);
	}
}

export default Footer;
