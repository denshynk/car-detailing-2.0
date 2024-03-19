import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Save from "./pages/Save";
import Galery from "./pages/Galery";
import Detailing from "./pages/Detailing";
import Shumoizol from "./pages/Shumoizol";
import ZahysnaPlivka from "./pages/ZahysnaPlivka";
import Footer from "./components/Footer.js";




function App() {
	return (
		<div className="main">
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/save" element={<Save />} />
				<Route path="/detailing" element={<Detailing />} />
				<Route path="/shumoizol" element={<Shumoizol />} />
				<Route path="/zahysnaplivka" element={<ZahysnaPlivka />} />
				<Route path="/galery" element={<Galery />} />
			</Routes>
		</div>
	);
}

export default App;
