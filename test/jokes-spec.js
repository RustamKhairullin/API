const jokesApi = require('../api/random-api');
const { expect, assert } = require('chai');
const should = require('chai').should();


describe('Chuck Norries', async function() {
    it('should get a random joke', async function() {
        const joke1 = await jokesApi.getRandomJoke();
        const joke2 = await jokesApi.getRandomJoke();
        
        // Expect
        expect(joke1.data.value).not.to.equal(joke2.data.value);               // Verify that jokes are not the same
        expect(joke1.status).to.equal(200);                                    // Verify status code of joke1
        expect(joke2.status).to.equal(200);                                    // Verify status code of joke2
        expect(joke1.data.url).to.include('https://api.chucknorris.io/jokes'); // Verify joke1 url contains expected base ot the url
        expect(joke2.data.url).to.include('https://api.chucknorris.io/jokes'); // Verify joke2 url contains expected base ot the url

        // Assert
        assert.notEqual(joke1.data.value, joke2.data.value);
        assert.equal(joke1.status, 200);
        assert.equal(joke2.status, 200);
        assert.include(joke1.data.url, 'https://api.chucknorris.io/jokes');
        assert.include(joke2.data.url, 'https://api.chucknorris.io/jokes');

        // Should
        should.not.equal(joke1.data.value, joke2.data.value);
        should.equal(joke1.status, 200);
        should.equal(joke2.status, 200);
        joke1.data.url.should.include('https://api.chucknorris.io/jokes');
        joke2.data.url.should.include('https://api.chucknorris.io/jokes');
    })
})