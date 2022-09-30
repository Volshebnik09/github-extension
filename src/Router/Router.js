export default class  {
	url;

	uuidv4() {
	 	return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
	    	(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
		);
	}

	routes = []

	set(pattern='**/*', injections=[]){
		this.routes[pattern] = {
			injections: injections,
			pattern: pattern
		}
	}

	immortalInjects(){
		if (this.url !== window.location.toString()){
			this.inject()
		}
	}

	inject(){
		this.url = window.location.toString()
		for (let pattern in this.routes){
			if (this.url.match(pattern) !== null){
				this.routes[pattern].injections.forEach((f)=>{
					f.inject();
				})
			}
		}
	}
}