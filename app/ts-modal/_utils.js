import defaultOptions from './_default-options';
import angular from 'angular';
const label =  `[tsModalService]`;

/**
 * create guid
 * @returns {*} guid
 */
export function guid() {
	return ((typeof(window.crypto) != 'undefined'
			&& typeof(window.crypto.getRandomValues) != 'undefined')
					? function() { // If we have a cryptographically secure PRNG
				var buf = new Uint16Array(8);
				window.crypto.getRandomValues(buf);
				var S4 = function(num) {
					var ret = num.toString(16);
					while(ret.length < 4){ ret = "0"+ret; }
					return ret;
				};
				return (S4(buf[0])+S4(buf[1])+"-"
				+S4(buf[2])+"-"+S4(buf[3])+"-"
				+S4(buf[4])+"-"+S4(buf[5])+S4(buf[6])+S4(buf[7]));
			}
					: function() { // Otherwise, just use Math.random
				return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
						.replace(
								/[xy]/g,
								function(c) {
									var r = Math.random()*16|0,
											v = c == 'x' ? r : (r&0x3|0x8);
									return v.toString(16);
								}
						); // replace
			}
	)();
}


/**
 * validate options
 * also cleans it up
 * @param options
 * @param $injector
 */
export function cleanValidateOptions(options, $injector) {

	// check if options is an object and if it has a directive property
	if (typeof options !== 'object' || !options.directive) {
		throw `${label} directive property is required`;

	// check if directive is a string
	} else if (typeof options.directive !== 'string') {
		throw `${label} directive must be a string`;

	// check if directive is available in ng module
	} else if (!$injector.has(options.directive + 'Directive')) {
		throw `${label} ${options.directive} is not a valid directive`;
	}

	// assign
	options = Object.assign({}, defaultOptions, options);

	// size
	// force medium default when an unknown value is supplied
	if (options.size != 'small' && options.size != 'medium' && options.size != 'large') {
		console.warn(`[Modal Warning] ${options.size ? options.size : 'Unknown'} is not a valid size - defaulting to "medium" (small|medium|large)`);
		options.size = 'medium';
	}

	// display
	// force 'component' default when an unknown display is supplied
	if (options.display != 'component' & options.display != 'notification') {
		console.warn(`${label} ${options.display ? options.display : 'Unknown'} is not a valid display type - defaulting to "component" (component|notification)`);
		options.display = 'scroll';
	}

	return options;
}





export function resolve($q, obj) {
	let promises = [];

	for (let r in obj) {

		if (typeof obj[r] !== 'function') {
			throw `${label} resolve must return object of functions`;
		} else {

			let deferred = $q(resolve => {
				resolve(obj[r]())
			});

			promises.push(deferred);
		}
	}

	return $q.all(promises);
}