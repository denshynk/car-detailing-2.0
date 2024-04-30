import React, { useRef, useEffect } from "react";

import styles from "./DescktopCallBack.module.scss";

function Drawer({ opened, onClose, handleChange, handleSubmit, formData }) {
	const drawerRef = useRef(null);
	useEffect(() => {
		// Функция для закрытия Drawer при клике за его пределами
		const handleClickOutside = (event) => {
			if (
				opened && // Проверяем, что Drawer открыт
				drawerRef.current && // Проверяем, что drawerRef установлен
				!drawerRef.current.contains(event.target) && // Проверяем, что клик был за пределами Drawer
				!event.target.closest(".callBackBTN") // Проверяем, что клик не был на кнопке открытия
			) {
				onClose();
			}
		};

		// Добавляем обработчик события на document
		document.addEventListener("click", handleClickOutside);

		// Удаляем обработчик события при размонтировании компонента
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [opened, onClose]);


	return (
		<div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
			<div className={styles.drawer}>
				<div className="d-flex align-center  justify-center w100p">
					<div className={styles.background} ref={drawerRef}>
						<div className=" d-flex flex-column justify-center mb-50 ">
							<h2 className="mb-30 d-flex justify-end pt-20 ">
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
										<h1
											className=""
											style={{
												fontSize: "4vh",
												fontFamily: "Arimo",
												letterSpacing: "0.15rem",
											}}
										>
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
											onClick={(e) => {
												handleSubmit(e);
												onClose();
											}}
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
		</div>
	);
}

export default Drawer;
