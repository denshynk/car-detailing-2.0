import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import { AnimatePresence } from "framer-motion";

import LoadingPage from "./components/LoadingPage/LoadingPage.js";
import Header from "./components/Header";
import Home from "./pages/Home";
import Save from "./pages/Save";
import Galery from "./pages/Galery";
import Detailing from "./pages/Detailing";
import Shumoizol from "./pages/Shumoizol";
import ZahysnaPlivka from "./pages/ZahysnaPlivka";
import CallBackBTN from "./components/CallBackBTB.js";
import Drawer2 from "./components/Drawer2/index.js";
import DopPoslugy from "./pages/DopPoslugy.js";
import FAQ from "./pages/FAQ.js";
import DesktopCallBack from "./components/DesktopCallBack/index.js";
import Contacts from "./pages/Contacts.js";
import GoogleTagManager from "./components/GoogleTagManager.js";

function App() {
	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);
	const [callBackOpen, setCallBackOpen] = useState(false);
	const [callBackDesktopOpen, setCallBackDesktopOpen] = useState(false);
	const [formData, setFormData] = React.useState({
		firstName: "",
		phoneNumber: "380",
		email: "",
		comment: "",
	});

	const handleChange = (e) => {
		const { placeholder, value } = e.target; // Исправлено использование placeholder на name

		if (placeholder === "phoneNumber") {
			const phoneNumber = value.replace(/\D/g, "");

			const formattedPhoneNumber = phoneNumber.slice(0, 12);

			// Обновляем состояние с форматированным номером
			setFormData({ ...formData, [placeholder]: formattedPhoneNumber });
		} else {
			// Для других полей просто обновляем значение в состоянии
			setFormData({ ...formData, [placeholder]: value });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.phoneNumber && formData.firstName) {
			try {
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
				closeCallBack();
			} catch (error) {
				console.error("Error:", error);
			}
		} else {
			alert(
				"Будь ласка, заповніть усі поля або перевірте правильність написаного номера."
			);
		}
	};

	React.useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 600);
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleCallBack = () => {
		setCallBackOpen(true);
		document.body.style.overflow = callBackOpen ? "auto" : "hidden";
	};

	const closeCallBack = () => {
		setCallBackOpen(false);
		document.body.style.overflow = "auto"; // Включить скролл body
	};

	const handleCallBackDesktop = () => {
		setCallBackDesktopOpen(true);
		document.body.style.overflow = callBackDesktopOpen ? "auto" : "hidden";
	};

	const closeCallBackDesktop = () => {
		setCallBackDesktopOpen(false);
		document.body.style.overflow = "auto"; // Включить скролл body
	};

	const scrolTo = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const [loading, setLoading] = useState(true);
	React.useEffect(() => {
		setTimeout(() => setLoading(false), 4500);
	}, []);

	const location = useLocation();
	const [drawerTop, setDrawerTop] = useState(0);

	const [isActiveLink, setIsActiveLink] = useState(null);
	const handleLinkClick = (link) => {
		setIsActiveLink(link);
		window.scrollTo(0, 0);
	};

	return (
		<>
			{/* <GoogleTagManager /> */}
			{loading && <LoadingPage />}
			<CallBackBTN
				isWideScreen={isWideScreen}
				handleCallBack={handleCallBack}
				handleCallBackDesktop={handleCallBackDesktop}
			/>
			<DesktopCallBack
				drawerTop={drawerTop}
				opened={callBackDesktopOpen}
				onClose={closeCallBackDesktop}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				formData={formData}
				setFormData={setFormData}
			/>
			<div className="secret">
				{/* Привязываем ref к Header */}
				<Header
					isWideScreen={isWideScreen}
					scrolTo={scrolTo}
					setDrawerTop={setDrawerTop}
					drawerTop={drawerTop}
					isActiveLink={isActiveLink}
					setIsActiveLink={setIsActiveLink}
					handleLinkClick={handleLinkClick}
				/>
				{/* Устанавливаем top для Drawer с учетом полученной высоты */}
				<Drawer2
					drawerTop={drawerTop}
					opened={callBackOpen}
					onClose={closeCallBack}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					formData={formData}
					setFormData={setFormData}
				/>
			</div>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route
						index
						element={
							<Home
								setIsActiveLink={setIsActiveLink}
								handleLinkClick={handleLinkClick}
							/>
						}
					/>
					<Route path="/save" element={<Save />} />
					<Route path="/detailing" element={<Detailing />} />
					<Route path="/shumoizol" element={<Shumoizol />} />
					<Route path="/zahysnaplivka" element={<ZahysnaPlivka />} />
					<Route path="/dodatkoviposlugy" element={<DopPoslugy />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/galery" element={<Galery />} />
					<Route
						path="/contacts"
						element={<Contacts drawerTop={drawerTop} />}
					/>
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
