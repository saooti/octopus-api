export interface ApiStatic {
    fetchCategories(parameters: any): Promise<any>;
    fetchCategoriesOrga(organisationId: string, parameters: any): Promise<any>;
    postComment(comment: any): Promise<any>;
    fetchCommentAnswers(commentId: number,parameters:any): Promise<any>;
    fetchComments(parameters:any): Promise<any>;
    fetchComment(comId: number): Promise<any>;
    fetchRootComments(parameters:any): Promise<any>;
    fetchEmissions(parameters:any): Promise<any>;
    fetchRSS(emissionId: number|undefined): string;
    fetchEmissionPath(emissionId: number|undefined): string;
    fetchItuneCategory(iabId: string): Promise<any>;
    fetchEmission(emissionId: number|undefined): Promise<any>;
    requestLiveDownloadId(podcastId: any): Promise<any>;
    markPlayingLive(podcastId: any, downloadId: any, origin: any, distributorId: any): Promise<any>;
    listConferences(organisationId: string, withPodcastId:boolean,status:any): Promise<any>;
    getRealConferenceStatus(conferenceId: any) : Promise<any>;
    fetchOrganisations(parameters: any): Promise<any>;
    fetchOrganisation(productorId: string): Promise<any>;
    liveEnabledOrganisation(productorId: string): Promise<any>;
    fetchOrganisationAttributes(productorId: string): Promise<any>;
    fetchParticipants(parameters: any): Promise<any>;
    fetchParticipant(participantId: any): Promise<any>;
    updatePlayerTime(downloadId: any, seconds:number): Promise<any>;
    fetchCustomPlayer(getPlayerPath:string): Promise<any>;
    fetchPlaylists(parameters: any): Promise<any>;
    fetchPlaylist(playlistId: any): Promise<any>;
    fetchPlaylistContent(playlistId: any): Promise<any>;
    fetchPodcast(podcastId: any): Promise<any>;
    fetchPodcasts(parameters: any): Promise<any>;
    fetchLives(parameters: any): Promise<any>;
    fetchTopics(organisationId:string|undefined, parameters: any): Promise<any>;
    fetchTopic(rubriquageId: any): Promise<any>;
    fetchRubric(rubriqueId: any): Promise<any>;
    searchRubrics(parameters: any): Promise<any>;
    octopusSdk:{
        url : string,
        commentsUrl : string,
        studioUrl: string,
        playerUrl : string,
        organisationId : any,
        oAuthParam: any,
    };
    initialize(initObject: any): void;
}
declare const api: ApiStatic;
export default api;
