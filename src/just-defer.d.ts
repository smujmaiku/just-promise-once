declare module 'just-defer' {
	interface JustDeferInterface<T = any> {
		promise: () => Promise<T>,
		resolve: (T) => void,
		reject: (Error) => void,
	}

	function justDefer(): JustDeferInterface;
	export = justDefer;
}
