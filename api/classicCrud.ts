const axios = require('axios');
var fetchDataPublic =  async function fetchDataPublic<Type>(wsPath:string): Promise<Type> {
  const url = init.octopusSdk.url + wsPath;
  const response = await axios.get(url);
  return response.data;
};
export {
	fetchDataPublic
}