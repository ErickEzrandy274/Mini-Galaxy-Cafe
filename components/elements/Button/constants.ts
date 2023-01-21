export const INITIAL_NUM = 1;
export const RESET_NUM = 0;

export const checkingDisabledButton = (error: boolean[]) => {
	const isError = error.findIndex((item: boolean) => item === true);

	return isError === -1
		? {
				additionClass:
					"text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-400 focus:ring  focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer",
				disable: false,
		  }
		: {
				additionClass: "text-gray-400 bg-gray-500 cursor-not-allowed",
				disable: true,
		  };
};