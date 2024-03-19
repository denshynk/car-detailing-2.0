import React, { useRef } from "react";
import Section from "../components/Section.js";
import styles from "./Container.module.scss";

import Footer from "../components/Footer.js";

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

	return (
		<>
			<div className={`${styles.container}`}>
				<div ref={section1}>
					<Section
						showArrow={true}
						scrollTo={scrollTo}
						goToSectionRef={section2}
					>
						<div
							className="firstPageTAG"
							style={{
								backgroundImage: 'url("..//img/cars/2.jpg")',
							}}
						>
							<div className="firstPageBox">
								<div className="content">
									<h1>Шумоізоляція автомобіля</h1>
									<p className="text-size">
										Сучасні люди страждають від багатьох наслідків прогресу та
										цивілізації, один із яких – це шум. Він переслідує людину
										скрізь: вдома, на роботі, у громадському та особистому
										транспорті.. Для порятунку від них знадобиться шумоізоляція
										автомобіля – комплекс заходів, спрямованих на суттєве
										зменшення або повне звільнення від шумів та сторонніх
										звуків.
									</p>
									<p className="text-size">
										Також серед автолюбителів існує немало меломанів, які звикли
										насолоджуватися якісним звуком своєї аудіосистеми. Саме
										шумоізоляція- це один з небагатьох ефективних засобів для
										покращення звуку в автомобілі.
									</p>
									<p className="lasttextbox">
										Ця методика дозволяє зменшити проникнення шумів у салоні,
										зробити користування машиною комфортним. Шумопогашення та
										віброізоляція авто досягається шляхом використання
										спеціальних матеріалів. Вони покликані зменшувати або
										повністю виключати не тільки звуки, що проникають ззовні,
										але і ті, які виробляються механізмами і деталями самої
										автомашини, наприклад, шум двигуна, скрипи, тертя елементів,
										що рухаються.
									</p>
								</div>
								<button onClick={() => scrollTo(section2)}>Детальніше</button>
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
							className="thirdpage"
							style={{
								backgroundImage: 'url("..//img/cars/9.jpg")',
							}}
						>
							<div className="Box">
								<h1 className="text-size-shum">
									Як вибрати шумоізоляцію автомобіля
								</h1>
								<p>
									Стандартний шум для авто виконується для всього транспорту, що
									сходить з конвеєрів заводів. Однак її може бути недостатньо
									для повного усунення неприємних звуків, адже їхня поява багато
									в чому залежить від умов та інтенсивності експлуатації
									транспортного засобу.
								</p>
								<p>
									Тому шумоізоляція для авто, що активно використовується, має
									особливе значення. Вона здатна знизити навантаження на водія
									та зробити керування більш спокійним, комфортним та безпечним.
								</p>
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
						<div className="secondPageTag">
							<div className="boxContainer">
								<div className="textConteiner">
									<h1 style={{}}>
										Шуми, що проникають в машину, бувають двох видів:
									</h1>
									<p>
										<li>
											<b>Зовнішні</b> , що потрапляють ззовні, тобто первинні.
										</li>
										<li>
											<b>Внутрішні</b>, що виробляються самим автомобілем, тобто
											вторинні.
										</li>
									</p>
									<p>
										Спочатку необхідно виконати віброізоляцію, яка погасить
										вторинні шуми, та був провести шумоізоляцію, спрямовану
										ліквідацію первинних шумів. Комплексна процедура дозволить
										зробити машину найкомфортнішою для використання в різних
										умовах.
									</p>
									<p>
										Ціна шумоізоляції нових і автомобілів, що були в
										експлуатації, багато в чому залежить від вибору матеріалів.
										Їх вибирають залежно від того, яке навантаження посідає ту
										чи іншу оброблювану зону машини. Матеріали для звукоізоляції
										можуть бути такими:
									</p>
									<p>
										<li>вібропоглинаючі</li>
										<li>звукопоглинаючі</li>
										<li>шумоізолюючі</li>
										<li>теплоізолюючі</li>
										<li>антискрипні</li>
									</p>

									<p>
										Скористатися лише одним типом матеріалів найчастіше
										недостатньо. Щоб зробити автомобіль гранично тихим,
										потрібний комплексний підхід.
									</p>
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
						<div className="secondPageTag">
							<div className="boxContainer">
								<div className="textConteiner">
									<h1 style={{ fontSize: "30px" }}>
										Якісна віброізоляція машини це перший етап.
									</h1>
									<p>
										Після її використання та нанесення шумоізоляційних засобів
										потрібно позбутися скрипів, рівень яких індивідуальний для
										кожного конкретного транспортного засобу. Зазвичай ця дія
										стає завершальною операцією, результат якої – повноцінне та
										комплексне обезшумлення для машини будь-якого типу, віку,
										марки та призначення.
									</p>
									<p>
										<b>
											Частини транспортного засобу виробляють шуми та скрипи
											різної інтенсивності:
										</b>
									</p>
									<ul>
										<li>
											<p>
												Двері спочатку, на виробництві, недостатньо ізольовані,
												тому в першу чергу потребують обробки. Через них у салон
												проникає найбільше сторонніх звуків, тому їм потрібно
												приділити більше уваги та зусиль.
											</p>
										</li>
										<li>
											<p>
												Арки більше за інші елементи беруть участь у створенні
												та розподілі по машині вібрацій, тому задіяти для них
												шумоізоляційні матеріали не має сенсу. Більше уваги
												потрібно приділити віброізоляційним процедурам.
											</p>
										</li>
										<li>
											<p>
												Підлога піддається значному вібронавантаженню і служить
												провідником шумів, тому що безпосередньо близько
												розташований до двигуна, колес і власне дороги. Вони є
												основними виробниками сторонніх звуків.
											</p>
										</li>
										<li>
											<p>
												Багажник – одна з частин транспортного засобу, що
												потребує ізоляції. Через нього проникає багато шуму та
												вібрацій.
											</p>
										</li>
										<li className="visabilyti">
											Дах передає звуки дощу, вітру, гул, що виникає при
											швидкому русі транспорт, тому теж потребує обробки.
										</li>
									</ul>
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
						<div className="secondPageTag">
							<div className="boxContainer">
								<div className="textConteiner">
									<p>
										Ізолювати чи ні капот – вирішує власник, тому що є думка, що
										це ефективно лише у разі виконання всього комплексу робіт із
										шумоізоляції.
									</p>
									<p>
										Таким чином, тільки комплексне та повна знешумлення авто, у
										якої ціна залежить від підбору матеріалів та обсягу робіт,
										може забезпечити високий рівень комфорту транспортного
										засобу.
									</p>
									<ul>
										<p>
											Хороша шумоізоляція авто забезпечується комплексним
											підходом до всіх етапів виконання роботи:
										</p>

										<li>
											<p>Вибір матеріалів.</p>
										</li>
										<li>
											<p>
												Використання спеціальних пристроїв, приладів та
												інструментів.
											</p>
										</li>
										<li>
											<p>Роботу підготовленого персоналу.</p>
										</li>
										<li>
											Дах передає звуки дощу, вітру, гул, що виникає при
											швидкому русі транспорт, тому теж потребує обробки.
										</li>
									</ul>
									<p>
										Ці умови забезпечує <b>Auto Safe Culture</b>. У нас можна
										замовити як окрему послугу, так і їхній комплекс. Це
										дозволить замовнику швидко упорядкувати автомобіль. Наша
										компанія <b>ASC</b> забезпечує відмінну якість, швидкість
										виконання та професіоналізм, доступну вартість.
									</p>
								</div>
							</div>
						</div>
					</Section>
				</div>
				<div ref={section6}>
					<Section showArrow={false} goToSectionRef={section1}>
						<Footer />
					</Section>
				</div>
			</div>
		</>
	);
};

export default Shumoizol;