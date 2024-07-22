async function resolve(specifier, context, defaultResolve) {
  return await defaultResolve(specifier, context, defaultResolve);
}

async function load(moduleUrl, context, defaultLoad) {
  return defaultLoad(moduleUrl, context, defaultLoad);
}

function initialize(data) {
}

module.exports = { resolve, load, initialize };
