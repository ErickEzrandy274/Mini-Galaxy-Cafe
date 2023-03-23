export const extractError = (err: any): string => {
	const { code } = err;
	const newError = code.substring(5).split("-");
	newError[0] =
		newError[0].substring(0, 1).toUpperCase() + newError[0].substring(1);
	return `${newError.join(" ")}!`;
};

export const toCapitalize = (text: string) => {
	return text.substring(0, 1).toUpperCase() + text.substring(1);
};

// reference link: https://medium.com/codelabs-unikom/membuat-format-rupiah-dengan-javascript-9a3334f42bad
export const makeRupiahValue = (price: number) => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	}).format(price);
};

// reference link: https://stackoverflow.com/questions/68932621/put-a-warning-if-page-refresh-in-reactjs
export const reloadWarning = () => {
	const unloadCallback = (e: any) => {
		e.preventDefault();
		e.returnValue = "";
		return "";
	};

	window.addEventListener("beforeunload", unloadCallback);
	return () => window.removeEventListener("beforeunload", unloadCallback);
};
