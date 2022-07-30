const devConf = require('./dev.json');
const prodConf = require('./prod.json');

const runtimeConf = process.env.NODE_ENV === 'development' ? devConf : prodConf;

module.exports = runtimeConf;
