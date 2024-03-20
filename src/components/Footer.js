import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
	faMapMarkerAlt,
	faPhone,
	faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import Section from "./Section";

function Footer() {
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
		const { placeholder, value } = e.target;
		setFormData({ ...formData, [placeholder]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.phoneNumber && formData.firstName) {
			try {
				// Отправка данных на сервер
				const response = await fetch("YOUR_SERVER_ENDPOINT", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});

				// Проверка статуса ответа
				if (response.ok) {
					// Если запрос прошел успешно, очистите поля формы
					setFormData({
						firstName: "",
						phoneNumber: "",
						email: "",
						coment: "",
					});
					alert("Данные успешно отправлены!");
				} else {
					alert("Произошла ошибка при отправке данных на сервер.");
				}
			} catch (error) {
				console.error("Ошибка при отправке данных на сервер:", error);
				alert("Произошла ошибка при отправке данных на сервер.");
			}
		} else {
			alert(
				"Пожалуйста, заполните все поля, или проверьте правильность написанного номера. Записывайте номер с +380"
			);
		}
	};
	if (isWideScreen) {
		return (
			<Section>
				<div className="LastPagepage">
					<div className="CallBackBlock">
						<div className="LastBox">
							<div className="flex-box">
								<h1 className="mt-50">Зворотній звязок</h1>
								<div className="form__group field">
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
									<label htmlFor="name" className="form__label">
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
									<div className="col-xl-4 col-md-4 mb-30">
										<div className="single-cta">
											<FontAwesomeIcon icon={faMapMarkerAlt} />
											<div className="cta-text">
												<h4>Знайти нас</h4>
												<span>1010 Avenue, sw 54321, chandigarh</span>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-4 mb-30">
										<div className="single-cta">
											<FontAwesomeIcon icon={faPhone} />
											<div className="cta-text">
												<h4>Телефонуйте</h4>
												<span>+3800977777777</span>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-4 mb-30">
										<div className="single-cta">
											<FontAwesomeIcon icon={faEnvelopeOpen} />
											<div className="cta-text">
												<h4>Пишіть</h4>
												<span>mail@info.com</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="footer-content pt-5 pb-5">
								<div className="row">
									<div className="col-xl-4 col-lg-4 mb-50">
										<div className="footer-widget d-flex mr-50">
											<div className="footer-logo w100p">
												<a href="/">
													<img
														src="/img/Logo/ASC_logo_бiлий_на_прозорому_фонi.svg"
														className="img-fluid"
														alt="logo"
													/>
												</a>
											</div>
											<div className="footer-text">
												<p>
													З 2019 року ми зробили комфортніше і безпечніше понад
													17500 автомобілів і практично всі їхні власники
													залишилися дуже задоволені.
												</p>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-4 col-md-6 mb-30">
										<div className="footer-widget">
											<div className="footer-widget-heading">
												<h3>Сторінки</h3>
											</div>
											<ul>
												<li>
													<Link to="/">Головна</Link>
												</li>
												<li>
													<Link to="/save">Захист вiд викрадення</Link>
												</li>
												<li>
													<Link to="/shumoizol">Шумо- вiбро iзоляцiя</Link>
												</li>
												<li>
													<Link to="/zahysnaplivka">
														Захисна плiвка i тонуванн
													</Link>
												</li>
												<li>
													<Link to="/detailing">Детейлiнг</Link>
												</li>
												<li>
													<Link to="/galery">Галерея</Link>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-xl-4 col-lg-4 col-md-6 mb-50">
										<div className="footer-widget"></div>
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
					<div className="LastPagepage" >
						<div
							className="CallBackBlock "
							style={{ height: "100vh", marginTop: "-25px" }}
						>
							<div className="LastBox" style={{ left: "5%", width: "80%" }}>
								<div className="flex-box" style={{ marginTop: "0px" }}>
									<h1 className="" style={{ fontSize: "4vh" }}>
										Зворотній звязок
									</h1>
									<div className="form__group field">
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
											Контактний номер *
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
										<label htmlFor="name" className="form__label">
											Коментар
										</label>
									</div>
									<button className="btn" style={{}} onClick={handleSubmit}>
										Зворотній звязок
									</button>
								</div>
							</div>
						</div>
					</div>
				</Section>
				<Section>
					<footer className="footer-section" style={{ height: "100vh" }}>
						<div className="footer-container ">
							<div className="footer-cta ">
								<div className="d-flex justify-center"><div className="row">
									<div className="col-xl-4 col-md-4">
										<div className="single-cta">
											<FontAwesomeIcon icon={faMapMarkerAlt} />
											<div className="cta-text">
												<h4>Знайти нас</h4>
												<span>Єреванська 12</span>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-4 mb-5">
										<div className="single-cta">
											<FontAwesomeIcon icon={faPhone} />
											<div className="cta-text">
												<h4>Телефонуйте</h4>
												<span>+3800977777777</span>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-4 mb-5">
										<div className="single-cta">
											<FontAwesomeIcon icon={faEnvelopeOpen} />
											<div className="cta-text">
												<h4>Пишіть</h4>
												<span>mail@info.com</span>
											</div>
										</div>
									</div>
								</div></div>
							</div>
							<div className="footer-content pt-5 pb-5">
								<div className="row ">
									<div className="col-xl-4 col-lg-4 mb-0">
										<div className="footer-widget d-flex mb-0">
											<div className="footer-logo  w100p mb-0 mr-40">
												<a href="/">
													<img
														src="/img/Logo/ASC_logo_бiлий_на_прозорому_фонi.svg"
														className="img-fluid"
														alt="logo"
													/>
												</a>
											</div>
											<div className="footer-text ">
												<p>
													З 2019 року ми зробили комфортніше і безпечніше понад
													17500 автомобілів і практично всі їхні власники
													залишилися дуже задоволені.
												</p>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-4 col-md-6">
										<div className="footer-widget">
											<div className="footer-widget-heading">
												<h3>Сторінки</h3>
											</div>
											<ul>
												<li>
													<Link to="/">Головна</Link>
												</li>
												<li>
													<Link to="/save">Захист вiд викрадення</Link>
												</li>
												<li>
													<Link to="/shumoizol">Шумо- вiбро iзоляцiя</Link>
												</li>
												<li>
													<Link to="/zahysnaplivka">
														Захисна плiвка i тонуванн
													</Link>
												</li>
												<li>
													<Link to="/detailing">Детейлiнг</Link>
												</li>
												<li>
													<Link to="/galery">Галерея</Link>
												</li>
											</ul>
										</div>
									</div>
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
