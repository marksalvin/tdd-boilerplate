const test = require('ava');

test('that my function works', assert => {
    const target = require('../../src');

    const data = {};

    const expectedResult = {};

    const result = target(data);

    assert.deepEqual(result, expectedResult);
});
