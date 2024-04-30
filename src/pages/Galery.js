import React, { useRef, useState } from "react";
import Section from "../components/Section.js";
import styles from "./Container.module.scss";
import Footer from "../components/Footer.js";
import Animation from "../components/Animation.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // основные стили
import "swiper/css/effect-coverflow"; // стили для coverflow
import "swiper/css/pagination"; // стили для пагинации
import "swiper/css/navigation"; // стили для навигации
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./modullesGalery.scss";




const Galery = () => {
	const section1 = useRef();
	const section2 = useRef();
	const section4 = useRef();
	const boxikRef = useRef(null);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);



	const [imageData, setImageData] = useState([]);

	React.useEffect(() => {
		const fetchImageData = async () => {
			try {
				const response = await fetch(
					"https://server.autosafeculture.com/galery1"
				);
				if (response.ok) {
					const data = await response.json();
					setImageData(data);
				} else {
					throw new Error("Ошибка при загрузке данных");
				}
			} catch (error) {
				console.error("Ошибка:", error);
			}
		};

		fetchImageData();
	}, []);
	console.log(imageData);

	function scrollTo(section) {
		section.current.scrollIntoView({ behavior: "smooth" });
	}

	const handleImageChange = (index) => {
		setSelectedImageIndex(index);
	};

	return (
		<>
			<div
				className={`${styles.container} `}
				ref={boxikRef}
				style={{
					backgroundImage: 'url("..//img/galery.jpg")',
				}}
			>
				<div ref={section1}>
					<Section
						showArrow={true}
						scrollTo={scrollTo}
						goToSectionRef={section2}
					>
						<div className="container">
							<h1 className="heading"> Нашi роботи</h1>
							<Swiper
								effect={"coverflow"}
								grabCursor={true}
								centeredSlides={true}
								loop={true}
								slidesPerView={"auto"}
								coverflowEffect={{
									rotate: 0,
									stretch: 0,
									depth: 100,
									modifier: 2.5,
								}}
								pagination={{ el: ".swiper-pagination", clickable: true }}
								navigation={{
									nextEl: ".swiper-button-next",
									prevEl: ".swiper-button-prev",
									clickable: true,
								}}
								modules={[EffectCoverflow, Pagination, Navigation]}
								className="swiper_container"
								onSlideChange={(swiper) => {
									handleImageChange(swiper.realIndex);
								}}
							>
								{imageData.map((item, index) => (
									<SwiperSlide key={index}>
										<img src={item.src} alt={`Slide ${index}`} />
									</SwiperSlide>
								))}
								<div className="slider-controler">
									<div className="swiper-button-prev slider-arrow">
										<ion-icon name="arrow-back-outline"></ion-icon>
									</div>
									<div className="swiper-button-next slider-arrow">
										<ion-icon name="arrow-forward-outline"></ion-icon>
									</div>
									<div className="swiper-pagination"></div>
								</div>
							</Swiper>
						</div>

						<p className="galeryText">{imageData[selectedImageIndex]?.text}</p>
					</Section>
				</div>

				<div ref={section4}>
					<Section showArrow={false} goToSectionRef={section1}>
						<Footer boxikRef={boxikRef} />
					</Section>
				</div>
			</div>
		</>
	);
};

export default Animation(Galery);
