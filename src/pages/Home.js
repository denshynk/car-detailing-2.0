import React, { useRef } from "react";
import Section from "../components/Section.js";
import styles from "./Container.module.scss";
import ImageComponent from "../components/ImageComponent";
import Footer from "../components/Footer.js";

const Home = () => {
	const section1 = useRef();
	const section2 = useRef();
	const section3 = useRef();
	const section4 = useRef();

	function scrollTo(section) {
		section.current.scrollIntoView({ behavior: "smooth" });
	}
	return (
		<>
			<div className={`${styles.container}`}>
				<div ref={section1}>
					<Section
						showArrow={true}
						scrollTo={scrollTo}
						goToSectionRef={section2}
					>
						<div className="mainpage">
							<div className="centerBox">
								<p>
									Отримайте більше задоволення від Вашого авто разом з{" "}
									<b>Apex Safe Car</b>
								</p>
								<h1>СУЧАСНА ДIТЕЙЛIНГ СТУДIЯ!</h1>
							</div>
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
							<div className="pageSlice mt-40">
								<h1>
									ASC - Auto Safe Car
								</h1>
								<ImageComponent />
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
							<div className="Box">
								<h1>Про компанiю</h1>
								<p>
									Місія нашої компанії полягає в тому, щоб забезпечувати нашим
									клієнтам реальну користь та надавати найкращий рівень сервісу
									та задоволеності у нашій сфері.
								</p>
								<p>
									Ми прагнемо до переваг у всьому, що робимо, і наша мета –
									стати надійним партнером для всіх наших клієнтів.
								</p>
								<p>
									З 2019 року ми зробили комфортніше і безпечніше понад 17500
									автомобілів і практично всі їхні власники залишилися дуже
									задоволені.
								</p>
								<p>
									Для вас: Гарантія 5 років Збереження гарантії дилера Підтримка
									на весь період експлуатації Безпека та комфорт Вашого
									автомобіля – наша турбота!
								</p>
							</div>
						</div>
					</Section>
				</div>
				<div ref={section4}>
					
						<Footer />
					
				</div>
			</div>
		</>
	);
};

export default Home;
