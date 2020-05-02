const fetchData = async userInput => {
	const response = await axios.get("http://www.omdbapi.com/", {
		params: {
			apiKey: "387f6970",
			// i: "tt0118661"
			s: userInput
		}
	});

	console.log(response.data);
};
let timeoutId;
const onInput = event => {
	if (timeoutId) {
		console.log('timeoutId', timeoutId)
		clearTimeout(timeoutId);
	}
	timeoutId = setTimeout(() => {
		let userInput = event.target.value;
		console.log('userInput', userInput)
		fetchData(userInput);
	}, 1000);
};

const input = document.querySelector("input");
input.addEventListener("input", onInput);
