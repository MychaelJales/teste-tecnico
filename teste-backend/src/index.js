const app = require('./app');

const server = app.listen(3000, () => console.log('ouvindo porta 3000!'));

module.exports = server;
