import express from 'express'
import request from 'request'
import {Vimeo} from 'vimeo'
import {vimeoTypeToPath} from './vimeoTypeToPath'

const vimeoAccessToken = process.env.vimeo_access_token
const vimeoClientIdentifier = process.env.vimeo_client_identifier
const vimeoClientSecrets = process.env.vimeo_client_secrets
const vimeoAPI = new Vimeo(vimeoClientIdentifier, vimeoClientSecrets, vimeoAccessToken)
const router = new express.Router()

router.get('/getDB(/:type)?', (req, res) => {
	console.log('------in  express api')

	console.log(req.params)

	const type = req.params.type ? req.params.type : 'staffpicks'

	const vimeoParams = vimeoTypeToPath[type]
     // vimeoParams.query.page req.params.page
	console.log('fetching from vimeo: ', vimeoParams)

	vimeoAPI.request(vimeoParams, function (error, body) {
	    if (error) {
	        console.log('error')
	        console.log(error)
	        res.send({error: error})
	    } else {
	        console.log('body')
	        const response = {[type]: body}
	        console.log(response)
	        res.send(response).end()
	    }
	});	
})

export default router