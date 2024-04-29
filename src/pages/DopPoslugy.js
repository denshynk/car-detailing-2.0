import React, { useRef } from "react";
import styles from "./Container.module.scss";
import Section from "../components/Section.js";
import Footer from "../components/Footer.js";
import Animation from "../components/Animation.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const DopPoslugy = () => {
	const section1 = useRef();
	const section2 = useRef();
	const lastSection = useRef();
	const section4 = useRef();

	function scrollTo(section) {
		section.current.scrollIntoView({ behavior: "smooth" });
	}
	gsap.registerPlugin(ScrollTrigger);
	const firstRef = useRef();
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
					scroller: ".boxik",
					trigger: firstRef.current,
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
				y: 40,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					scroller: ".boxik",
					trigger: secondtRef.current,
					start: "top center",
					end: "bottom center",
				},
			}
		);
	});
	return (
		<>
			<div className={`boxik ${styles.container}`}>
				<div ref={section1}>
					<Section
						showArrow={true}
						scrollTo={scrollTo}
						goToSectionRef={section2}
					>
						<div
							className="firstPageDopposugy"
							style={{
								backgroundImage: 'url("..//img/dopposlugy/dopposlugy1.jpg")',
							}}
						>
							<div className="firstPageBox" ref={firstRef}>
								<div className="content">
									<h1>ДОДАТКОВЕ ОБЛАДНАННЯ</h1>
									<p>
										У нашому автосервісі ви знайдете широкий асортимент послуг
										із встановлення додаткового обладнання, яке забезпечить ваш
										автомобіль найсучаснішими технологіями, підвищить безпеку та
										комфорт під час поїздок. Наші кваліфіковані техніки готові
										допомогти вам обрати та встановити обладнання, яке
										відповідатиме вашим потребам та бюджету. Auto Safe Culture
										зробить ваш автомобіль ще кращим та комфортнішим!
									</p>

									<div className="d-flex justify-end flex align-end">
										<button onClick={() => scrollTo(section2)}>
											Детальніше
										</button>
									</div>
								</div>
							</div>
						</div>
					</Section>
				</div>
				<div ref={section2}>
					<Section
						showArrow={true}
						scrollTo={scrollTo}
						goToSectionRef={lastSection}
					>
						<div
							className="secondPageDopposugy"
							style={{
								backgroundImage: 'url("..//img/dopposlugy/dopposlugy4.jpg")',
							}}
						>
							<div className="firstPageBox" ref={secondtRef}>
								<ul>
									<li>
										ВСТАНОВЛЕННЯ КАМЕР ЗАДНЬОГО ТА ПЕРЕДНЬОГО ОГЛЯДУ: Підвищте
										видимість під час паркування та маневрування, забезпечивши
										собі повний огляд навколишнього середовища.
									</li>
									<li>
										ПАРКТРОНІКИ: Забезпечте додатковий рівень безпеки за
										допомогою систем датчиків, які допомагають уникнути зіткнень
										під час паркування.
									</li>
									<li>
										СИСТЕМИ МУЛЬТИМЕДІА ТА АВТОМАГНІТОЛИ: Насолоджуйтеся відмінною якістю
										звуку та зручністю взаємодії з вашими улюбленими
										мультимедійними пристроями в автомобілі.
									</li>
									<li>
										КАМЕРИ КРУГОВОГО ОГЛЯДУ 360: Позбудьтеся сліпих зон навколо
										автомобіля для максимальної безпеки та зручності під час
										паркування та руху вулицями.
									</li>
									<li>
										ДОВОДЧИКИ ДВЕРЕЙ І ВІКОН: Додайте комфорту і елегантності з
										автоматичним закриванням дверей та вікон автомобіля.
									</li>
									<li>
										ВІДЕОРЕЄСТРАТОРИ: Забезпечте собі додатковий рівень безпеки
										на дорозі за допомогою відеофіксації дороги під час руху та
										в разі ДТП.
									</li>
									<li>
										АПГРЕЙД ФАР: Головне світло автомобіля- один з найважливіших
										атрибутів безпеки та комфорту під час поїздки. Досягніть
										найкращої видимості з допомогою перепаковки фар, полірування та заміни
										ламп.
									</li>
								</ul>
							</div>
						</div>
					</Section>
				</div>

				<div ref={lastSection}>
					<Section showArrow={false} goToSectionRef={section1}>
						<Footer />
					</Section>
				</div>
			</div>
		</>
	);
};

export default Animation(DopPoslugy);
