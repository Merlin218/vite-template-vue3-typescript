import createRequest from '../axios';

const testApi = {
	test: () =>
		createRequest({
			url: '/shibes',
			method: 'get',
			params: {
				count: 10,
				urls: true,
				httpsUrls: true,
			},
		}),
};

export default testApi;
