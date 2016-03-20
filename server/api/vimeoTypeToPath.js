
const standardQueryObject = {
	page : 1,
	per_page : 20
}

const paramsChannels = {
    path : '/channels',
    query : standardQueryObject
}

const paramsCategories = {
    path : '/categories',
    query : standardQueryObject
}

const paramsGroupsCameo = {
    path : '/groups/cameo',
    query : standardQueryObject
}

const paramsGroups = {
    path : '/groups',
    query : standardQueryObject
}

const paramsStaffPicks = {
    path : '/channels/staffpicks/videos',
    query : standardQueryObject
}


export const vimeoTypeToPath = {
	'channels': paramsChannels,
	'categories': paramsCategories,
	'staffpicks': paramsStaffPicks,
	'groups': paramsGroups
}


// function getStaffPicks(callback) {
// 	vimeoAPI.request(paramsStaffPicks, function (error, body) {
// 	    if (error) { console.log('error', error)
// 	    } else {
// 	        console.log('body')
// 	       	let staffpicks = body
// 	       	callback(null, staffpicks)
// 	    }
// 	})
// }

// router.get('/getDB', (req, res) => {
// 	let allData = {}
// 	async.parallel([
// 		// GET STAFF PICKS
// 		function (callback) {
// 			vimeoAPI.request(paramsStaffPicks, function (error, body) {
// 			    if (error) return callback(err)
// 			    allData.staffpicks = body
// 				callback()
// 			})
// 		},
// 		function (callback) {
// 			vimeoAPI.request(paramsCategories, function (error, body) {
// 				if (error) return callback(err)
// 				allData.categories = body
// 				callback()
// 			})
// 		}
// 	], function (err) {
// 		if (err) return next(err)
// 		console.log(allData)
// 		res.send(allData).end()	
// 	})
// })

// function getStaffPicks(callback) {
// 	vimeoAPI.request(paramsStaffPicks, function (error, body) {
// 	    if (error) { console.log('error', error) } 
// 	    else { 
// 	    	console.log('body')
// 	        // res.send(body).end()
// 	        let staffpicks = body
// 	        callback(null, staffpicks)
// 	    }
// 	})
// }

// router.get('/getDB', (req, res) => {
// 	vimeoAPI.request(paramsStaffPicks, function (error, body) {
// 	    if (error) { console.log('error', error)
// 	    } else {
// 	        console.log('body')
// 	        res.send(body).end()
// 	    }
// 	});	
// })
