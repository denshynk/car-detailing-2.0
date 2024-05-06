import React, { useRef } from "react";
import Section from "../components/Section.js";
import styles from "./Container.module.scss";
import Footer from "../components/Footer.js";
import Animation from "../components/Animation.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Save = () => {
	const section1 = useRef();
	const section2 = useRef();
	const section3 = useRef();
	const section4 = useRef();
	const section5 = useRef();
	const section6 = useRef();
	const section7 = useRef();
	const lastSection = useRef();
const boxikRef = useRef(null);
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
				x: -100,
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
				y: 100,
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
				y: -100,
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
				x: 100,
			},
			{
				opacity: 1,
				x: 0,
				duration: 1,
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
			<div className={`boxik ${styles.container}`} ref={boxikRef}>
				<div ref={section1}>
					<Section
						showArrow={true}
						scrollTo={scrollTo}
						goToSectionRef={section2}
					>
						<div
							className="firstPageTAG"
							style={{
								backgroundImage: 'url("..//img/save/save1.jpg")',
							}}
						>
							<div className="firstPageBox">
								<div className="content" ref={firstRef}>
									<h1>СИСТЕМИ ЗАХИСТУ АВТОМОБІЛЯ ВІД ВИКРАДЕННЯ</h1>
									<p>
										Серед автовласників поширена думка, що будь-яку систему
										захисту можна знешкодити і доля правди в цьому є. Але існує
										один нюанс – час витрачений на викрадення. Як правило, коли
										зловмисник бачить, що викрадення потребує більше зусиль і
										часу, ніж потрібно для обходу базового захисту автомобіля -
										це його демотивує і змушує відмовитись від спроби угону.
									</p>

									<p>
										Найкраще рішення для безпеки вашого автомобіля – це
										комплексний підхід з декількох контурів захисту і
										оповіщення. Завдяки великому досвіду наших спеціалістів в
										студії Auto Safe Culture ми підбираємо індивідуальні рішення
										під ваш автомобіль в залежності від побажань автовласника .
										Для економії свого часу Ви можете попередньо ознайомитися з
										сучасними системами захисту і порівняти їх.
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
						goToSectionRef={section3}
					>
						<div
							className="thirdpageSave"
							style={{
								backgroundImage: 'url("..//img/save/save2.jpg")',
							}}
						>
							<div className="Box" ref={secondtRef}>
								<h1 style={{}}>СИСТЕМИ ЗАХИСТУ ВІД УГОНУ З GPS/GSM</h1>
								<p>
									Системи автомобільних сигналізацій з вбудованими передавачами
									сигналів GSM та GPS є одними з передових рішень у сфері
									захисту автомобілів, адже дозволяють побудувати на їх базі
									найкращий комплекс охорони для вашого авто за допомогою
									додаткових пристроїв, які можна підключити до сигналізації.
								</p>
								<p>
									Ці системи можуть підключатися до електронної системи
									автомобіля через цифровий канал CAN та моніторити всі його
									компоненти для забезпечення максимальної безпеки. Завдяки
									вбудованому в систему захисту GSM модему, ваш смартфон стає
									повноцінним пультом керування захистом з найсучаснішими
									функціями.
								</p>
							</div>
						</div>
					</Section>
				</div>{" "}
				<div ref={section3}>
					<Section
						showArrow={false}
						goToSectionRef={section4}
						scrollTo={scrollTo}
					>
						<div
							className="fourthpageSave"
							style={{
								backgroundImage: 'url("..//img/save/save3.jpg")',
							}}
						>
							<div className="Box">
								<h1 style={{}}>СИСТЕМИ ЗАХИСТУ З АВТОЗАПУСКОМ</h1>
								<p>
									Узимку, коли для прогрівання двигуна автомобіля потрібно
									більше часу, можна скористатися функцією автозапуску. Сідайте
									в автомобіль із вже прогрітим двигуном, готуйтеся до поїздки,
									що дозволяє зекономити ваш час. Сучасні автомобільні захисні
									системи дозволяють вам організувати дистанційний запуск
									двигуна авто за допомогою вашого смартфона. Переваги таких
									систем полягають не лише у збереженні вашого часу та
									правильному догляді за двигуном в холодну пору, а й у
									гнучкості налаштувань.
								</p>
								<p>
									При цьому захищеність залишається на високому рівні, і
									зловмиснику немає можливості викрасти ваш автомобіль навіть
									при заведеному двигуні. Всі клієнти, які зверталися до нас в
									Auto Safe Culture за цією функцією, повністю оцінили всі
									переваги користування автозапуском автомобіля. Скористайтеся
									цією можливістю і Ви!
								</p>
							</div>
							<h1>ФУНКЦІЇ АВТОЗАПУСКУ</h1>
							<div className="megaContainer">
								<div className="conteiner">
									<ul>
										<li>на певну кількість часу </li>
										<li> по напрузі акамулятора</li>
										<li> по температурі</li>
										<li> за розкладом</li>
										<li> з певною періодичністю</li>
									</ul>
								</div>
								<div className="conteiner">
									<ul>
										<li>на певну кількість часу </li>
										<li> по напрузі акамулятора</li>
										<li> по температурі</li>
										<li> за розкладом</li>
										<li> з певною періодичністю</li>
									</ul>
								</div>
								<div className="conteiner">
									<ul>
										<li>на певну кількість часу </li>
										<li> по напрузі акамулятора</li>
										<li> по температурі</li>
										<li> за розкладом</li>
										<li> з певною періодичністю</li>
									</ul>
								</div>
							</div>
						</div>
					</Section>
				</div>
				<div ref={section4}>
					<Section
						showArrow={false}
						goToSectionRef={section5}
						scrollTo={scrollTo}
					>
						<div
							className="fifthpageSave"
							style={{
								backgroundImage: 'url("..//img/save/save4.jpg")',
							}}
						>
							<div className="Box" ref={thirstRef}>
								<h1>АНАЛОГОВІ СИГНАЛІЗАЦІЇ</h1>
								<p>
									Основна відмінність аналогових систем від цифрових полягає у
									відсутності модуля для підключення до електромережі автомобіля
									через цифрову шину CAN або LIN. Це робить захист авто досить
									примітивним і не дозволяє вести моніторинг стану машини в
									реальному часі в будь-якому місці.Зазвичай такі
									автосигналізації встановлюють у машини бюджетного класу або
									там, де власник залишає авто в охороняємому місці.
								</p>
								<p>
									У порівнянні з цифровими системами захисту, аналогові системи
									мають більшу кількість дротів, оскільки вони не використовують
									CAN шину. Це ускладнює встановлення сигналізації максимально
									приховано. Проте не варто недооцінювати можливості аналогових
									автосигналізацій, наші майстри з творчістю підходять до
									кожного окремого монтажу та підберуть найкраще рішення до будь
									- якого авто.
								</p>
								<div className="megacontainer">
									<div className="container">
										<div className="textArrow">
											<h4>плюси даних систем</h4>
											{/* <img src="..//img/arrow.png" alt="arrow" /> */}
										</div>
										<ul>
											<li>невисока вартість системи та встановлення</li>
											<li>оптимально підходить для бюджетних авто</li>
											<li>надійний захист за вигідною ціною</li>
										</ul>
									</div>
									<div className="container">
										<div className="textArrow">
											<h4>мінуси даних систем</h4>
											{/* <img src="..//img/arrow.png" alt="arrow" /> */}
										</div>
										<ul className="mt-10">
											<li>
												неможливо вести спостереження будь-якій точці світу
											</li>
											<li>
												мають деякі обмеження функціоналу по захисту і
												моніторингу
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</Section>
				</div>
				<div ref={section5}>
					<Section
						showArrow={false}
						goToSectionRef={section6}
						scrollTo={scrollTo}
					>
						<div
							className="sixthpageSave"
							style={{
								backgroundImage: 'url("..//img/save/save5.jpg")',
							}}
						>
							<div className="Box" ref={fourthRef}>
								<h1>ІМОБІЛАЙЗЕРИ</h1>
								<p>
									Імобілайзер блокує запуск двигуна та є одним із видів захисту
									автомобіля від викрадення. Зазвичай встановлюється в сучасні
									автомобілі з заводу та зчитує спеціальний чіп, вбудований у
									ключ. Якщо імобілайзер не розпізнає спеціальний чіп, запустити
									автомобіль неможливо.
								</p>
								<p>
									Мінусом цього рішення є можливість зловмисника скопіювати
									ключ, під'єднавшись до бортової системи авто через
									діагностичний роз'єм OBD. Для уникнення цієї ситуації
									встановлюються додаткові імобілайзери, чіпи яких неможливо
									підмінити без прямого доступу до них.
								</p>
							</div>
						</div>
					</Section>
				</div>
				<div ref={section6}>
					<Section
						showArrow={true}
						goToSectionRef={section7}
						scrollTo={scrollTo}
					>
						<div
							className="seventhpageSave"
							style={{
								backgroundImage: 'url("..//img/save/save6.jpg")',
							}}
						>
							<div className="Box " ref={fifthRef}>
								<h1>
									Для комплексного підходу захисту авто електронні системи
									використовуються разом з механічними та електромеханічними
									засобами:
								</h1>
								<div className="containerSavePage">
									<div className="card">
										<img
											className="imgAproved"
											src="..//img/aproved.png"
											alt="aproved"
										/>
										<h2>ЗАХИСНИЙ КОЖУХ БЛОКА УПРАВЛІННЯ</h2>
										<p>
											Запобігає заміні штатного блоку на заздалегідь
											підготовлений викрадачем, усуває можливість відключення
											ро’зємів для з’єднання з бортовою системою авто,
											фіксується за допомогою спеціальних зривних болтів, які
											неможливо відкрутити звичайними гайковими ключами
										</p>
									</div>
									<div className="card">
										<img
											className="imgAproved"
											src="..//img/aproved.png"
											alt="aproved"
										/>
										<h2>ЕЛЕКТРОМЕХАНІЧНИЙ ЗАМОК КАПОТУ</h2>
										<p>
											Захищає від проникнення в моторний відсік авто і не дає
											змоги дістатись до електронних засобів блокувань, працює в
											парі з встановленою системою захисту.
										</p>
									</div>
									<div className="card">
										<img
											className="imgAproved"
											src="..//img/aproved.png"
											alt="aproved"
										/>
										<h2>АВТОНОМНИЙ GPS МАЯК</h2>
										<p>
											З його допомогою можна відслідкувати місцезнаходження авто
											в будь-якій точці світу завдяки технологіям GPS. Має
											мініатюрні розміри, працює повністю автономно, що дає
											змогу сховати його в будь-якому місці, що робить
											непомітним для викрадача
										</p>
									</div>
								</div>
							</div>
						</div>
					</Section>
				</div>
				<div ref={lastSection}>
					<Section showArrow={false}>
						<Footer boxikRef={ boxikRef} />
					</Section>
				</div>
			</div>
		</>
	);
};

export default Animation(Save);
