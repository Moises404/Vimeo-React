console.log('SERVER INDEX.jS')

// sets environment variables
if (process.env.NODE_ENV !== 'production') {
	try {
		var env = require('../env')
		Object.keys(env).map(function (e) {
			process.env[e] = env[e]
		})
		console.log('Set environment variables successfully')
	} catch (error) {
		console.log('Missing environement file!')
		throw error
	}
}

require('babel-register')
require('./server')


console.log('SERVER INDEX.jS --END')
