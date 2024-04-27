import React, { useRef } from "react";
import Section from "../components/Section.js";
import styles from "./Container.module.scss";
import Footer from "../components/Footer.js";
import Animation from "../components/Animation.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Shumoizol = () => {
	const section1 = useRef();
	const section2 = useRef();
	const section3 = useRef();
	const section4 = useRef();
	const section5 = useRef();
	const section6 = useRef();

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
				x: 400,
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
	const thirstRef = useRef();
	React.useLayoutEffect(() => {
		gsap.fromTo(
			thirstRef.current,
			{
				opacity: 0,
				y: -140,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					scroller: ".boxik",
					trigger: thirstRef.current,
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
							className="firstPageShum"
							style={{
								backgroundImage: 'url("..//img/shum/shum1.webp")',
							}}
						>
							<div className="firstPageBox">
								<div className="content" ref={firstRef}>
									<h1>ШУМОІЗОЛЯЦІЯ АВТОМОБІЛЯ</h1>
									<p>
										Стандартна шумка, яка йде на авто із заводу, не достатня для
										повного приборкування неприємних звуків, які надходять із
										навколишнього середовища. Студія Auto Safe Culture пропонує
										шумоізоляцію автомобіля як комплексну так і на окремі шумо
										пропускні зони. Наша компанія забезпечує відмінну якість,
										швидкість використання, професіоналізм та доступну вартість.
									</p>
									<p>
										Наші послуги з шумоізоляції автомобіля гарантують спокійне
										та комфортне водіння, забезпечить зниження рівня шуму від
										гравію, дощу, каменю та нерівностей дороги, збереже
										оптимальну температуру у салоні та зменшить вібрації від
										двигуна, кардана та підвіски. У результаті, ви зможете
										повністю насолоджуватись улюбленою музикою в салоні та
										отримаєте загальне зниження рівня шуму до 70%, забезпечуючи
										максимальний комфорт під час поїздок.
									</p>
									<div className="d-flex justify-start flex align-end">
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
						goToSectionRef={section3}
					>
						<div
							className="secondPageShum"
							style={{
								backgroundImage: 'url("..//img/shum/shum2.jpg")',
							}}
						>
							<div className="firstPageBox" ref={secondtRef}>
								<h1>
									Шумоізоляція автомобіля - це підвищення рівня комфорту та
									покращення престижу транспортного засобу. Процес повного
									усунення шумів можна розглядати як послідовні етапи, кожен з
									яких спрямований на досягнення ідеальної акустичної обстановки
									всередині салону.
								</h1>
								<div className="container">
									<div className="card">
										<p>
											Віброізоляція автомобіля є ключовою, оскільки основним
											джерелом шуму є вібрація обшивки та колісних дуг під час
											руху по нерівній дорозі, яка є типовою. Якісно виконана
											віброізоляція відкине більшу частину шуму і вібрацій,
											покладаючи фундамент для подальшого зменшення шуму.
										</p>
										<h1>ВІБРОІЗОЛЯЦІЯ</h1>
									</div>
									<div className="card">
										<p>
											Другий важливий етап — безпосередня шумоізоляція, під час
											якої шар шумоізоляційних і шумопоглинаючих матеріалів
											наноситься на вже встановлену віброізоляцію. Це комплексне
											застосування дозволяє досягти максимального ефекту у
											зменшенні шуму та покращити якість звуку в авто.
										</p>
										<h1>ШУМОІЗОЛЯЦІЯ</h1>
									</div>
									<div className="card">
										<p>
											Для усунення непотрібних шумів в салоні автомобіля, таких
											як скрип стиків та поскрипування деталей, застосовуються
											спеціальні смужки синтетичної тканини або інші матеріали з
											клейовим шаром, які запобігають нав'язливому шуму від
											тертя.
										</p>

										<h1>АНТИСКРИП</h1>
									</div>
								</div>
							</div>
						</div>
					</Section>
				</div>
				<div ref={section3}>
					<Section
						showArrow={false}
						goToSectionRef={section4}
						scrollTo={scrollTo}
					>
						<div
							className="thirdPageShum"
							style={{
								backgroundImage: 'url("..//img/shum/shum3.jpg")',
							}}
						>
							<div className="firstPageBox" ref={thirstRef}>
								<div className="container">
									<ul>
										<li>ОЦІНКА ЗОН АВТОМОБІЛЯ, ЯКИЙ ПОТРЕБУЄ ШУМОІЗОЛЯЦІЇ</li>
										<li>ПІДБІР МАТЕРІАЛІВ ТА ПЛАНУВАННЯ РОБІТ</li>
										<li>ДЕМОНТАЖ ДЕТАЛЕЙ САЛОНУ</li>
										<li>ОЧИЩЕННЯ ТА ОБЕЗЖИРЕННЯ ПОВЕРХОНЬ</li>
										<li>ЗНЕШУМЛЕННЯ АВТО ВІДПОВІДНИМИ МАТЕРІАЛАМИ</li>
										<li>
											АНТИСКРИП ЕЛЕМЕНТІВ САЛОНУ ТА УЩІЛЬНЕННЯ РУХОМИХ З’ЄДНАНЬ
										</li>
										<li>ЗБИРАННЯ САЛОНУ АВТОМОБІЛЯ</li>
										<li>ТЕСТУВАННЯ</li>
									</ul>
								</div>
								<h1>ЕТАПИ</h1>
							</div>
						</div>
					</Section>
				</div>

				<div ref={section4}>
					<Section showArrow={false} goToSectionRef={section1}>
						<Footer />
					</Section>
				</div>
			</div>
		</>
	);
};

export default Animation(Shumoizol);
