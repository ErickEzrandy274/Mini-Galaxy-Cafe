export const menutitleAnimation = {
	initial: { opacity: 0, scale: 0 },
	animate: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0 },
	transition: {
		duration: 1,
		stiffness: 100,
		delay: 0.5,
	},
};

export const buttonMenuAnimation = {
	initial: { y: "-100vw" },
	animate: { y: 0 },
    exit: { y: "-100vw" },
    transition: {
        duration: 1.5,
        stiffness: 100,
    }
};

export const menuNameAnimation = {
	initial: { y: "100vw" },
	exit: { y: "100vw" },
};