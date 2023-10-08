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

export const convertImage = (w: number, h: number) => `
  <svg 
		width="${w}" 
		height="${h}" 
		version="1.1" 
		xmlns="http://www.w3.org/2000/svg" 
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate 
			xlink:href="#r" 
			attributeName="x" 
			from="-${w}" 
			to="${w}" 
			dur="1s" 
			repeatCount="indefinite" 
		/>
  </svg>`;

export const toBase64 = (str: string) =>
	typeof window === "undefined"
		? Buffer.from(str).toString("base64")
		: window.btoa(str);
