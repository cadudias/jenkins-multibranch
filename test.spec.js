var HelloWorld = require('./test');

describe('Hello World', function() {
    var helloWorld = new HelloWorld();

    it('should say hello world', function() {
        expect(helloWorld.hello('')).toEqual('Hello, world!');
    });
});