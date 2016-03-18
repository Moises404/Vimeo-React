import express from 'express'
import request from 'request'
import {Vimeo} from 'vimeo'

const vimeoAccessToken = process.env.vimeo_access_token
const vimeoClientIdentifier = process.env.vimeo_client_identifier
const vimeoClientSecrets = process.env.vimeo_client_secrets
const lib = new Vimeo(vimeoClientIdentifier, vimeoClientSecrets, vimeoAccessToken)
const router = new express.Router()

let bodies 

function getCameo() {
	lib.request(/*options*/{
	    // This is the path for the videos contained within the staff picks channels
	    path : '/channels/cameo/videos',
	    // This adds the parameters to request page two, and 10 items per page
	    query : {
	        page : 2,
	        per_page : 10
	    }
	}, /*callback*/function (error, body) {
	    if (error) {
	        console.log('error')
	        console.log(error)
	    } else {
	        console.log('body')
	        console.log(body)
	        bodies = body
	        res.send(bodies).end()
	    }
	})
}


router.get('/getDB', (req, res) => {

	lib.request(/*options*/{
	    // This is the path for the videos contained within the staff picks channels
	    path : '/channels/staffpicks/videos',
	    // This adds the parameters to request page two, and 10 items per page
	    query : {
	        page : 2,
	        per_page : 20
	    }
	}, /*callback*/function (error, body) {
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
