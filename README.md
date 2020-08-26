# Just Promise Once

Do you need to await on a `once` event?
Would you like to avoid callbacks in callbacks with your eventlisteners?
Has your socket.io authentication logic gotten out of hand?

Just Promise Once!

## Installation

`npm i just-promise-once`

## Usage

Socket.io authorization

```js
async function socketConnection(socket) {
	// Handle authorization first
	const [authorization] = await justPromiseOnce(socket, 'authorization', AUTH_TIMEOUT);
	await handleAuthorization(authorization);

	// Secure protected methods
	socket.on('protectedMethod', handleProtectedMethods);
}
```

## License

Copyright (c) 2020, Michael Szmadzinski. (MIT License)
