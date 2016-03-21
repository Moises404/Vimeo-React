import express from 'express'
import request from 'request'
import {Vimeo} from 'vimeo'
import {vimeoTypeToPath} from './vimeoTypeToPath'
import async from 'async'

const vimeoAccessToken = process.env.vimeo_access_token
const vimeoClientIdentifier = process.env.vimeo_client_identifier
const vimeoClientSecrets = process.env.vimeo_client_secrets
const vimeoAPI = new Vimeo(vimeoClientIdentifier, vimeoClientSecrets, vimeoAccessToken)
const router = new express.Router()

// const allData = {
// 	staffpicks: {kay: 'value'},
// 	channels: {kay: 'value'},
// 	groups: {kay: 'value'},
// 	categories: {kay: 'value'}
// }


router.get('/getDB', (req, res) => {
	let allData = {}
	async.parallel([
		// GET STAFF PICKS
		function (callback) {
			vimeoAPI.request(vimeoTypeToPath['staffpicks'], function (error, body) {
			    if (error) return callback(error)
			    console.log(body)
			    allData.staffpicks = body
				callback()
			})
		},
		// GET CATEGORIES
		function (callback) {
			vimeoAPI.request(vimeoTypeToPath['categories'], function (error, body) {
				if (error) return callback(error)
				allData.categories = body
				callback()
			})
		},
		// GET CHANNELS
		function (callback) {
			vimeoAPI.request(vimeoTypeToPath['channels'], function (error, body) {
				if (error) return callback(error)
				allData.channels = body
				callback()
			})
		},
		// GET GROUPS
		function (callback) {
			vimeoAPI.request(vimeoTypeToPath['groups'], function (error, body) {
				if (error) return callback(error)
				allData.groups = body
				callback()
			})
		},
	], function (err) {
		if (err) return next(err)
		console.log('RETURNING-ALL-ASYNC-DATA')
		console.log(Object.keys(allData))
		res.send(allData).end()	
	})

	// vimeoAPI.request(vimeoTypeToPath['staffpicks'], function (error, body) {
	//     if (error) {
	//         console.log('error')
	//         console.log(error)
	//     } else {
	//         console.log('body')
	//         // console.log(body)
	//         // bodies = body
	//         res.send(body).end()
	//     }
	// });	
})

export default router
