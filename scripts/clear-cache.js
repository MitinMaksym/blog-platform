const path = require('path');
const fs = require('fs');

const cacheDirPath = path.resolve(__dirname, '..', 'node_modules', '.cache');
fs.rmdir(cacheDirPath, {recursive: true}, () => {
    console.log('Cache directory was deleted');
});
