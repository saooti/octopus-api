import { CommentPodcast } from "../class/comment";
import { FetchParam } from "../class/fetchParam";
import { InterfacePageable } from "../class/InterfacePageable";

const axios = require('axios');
const fetchHelper = require('../helper/fetch');
const init = require('../helper/init');

var postComment =  async function postComment(comment: CommentPodcast): Promise<CommentPodcast> {
	let uri = init.octopusSdk.commentsUrl + "unregisteredComment";
	const response = await axios.post(uri, comment ,{headers:{'Content-Type': 'application/json; charset=utf-8'} });
	return response.data;
};

var fetchCommentAnswers =  async function fetchCommentAnswers(commentId: number,parameters:FetchParam): Promise<InterfacePageable<CommentPodcast>> {
	let uri = init.octopusSdk.commentsUrl + commentId;
	const response = await axios.post(uri, parameters,
		{headers: { 'content-type': 'application/json' }
	  });
  	return response.data;
};

var fetchComments = async function fetchComments(parameters:FetchParam): Promise<InterfacePageable<CommentPodcast>> {
	let uri = init.octopusSdk.commentsUrl ;
	const response = await axios.post(uri,  parameters,
		{headers: { 'content-type': 'application/json' }
	  });
  	return response.data;
};
var fetchComment = async function fetchComment(comId: number): Promise<CommentPodcast> {
	const header = await fetchHelper.createAuthenticatedFetchHeader();
	let uri = init.octopusSdk.commentsUrl+'comment/'+ comId;
	const response = await axios.get(uri, {
		headers: { 'Content-Type': 'application/json; charset=utf-8', ...header },
	  });
  	return response.data;
};

var fetchRootComments = async function fetchRootComments(parameters:FetchParam): Promise<InterfacePageable<CommentPodcast>> {
	let uri = init.octopusSdk.commentsUrl + 'getRootCom';
	const response = await axios.post(uri,  parameters,
	{headers: { 'content-type': 'application/json' }
	});
	return response.data;
};

export {
	postComment,
	fetchCommentAnswers,
	fetchComments,
	fetchRootComments,
	fetchComment,
}
 