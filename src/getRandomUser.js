async function getRandomUser() {
	console.log('API calling....');
	const resp = await fetch('https://randomuser.me/api/');
	const data = await resp.json();
	console.log('Data is fetched');

	return data;
}

module.exports = getRandomUser;
