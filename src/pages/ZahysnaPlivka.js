import React, { useRef } from "react";
import Section from "../components/Section.js";
import styles from "./Container.module.scss";
import Footer from "../components/Footer.js";
import Animation from "../components/Animation.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ZahysnaPlivka = () => {
	const section1 = useRef();
	const section2 = useRef();
	const section3 = useRef();
	const section4 = useRef();
	const section5 = useRef();
	const lastSection = useRef();
	const section7 = useRef();
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
				y: 40,
			},
			{
				opacity: 1,
				y: 0,
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
				x: -140,
			},
			{
				opacity: 1,
				x: 0,
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
	const fourthRef = useRef();
	React.useLayoutEffect(() => {
		gsap.fromTo(
			fourthRef.current,
			{
				opacity: 0,
				x: 100,
			},
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					scroller: ".boxik",
					trigger: fourthRef.current,
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
				x: 1000,
			},
			{
				opacity: 1,
				x: 0,
				duration: 2,
				scrollTrigger: {
					scroller: ".boxik",
					trigger: fifthRef.current,
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
							className="firstPagePlivka"
							style={{
								backgroundImage: 'url("..//img/plivka/plivka1.jpg")',
							}}
						>
							<div className="firstPageBox" ref={firstRef}>
								<div className="content">
									<h1>АВТОМОБІЛЬНА ПЛІВКА</h1>
									<p className="textP">
										Плівка - це інноваційний продукт, який забезпечує надійний
										захист автомобіля від зовнішніх впливів
									</p>
									<p>
										Вона виготовляється з високоякісних поліуретанових
										матеріалів і захищає від подряпин, каміння, атмосферних
										впливів та ультрафіолетового випромінювання. Зберігає вигляд
										авто протягом тривалого періоду, підвищує стійкість
										лакофарбового покриття. Крім того, автомобільна плівка може
										бути виготовлена в різних кольорах та дизайнах, щоб
										задовольнити індивідуальні потреби та естетичні вимоги
										кожного клієнта.
									</p>

									<div className="d-flex justify-start flex align-end ">
										<button onClick={() => scrollTo(section2)}>
											Детальніше
										</button>
									</div>
								</div>{" "}
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
							className="secondPagePlivka"
							style={{
								backgroundImage: 'url("..//img/plivka/plivka2.jpg")',
							}}
						>
							<div className="firstPageBox" ref={secondtRef}>
								<div className="containerH1">
									<h1>ПРОПОНУЄМО ПОСЛУГУ ЗАХИСТУ ЗОВНІШНІХ ЕЛЕМЕНТІВ</h1>
									<h1>АВТОМОБІЛЯ ЗА ДОПОМОГОЮ ПРОЗОРОЇ ПЛІВКИ</h1>
									<h1>ТОВЩИНОЮ ВІД 120 ДО 190 МІКРОН</h1>
								</div>
								<p>
									Це актуально для нових, дорогих та автомобілів з вишуканим
									фарбуванням. Антигравійною плівкою можна захистити кузов
									повністю або нанести на найбільш вразливі до коррозії ділянки.
									Якщо Ви часто долаєте далекі відстані, рекомендуємо захистити
									найбільш вразливі до пошкоджень поверхні (фари, бампер, капот,
									крила, зеркала). Поліуретанова плівка захистить від подряпин
									та збереже лакофарбове покриття на довгий період.
								</p>
							</div>
							<div className="cart-container">
								<div className="cart">
									<h2>НАНОСИТЬСЯ швидко, легко демонтується</h2>
								</div>
								<div className="cart">
									<h2>ЗБЕРІГАЄ авто у первозданному стані</h2>
								</div>
								<div className="cart">
									<h2>ЗАХИЩАЄ авто від сколів</h2>
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
							className="thirdPagePlivka"
							style={{
								backgroundImage: 'url("..//img/plivka/plivka4/3.jpg")',
							}}
						>
							<div className="firstPageBox" ref={thirstRef}>
								<div className="container">
									<div className="card">
										<h2>НЕВИДИМА - ОЗНАЧАЄ МІЦНА</h2>
										<p>
											Прозора захисна плівка для автомобіля, виготовлена з
											високоякісного поліуретану, має унікальні властивості,
											такі як міцність, щільність і еластичність. Це дозволяє
											плівці ідеально прилягати до будь-яких форм і деталей
											автомобіля. Кожна покрита частина стає стійкою до впливу
											гравію, щебеню та піску. Через ці унікальні властивості,
											ця захисна плівка також відома як антигравійна.
										</p>
									</div>
									<div className="card">
										<h2>ЛЕГКІСТЬ ТА ЗРУЧНІСТЬ</h2>
										<p>
											Високі характеристики захисної плівки для автомобілів
											забезпечують не лише його легке обслуговування і очищення,
											але й можливість полірування. У разі аварійної ситуації,
											такої як пошкодження фари, ця антигравійна плівка утримає
											скляні уламки на своїй поверхні, запобігаючи їх розлетінню
											і тим самим захищаючи інші автомобілі від можливих
											пошкоджень.
										</p>
									</div>
									<div className="card">
										<h2>ЕСТЕТИЧНИЙ ЗАХИСТ</h2>
										<p>
											Зовнішній вигляд автомобіля з захисною плівкою зовсім не
											відрізняється від тих, що не мають такого захисту. Прозора
											плівка додає естетики, забезпечуючи ще більш гладкий
											глянцевий ефект.
										</p>
									</div>
									<div className="card">
										<h2>ВАРТІСТЬ І ЧАС ВСТАНОВЛЕННЯ</h2>
										<p>
											Обклеювання автомобіля захисною плівкою в нашій
											автомайстерні може виконуватися як частково, так і
											повністю. Повне обклеювання поверхні авто проводиться в
											середньому два дні, а ціна на такий вид робіт набагато
											нижча за перефарбування кузова.
										</p>
									</div>
								</div>
							</div>
						</div>
					</Section>
				</div>
				<div ref={section4}>
					<Section
						showArrow={false}
						goToSectionRef={section4}
						scrollTo={scrollTo}
					>
						<div
							className="fourthPagePlivka"
							style={{
								backgroundImage: 'url("..//img/plivka/plivka4/2.jpg")',
							}}
						>
							<div className="firstPageBox" ref={fourthRef}>
								<div className="text">
									<h1>ТОНУВАННЯ СКЛА</h1>
									<p>
										Тонування скла є найпопулярнішою послугою з тюнінгу
										автомобіля. Цей вид робіт характеризується мінімальними
										витратами, а також простотою та швидкістю установки.
										Тонування дозволяє не тільки забезпечити певний мікроклімат
										в салоні, а й обмежити візуальний доступ до салону від
										небажаних поглядів.
									</p>
								</div>
								{/* <div className="container">
									<div className="card">
										<img src="..//img/plivka/plivka4/1.jpg" alt="car1" />
									</div>
									<div className="card">
										<img src="..//img/plivka/plivka4/2.jpg" alt="car2" />
									</div>
									<div className="card">
										<img src="..//img/plivka/plivka4/3.jpg" alt="car3" />
									</div>
									<div className="card">
										<img src="..//img/plivka/plivka4/4.jpg" alt="car4" />
									</div>
								</div> */}
							</div>
						</div>
					</Section>
				</div>
				<div ref={section5}>
					<Section
						showArrow={false}
						goToSectionRef={section4}
						scrollTo={scrollTo}
					>
						<div
							className="thirdPagePlivka"
							style={{
								backgroundImage: 'url("..//img/plivka/plivka6.jpg")',
							}}
						>
							<div className="firstPageBox " ref={fifthRef}>
								<h1 className="d-flex ">ПЕРЕВАГИ ТОНУВАННЯ</h1>
								<div className="container">
									<div className="card">
										<h2>ПОЛІПШЕННЯ ЗОВНІШНЬОГО ВИГЛЯДУ:</h2>
										<p>
											правильно підібране тонування скла найкраще підкреслить
											особливості дизайну транспортного засобу, надаючи
											індивідуального характеру рисам автомобіля.
										</p>
									</div>
									<div className="card">
										<h2>ЗАХИСТ ВІД НАГРІВАННЯ САЛОНУ ТА ЗУСТРІЧНИХ ФАР: </h2>
										<p>
											плівка зменшить вплив жарких сонячних променів та
											убезпечить очі водія від яскравих фар зустрічних авто.
										</p>
									</div>
									<div className="card">
										<h2>ЗБЕРЕЖЕННЯ ЗОВНІШНЬОГО ВИГЛЯДУ:</h2>
										<p>
											тонування дозволить склу залишатися в ідеальному стані
											протягом усього терміну експлуатації, захистивши поверхню
											від подряпин і сколів.
										</p>
									</div>
									<div className="card">
										<h2>НЕПОМІТНІСТЬ ВОДІЯ ТА ПАСАЖИРІВ:</h2>
										<p>
											тонувальна плівка захистить від зайвих поглядів,
											забезпечивши додатковий комфорт у салоні, а також приховає
											від очей речі, залишені в автомобілі.
										</p>
									</div>
								</div>
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

export default Animation(ZahysnaPlivka);
