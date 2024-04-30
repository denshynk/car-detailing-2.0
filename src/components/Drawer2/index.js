import React from "react";

import styles from "./Drawer2.module.scss";

function Drawer({ opened, onClose, handleChange, handleSubmit, formData, drawerTop }) {

	
	return (
		<div
			className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}
			style={{ top: `${drawerTop}px` }}
		>
			<div className={styles.drawer}>
				<div className="d-flex align-start w100p">
					<div className="d-flex flex-column justify-center mb-50 w100p">
						<h2 className="mb-30 d-flex justify-end w100p  pt-20 ">
							<svg
								onClick={onClose}
								className="removebtn cu-p mr-40"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 50"
								width="35px"
								height="35px"
								style={{ fill: "white" }}
							>
								<path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
							</svg>
						</h2>
						<div className="contentBasket d-flex justify-center">
							<div
								className="LastBox_phone"
								style={{ left: "5%", width: "80%" }}
							>
								<div className="flex-box_phone" style={{ marginTop: "0px" }}>
									<h1 className="" style={{ fontSize: "4vh" }}>
										Зворотній звязок
									</h1>
									<div className="form__group_phone field_phone">
										<input
											type="text"
											className="form__field_phone"
											placeholder="firstName"
											required=""
											value={formData.firstName}
											onChange={handleChange}
										/>
										<label htmlFor="name" className="form__label_phone">
											Ваше ім’я *
										</label>
									</div>
									<div className="form__group_phone field_phone">
										<input
											type="text"
											className="form__field_phone"
											placeholder="phoneNumber"
											required=""
											onChange={handleChange}
										/>
										<label htmlFor="name" className="form__label_phone">
											Контактний номер *
										</label>
									</div>
									<div className="form__group_phone field_phone">
										<input
											type="text"
											className="form__field_phone"
											placeholder="email"
											required=""
											onChange={handleChange}
										/>
										<label htmlFor="name" className="form__label_phone">
											Ел. пошта
										</label>
									</div>
									<div className="form__group_phone field_phone">
										<input
											type="input"
											className="form__field_phone"
											placeholder="comment"
											required=""
											onChange={handleChange}
										/>
										<label htmlFor="name" className="form__label_phone">
											Коментар
										</label>
									</div>
									<button
										className="btn_phone"
										style={{}}
										onClick={handleSubmit}
									>
										Зворотній звязок
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Drawer;
