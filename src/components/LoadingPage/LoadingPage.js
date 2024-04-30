import React from "react";
import styles from "./LoadingPage.module.scss";
import { ReactComponent as Logo } from "..//../img/ASC_logo_5_preloading.svg";


function LoadingPage() {


	return (
		<>
			<div className={`${styles.loadingPage} ${styles.animateOut}`}>
				<div className={styles.svgImage} style={{ transform: "scale(0.7)" }}>
					<Logo />
				</div>

				<svg className={styles.nameContainer} width="300" height="300">
					<text className={styles.logoName}>
						<textPath xlinkHref="#textPath">
							Auto Safe Culture Auto Safe Culture Auto Safe Culture
						</textPath>
					</text>
					<path
						id="textPath"
						d="M 150 150 m -125, 0 a 125,125 0 1,1 250,0 a 125,125 0 1,1 -250,0"
						fill="transparent"
					/>
				</svg>
			</div>
		</>
	);
}

export default LoadingPage;
