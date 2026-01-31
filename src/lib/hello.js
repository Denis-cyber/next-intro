export function getHelloMessage(params) {
	// request to database or external API
	return { message: 'Hello, from shared module!' };
}

export function createHelloGreeting (name) {
	return { message: `Hello ${name}, from shared module!` };
}
