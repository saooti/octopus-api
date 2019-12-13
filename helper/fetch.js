var getUriSearchParams = function getUriSearchParams(parameters) {
  const keys = Object.keys(parameters);
  const _return = new URLSearchParams();

  keys.forEach(k => {
    if (parameters[k]) {
      _return.append(k, parameters[k]);
    }
  });
  return _return;
};

module.exports = {
	getUriSearchParams: getUriSearchParams,
}
