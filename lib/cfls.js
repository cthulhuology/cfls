module.exports = function (inbound,options) {
	var pkgcloud = require('pkgcloud'), 
		fs = require('fs')

	Array.prototype.contains = function(e) {
		return this.indexOf(e) >= 0
	}

	var A = inbound.replace(/\/+/g,"/").split('/')

	function fetchListing() {
		from_client = pkgcloud.storage.createClient(options[A[0].split(":")[0]])
		from_client.getContainers( function(err, containers) {
			if (err) return console.log("ERROR",err)
			var container = containers.filter(function(x) { return x.name == A[1] })[0]
			if (container) {
				container.getFiles(function (err,files) {
					if (err) return console.log("ERROR",err)
					console.log(JSON.stringify(files.map(function(x) { return x.name})))
				})
			}
		})
		
	}

	fetchListing()
}
