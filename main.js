const path = require('path');
const url = require('url');

function registerESMLoader() {
  require('node:module').register(url.pathToFileURL(require.resolve('./loader')), {
    parentURL: url.pathToFileURL(__filename),
  });
}

registerESMLoader();

const fn = require(path.join(__dirname, 'テスト_example.spec.js'));
fn();
