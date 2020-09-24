var octopusSdk = {
	url : "https://api.dev2.saooti.org/",
	organisationId : undefined,
	oAuthParam: undefined,
};

var initialize = function initialize(initObject){
	if(initObject.url){
		octopusSdk.url = initObject.url;
		if(initObject.oAuthParam){
			octopusSdk.oAuthParam = initObject.oAuthParam;
		}
		if(initObject.organisationId){
			octopusSdk.organisationId = initObject.organisationId;
		}
		return;
	} else{
		return new Error("Init object must contains an api url");
	}
};

module.exports = {
	initialize: initialize,
	octopusSdk: octopusSdk
}