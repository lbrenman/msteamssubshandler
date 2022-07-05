module.exports = {
	// The configuration settings for the OAS2 flow-node: Amplify Unified Catalog APIs
	pluginConfig: {
		'@axway/api-builder-plugin-fn-swagger': {
			'ucswagger': {
				// It is possible to override URI options when constructing
				// outbound requests to this service.
				uri: {
					// protocol: 'https',
					// host: 'hostname',
					// port: 443,
					// basePath: '/api'
				}
			}
		}
	},
	// The following authorization credentials needed to use this service.
	// Please follow this guide to manually configure these credentials:
	// https://docs.axway.com/bundle/api-builder/page/docs/developer_guide/credentials/index.html
	authorization: {
		credentials: {
			'Amplify Unified Catalog APIs OAuth2ClientCredentials_clientCredentials': {
				type: 'oauth2',
				flow: 'clientCredentials',
				token_url: 'https://login.axway.com/auth/realms/Broker/protocol/openid-connect/token',
				scope: '',
				client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
				access_token: null
			}
		}
	}
};
