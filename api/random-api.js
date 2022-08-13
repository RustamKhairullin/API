const Client = require('./api-client');

class Random {
    async getRandomJoke(token) {
        const response = await Client.get('jokes/random', token);
        
        return response;
    }
}
module.exports = new Random();