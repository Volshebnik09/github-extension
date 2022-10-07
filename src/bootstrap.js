//  old ext


chrome.storage.sync.get({
	"download-btn__enabled":"true",
},(items)=>{
	if (items["download-btn__enabled"])
		require('./Injects/downloadFolder/downloadFolder.js')
})

// new ext
import testInjection from './Injects/testInjection/testInjection.js'
import repositoryThree from "./Injects/repositoryTree/repositoryTree";
import clearInjections from "./Injects/clearInjections";
import FixImageWidth from "./Injects/FixImageWidth/FixImageWidth";

import Router from './Router/Router.js'

let router = new Router()

router.set('github\.com.+',[
	new clearInjections()
])

// github.com/*/*
router.set('github\.com\/.+\/[\-\a-z_0-9]+')

// github.com/*/**
router.set('github\.com/.+/.+',[
	new repositoryThree(),
	new FixImageWidth(),
	])

setInterval(()=>{
	router.immortalInjects();
},1000)
