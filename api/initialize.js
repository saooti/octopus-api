const axios = require('axios');

var fetchInitState = function fetchInitState() {
  return new Promise((resolve, reject) => {
    axios.get('/api/init').then(
      function(data) {
        if (data.status === 200) {
          resolve(data.data);
        } else {
          reject(
            'Error while fetching authentication, wrong status code ' +
              data.status +
              ' : ' +
              data.data
          );
        }
      },
      function(error) {
        reject('Error while fetching authentication : ' + error.message);
      }
    );
  });
};

module.exports = {
	fetchInitState: fetchInitState,
}
