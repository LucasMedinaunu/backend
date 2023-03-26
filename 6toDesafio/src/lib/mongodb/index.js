const connectToDatabase = require('./cfg/mongodb');
const dataConfig = require('./cfg/params.cfg');
const reusableSchemaMethods = require('./cfg/reusableSchemaMethods');

module.exports = { connectToDatabase, dataConfig, reusableSchemaMethods };