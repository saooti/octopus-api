var octopusSdk = {
	url : "https://api.dev2.saooti.org/",
	commentsUrl : "https://comments.dev2.saooti.org/",
	studioUrl: "https://studio.dev2.saooti.org/",
	playerUrl : "https://playerbeta.dev2.saooti.org/",
	speechToTextUrl:'https://speech2text.dev2.saooti.org/',
	recoUrl:'https://reco.dev2.saooti.org/',
	organisationId : undefined,
	oAuthParam: undefined,
	rubriqueIdFilter: undefined
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
		if(initObject.commentsUrl){
			octopusSdk.commentsUrl = initObject.commentsUrl;
		}
		if(initObject.studioUrl){
			octopusSdk.studioUrl = initObject.studioUrl;
		}
		if(initObject.playerUrl){
			octopusSdk.playerUrl = initObject.playerUrl;
		}
		if(initObject.speechToTextUrl){
			octopusSdk.speechToTextUrl = initObject.speechToTextUrl;
		}
		if(initObject.recoUrl){
			octopusSdk.recoUrl = initObject.recoUrl;
		}
		if(initObject.rubriqueIdFilter){
			octopusSdk.rubriqueIdFilter = initObject.rubriqueIdFilter;
		}
		return;
	} else{
		return new Error("Init object must contains an api url");
	}
};

export {
	initialize,
	octopusSdk
}