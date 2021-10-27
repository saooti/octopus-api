import axios from 'axios';
import init from '../helper/init';

var postComment =  async function postComment(comment: any): Promise<any> {
	let uri = init.octopusSdk.commentsUrl + "unregisteredComment";
	const response = await axios.post(uri, comment ,{headers:{'Content-Type': 'application/json; charset=utf-8'} });
	return response.data;
};

var fetchCommentAnswers =  async function fetchCommentAnswers(commentId: number,parameters:any): Promise<any> {
	let uri = init.octopusSdk.commentsUrl + commentId;
	const response = await axios.post(uri, parameters,
		{headers: { 'content-type': 'application/json' }
	  });
  	return response.data;
};

var fetchComments = async function fetchComments(parameters:any): Promise<any> {
	let uri = init.octopusSdk.commentsUrl ;
	const response = await axios.post(uri,  parameters,
		{headers: { 'content-type': 'application/json' }
	  });
  	return response.data;
};
var fetchComment = async function fetchComment(comId: number): Promise<any> {
	let uri = init.octopusSdk.commentsUrl+'comment/'+ comId;
	const response = await axios.get(uri);
  	return response.data;
};

var fetchRootComments = async function fetchRootComments(parameters:any): Promise<any> {
	let uri = init.octopusSdk.commentsUrl + 'getRootCom';
	const response = await axios.post(uri,  parameters,
	{headers: { 'content-type': 'application/json' }
	});
	return response.data;
};

export default {
	postComment:postComment,
	fetchCommentAnswers: fetchCommentAnswers,
	fetchComments: fetchComments,
	fetchRootComments: fetchRootComments,
	fetchComment:fetchComment,
}
 