import React from "react";
import { Link } from "react-router-dom";

import styles from "./Drawer.module.scss";

function Drawer({ opened, handleLinkClick, isActiveLink, toggleBasket }) {
	return (
		<div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
			<div className={styles.drawer}>
				<div className="p-30 d-flex flex-column w100p">
					<Link
						
						to="/"
						onClick={() => {
							handleLinkClick("/");
							toggleBasket();
						}}
					>
						Головна
					</Link>
					<Link
						
						to="/save"
						onClick={() => {
							handleLinkClick("/save");
							toggleBasket();
						}}
					>
						Захист вiд викрадення
					</Link>
					<Link
						
						to="/shumoizol"
						onClick={() => {
							handleLinkClick("/shumoizol");
							toggleBasket();
						}}
					>
						Шумо- вiбро iзоляцiя
					</Link>
					<Link
						
						to="/zahysnaplivka"
						onClick={() => {
							handleLinkClick("/zahysnaplivka");
							toggleBasket();
						}}
					>
						Захисна плiвка i тонування
					</Link>
					<Link
						
						to="/detailing"
						onClick={() => {
							handleLinkClick("/detailing");
							toggleBasket();
						}}
					>
						Детейлiнг
					</Link>
					<Link
						
						to="/galery"
						onClick={() => {
							handleLinkClick("/galery");
							toggleBasket();
						}}
					>
						Галерея
					</Link>

					<div className="contentBasket d-flex"></div>
				</div>
			</div>
		</div>
	);
}

export default Drawer;
