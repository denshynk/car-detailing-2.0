import React, { useRef } from "react";
import styles from "./Container.module.scss";
import Section from "../components/Section.js";
import Footer from "../components/Footer.js";
import Animation from "../components/Animation.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Detailing = () => {
	const section1 = useRef();
	const section2 = useRef();
	const section3 = useRef();
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
					x: -500,
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
					x: 500,
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
			<div className={`boxik ${styles.container}`}>
				<div ref={section1}>
					<Section
						showArrow={true}
						scrollTo={scrollTo}
						goToSectionRef={section2}
					>
						<div
							className="firstPageDet"
							style={{
								backgroundImage: 'url("..//img/detailing/detailing1.jpg")',
							}}
						>
							<div className="firstPageBox" ref={firstRef}>
								<div className="content">
									<h1>ЩО ТАКЕ “ДЕТЕЙЛІНГ ДОГЛЯД”?</h1>
									<p>
										Детейлінг, догляд за автомобілем - являє собою більш глибоке
										і ретельне очищення кузова автомобіля від забруднень із
										застосуванням високотехнологічних та професійних засобів.
										Особлива увага приділяється дрібним деталям у важкодоступних
										місцях. Ваш автомобіль набуде чудового зовнішнього вигляду
										без мікроподряпин і мокрих автокрісел
									</p>
									<div className="d-flex flex-column align-end  mt-20">
										<h2>ПЕРЕВАГИ ДЕТЕЙЛІНГ МИТТЯ</h2>
										<ul>
											<li>використання спеціальної автохімії</li>
											<li>професійнІ інструменти та приладдя</li>
											<li>позбавлення від забруднень різної складності</li>
										</ul>
									</div>
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
							className="secondPageDet"
							style={{
								backgroundImage: 'url("..//img/detailing/detailing2.jpg")',
							}}
						>
							<div className="firstPageBox" ref={secondtRef}>
								<h1>ASC проводить трифазне миття автомобіля</h1>
								<div className="container-cart">
									<div className="cart">
										<h1>1</h1>
										<img src="..//img/detailing/detailing2/1.jpg" alt="det1" />
										<p>
											На першому етапі відбувається первинна обробка кузова
											автомобіля безконтактним шампунем. Потім на автомобільні
											диски наноситься слабокислий склад. Після безконтактного
											миття фахівець оглядає автомобіль на наявність в'їлих плям
											та забруднень. Усі ці сліди видаляються за допомогою
											спеціальної автохімії та професійних інструментів під час
											другої фази.
										</p>
									</div>
									<div className="cart">
										<h1>2</h1>
										<img src="..//img/detailing/detailing2/2.jpg" alt="det2" />
										<p>
											Друга фаза починається з ручного миття автомобіля
											спеціальним шампунем за допомогою губки. Крупнопориста
											губка видаляє тверді частинки з поверхні, не пошкоджуючи
											лакофарбове покриття авто.
										</p>
									</div>
									<div className="cart">
										<h1>3</h1>
										<img src="..//img/detailing/detailing2/3.jpg" alt="det3" />
										<p>
											На третій фазі відбувається консервація кузова
											антистатичним полірувальним складом. Цей засіб надає
											автомобільному покриттю гідрофобного ефекту, що робить
											колір більш глибоким і насиченим. В кінці за допомогою
											апарату турбосушки та мікрофібрових рушників фахівці
											проводять сушку та продування кузова
										</p>
									</div>
								</div>
							</div>
						</div>
					</Section>
				</div>
				<div ref={section3}>
					<Section showArrow={false} scrollTo={scrollTo}>
						<div
							className="thirdPageDet"
							style={{
								backgroundImage: 'url("..//img/detailing/detailing3.jpg")',
							}}
						>
							<div className="firstPageBox" ref={thirstRef}>
								<div className="content">
									<h3>
										У ході проведення преміум миття використовуються тільки
										професійні інструменти та високотехнологічне обладнання:
									</h3>
									<ul>
										<li>мікрофіброві рушники для сушіння кузов</li>
										<li>вафельні мікрофіброві серветки</li>
										<li>рушники зі штучної замші для очищення отворів</li>
										<li>
											спеціальні пензлики для видалення важкодоступних
											забруднень
										</li>
									</ul>
									<p>
										Мікрофіброві рушники використовуються для сушіння не
										випадково; завдяки м'якості вони не пошкоджують покриття
										авто, не залишають на ньому розводів, ворсинок та інших
										слідів. Регулярне проведення детейлінг миття збереже
										лакофарбове покриття автомобіля в ідеальному стані. Ми
										наполегливо рекомендуємо проводити детейлінг догляд на
										початку сезону. Особливо це актуально навесні, коли
										автомобіль потребує очищення від солей та реагентів.
									</p>
								</div>
							</div>
						</div>
					</Section>
				</div>
				<div ref={section3}>
					<Section showArrow={false} scrollTo={scrollTo}>
						<div
							className="fourthPageDet"
							style={{
								backgroundImage: 'url("..//img/detailing/detailing4.jpg")',
							}}
						>
							<div className="firstPageBox">
								<div className="content-left" ref={fourthRef}>
									<h1>ПОСЛУГА ХІМЧИСТКИ САЛОНУ АВТО</h1>
									<div className="conatainer">
										{" "}
										<img
											src="..//img/detailing/detailing4.1.jpg"
											alt="detailing4.1"
										/>
										<p>
											Хімчистка автомобіля - це процес глибокого очищення всіх
											поверхонь від різних забруднень, плям і пилу за допомогою
											спеціальних мийних засобів та інструментів. Хімчистка дає
											змогу зберегти салон свіжим, приємним і доглянутим.
										</p>
									</div>
									<p>
										Рекомендується проводити хімчистку не рідше, ніж один раз на
										2-3 місяці. Це допоможе зберігати салон в ідеальному стані
										протягом тривалого часу і уникати необхідності звертатися до
										ремонтних послуг протягом багатьох років. У комплексну
										хімчистку автомобіля входить: чистка всіх елементів салону,
										багажного відділення і ніші із запасним колесом.
									</p>
								</div>
								<div className="content-right" ref={fifthRef}>
									<h1>Процес проведення хімчистки:</h1>
									<ul>
										<li>
											Поверхневе прибирання: видалення пилу за допомогою
											пензликів, щіток і мікрофібрових ганчірок.
										</li>
										<li> Чистка підлоги з вилученням сидінь.</li>
										<li>
											{" "}
											Чистка стелі: використання спеціальних мікрофібрових
											ганчірок і щіток для матеріалу алькантара.
										</li>
										<li>
											Чищення автомобільного пластику: нанесення спеціальної
											піни, яка видаляє наліт за допомогою щітки.
										</li>
										<li>Професійне чищення шкіряних елементів салону. </li>
										<li>
											Очищення текстильних сидінь: обробка мийним засобом,
											видалення глибоких плям і пилососом.
										</li>
										<li>
											Обов'язкове чищення багажного відділення або ніші із
											запасним колесом.
										</li>
										<li>Природна сушка.</li>
									</ul>
								</div>
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

export default Animation(Detailing);
