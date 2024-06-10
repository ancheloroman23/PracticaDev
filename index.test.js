// hello.test.js
const sayHello = require('./index');

test('debería retornar Hola Mundo', () => {
    expect(sayHello()).toBe('Hola Mundo');
});