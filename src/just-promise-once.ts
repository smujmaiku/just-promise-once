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

	target.once(type, (...data: any[]) => resolve(data));

	let timer;
	if (timeout !== undefined) {
		timer = setTimeout(() => reject(), timeout);
	}

	const result = await promise;

	if (timer) {
		clearTimeout(timer);
	}
	return result;
}

module.exports = justPromiseOnce
