import { useEffect, useRef } from "react";
import styles from "./FullSections.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Section({
	scrollTo,
	goToSectionRef,
	showArrow,
	children, // Добавляем свойство children
}) {
	return (
		<div className={styles.section}>
			{children}
			{showArrow && (
				<button
					className={styles.downarrow}
					onClick={() => scrollTo(goToSectionRef)}
				></button>
			)}
		</div>
	);
}
