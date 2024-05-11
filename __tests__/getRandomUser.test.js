const getRandomUser = require('../src/getRandomUser');

describe('Test getRandomUser', () => {
	test('data is fetched from api', async () => {
		global.fetch = jest.fn().mockResolvedValue({
			json: jest.fn().mockResolvedValue({ username: 'Test User' }),
		});
		const data = await getRandomUser();
		expect(fetch).toHaveBeenCalled();
		expect(data.username).toEqual('Test User');
	});
});
