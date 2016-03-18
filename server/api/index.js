import express from 'express'
import request from 'request'
import {Vimeo} from 'vimeo'

const vimeoAccessToken = process.env.vimeo_access_token
const vimeoClientIdentifier = process.env.vimeo_client_identifier
const vimeoClientSecrets = process.env.vimeo_client_secrets
const lib = new Vimeo(vimeoClientIdentifier, vimeoClientSecrets, vimeoAccessToken)
const router = new express.Router()

router.get('/getDB', (req, res) => {
	lib.request({
	    path : '/channels/staffpicks/videos',
	    query : {
	        page : 2,
	        per_page : 20
	    }
	}, function (error, body) {
	    if (error) {
	        console.log('error')
	        console.log(error)
	    } else {
	        console.log('body')
	        // console.log(body)
	        // bodies = body
	        res.send(body).end()
	    }
	});	
})

export default router
