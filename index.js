/**
 * Created by ahadbokhari on 9/24/16.
 */
/**
 * Returns the last element of array
 * @param {arr} array
 * @return {value}
 */

module.exports = (arr) => {
	if (!Array.isArray(arr)) {
		throw new TypeError('First Argument must be array')
	}
	if (arr === null) {
		throw new TypeError('No, cannot call on null')
	}
	if (arr === []) {
		return undefined
	}
	return arr[arr.length - 1];
}