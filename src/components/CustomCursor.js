"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [cursorVariant, setCursorVariant] = useState("default");

	useEffect(() => {
		const mouseMove = (e) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		};

		window.addEventListener("mousemove", mouseMove);

		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
	});

	const variants = {
		default: {
			x: mousePosition.x - 26,
			y: mousePosition.y - 26,
		},
	};

	const dotVariants = {
		default: {
			x: 23,
			y: 23,
		},
	};

	return (
		<>
			<motion.div className="cursor" variants={variants} animate={cursorVariant} transition={{ type: "tween", ease: "backOut" }}>
				<motion.div
					className="cursor-dot"
					variants={dotVariants}
					animate={cursorVariant}
					transition={{ type: "tween", ease: "backOut" }}
				></motion.div>
			</motion.div>
		</>
	);
}

export default CustomCursor;
