//  old ext

require('./Injects/downloadFolder/downloadFolder.js')

// new ext
import testInjection from './Injects/testInjection/testInjection.js'
import repositoryThree from "./Injects/repositoryThree/repositoryThree";

import Router from './Router/Router.js'

let router = new Router()

// github.com/*/*
router.set('github\.com\/.+\/[\-\a-z_0-9]+')

// github.com/*/**
router.set('github\.com/.+/.+',[
	new repositoryThree()
	])

setInterval(()=>{
	router.immortalInjects();
},1000)