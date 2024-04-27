import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const FaqItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	const { height, opacity } = useSpring({
		from: { height: 0, opacity: 0 },
		to: { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 },
	});

	return (
		<div>
			<button onClick={() => setIsOpen(!isOpen)}>{question}</button>
			<animated.div style={{ height, opacity, overflow: "hidden" }}>
				<p>{answer}</p>
			</animated.div>
		</div>
	);
};

export default FaqItem;
