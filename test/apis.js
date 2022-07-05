const { expect } = require('chai');
const got = require('got');
const { startApiBuilder, stopApiBuilder } = require('./_base');

describe('APIs', function () {
	this.timeout(30000);
	let apibuilder;
	let client;

	/**
	 * Start API Builder.
	 */
	before(async () => {
		apibuilder = await startApiBuilder();
		const apikey = apibuilder.config.apikey;
		client = got.extend({
			prefixUrl: `http://localhost:${apibuilder.port}`,
			headers: {
				apikey,
				authorization: `Basic ${Buffer.from(apikey + ':').toString('base64')}`
			},
			throwHttpErrors: false
		});
	});

	/**
	 * Stop API Builder after the tests.
	 */
	after(() => stopApiBuilder(apibuilder));

	describe('Healthcheck', () => {
		it('should be able to hit the healthcheck API', async () => {
			const response = await client.get('apibuilderPing.json', {
				responseType: 'json'
			});
			expect(response.statusCode).to.equal(200);
			expect(response.body).to.deep.equal({ success: true });
		});
	});
});
