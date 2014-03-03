cfls
=========

CloudFiles ls

Getting Started
---------------

	cfcp cf://container/

Returns a listing for a container's contents

To configure you can create a ~/.cfcprc config javascript:

	module.exports = {
		cf: {
			provider: 'rackspace',
			username: 'UUUUUUUUU',
			apiKey: 'XXXXXXXXXXXXXXXXXXXX',
			region: 'ORD'
		}
	}

With your credentials.  You can support multiple providers and configs
for example you could setup two separate data centers with two different
user and api keys:

	module.exports = {
		ord: {
			provider: 'rackspace',
			username: 'UUUUUUUUU',
			apiKey: 'XXXXXXXXXXXXXXXXXXXX',
			region: 'ORD'
		}
		dfw: {
			provider: 'rackspace',
			username: 'VVVVVVVVVV',
			apiKey: 'YYYYYYYYYYYYYYYYYYYY',
			region: 'DFW'
		}
	}

