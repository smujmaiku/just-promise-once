/*!
 * Just Promise Once <https://github.com/smujmaiku/just-promise-once>
 * Copyright(c) 2020 Michael Szmadzinski
 * MIT Licensed
 */

import justDefer from 'just-defer';

/**
 * Use once listener as a promise
 * @param {*} target 
 * @param {string} type 
 * @param {number?} timeout ms to error out
 * @returns {Promise(Array)}
 */
async function justPromiseOnce(target: any, type: string, timeout: number | undefined = undefined): Promise<any[]> {
	const { resolve, reject, promise } = justDefer();

	const handleEvent = (...data: any[]) => resolve(data);
	target.once(type, handleEvent);

	let timer;
	if (timeout !== undefined) {
		timer = setTimeout(() => {
			target.off(type, handleEvent);
			reject();
		}, timeout);
	}

	const result = await promise;
	target.off(type, handleEvent);

	if (timer) {
		clearTimeout(timer);
	}
	return result;
}

module.exports = justPromiseOnce
