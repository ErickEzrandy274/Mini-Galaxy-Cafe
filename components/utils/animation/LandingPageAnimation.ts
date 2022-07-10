const hideContent = (type: "beverage" | "other") =>
	type === "beverage" ? -350 : 350;

export const titleVariant = {
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			stiffness: 120,
			mass: 2,
		},
	},
	hidden: (type: "beverage" | "other") => ({
		x: hideContent(type),
		opacity: 0,
	}),
};

export const buttonVariant = {
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			stiffness: 120,
			mass: 2,
			delay: 0.2,
		},
	},
	hidden: (type: "beverage" | "other") => ({
		x: hideContent(type),
		opacity: 0,
	}),
};

export const contentVariant = {
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			stiffness: 120,
			mass: 2,
			delay: 0.15,
		},
	},
	hidden: (type: "beverage" | "other") => ({
		x: hideContent(type) * -1,
		opacity: 0,
	}),
};
