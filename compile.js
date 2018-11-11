// Compile .sol files in ./contracts

const path = require('path')
const fs = require('fs')
const solc = require('solc')

const inboxPath = path.resolve(__dirname, 'newEpoch.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

const compiled = solc.compile(source, 1).contracts[':newEpoch'].bytecode;
console.log(compiled);
