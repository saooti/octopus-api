import { Category } from "./class/category";
import { FetchParam } from "./class/fetchParam";
import { CommentPodcast } from "./class/comment";
import { InterfacePageable } from "./class/InterfacePageable";
import { Emission } from "./class/emission";
import { Conference } from "./class/conference";
import { Organisation } from "./class/organisation";
import { Participant } from "./class/participant";
import { Playlist } from "./class/playlist";
import { Podcast } from "./class/podcast";
import { Rubriquage } from "./class/rubriquage";
import { Rubrique } from "./class/rubrique";

export interface ApiStatic {
    fetchCategories(parameters: FetchParam, organisationId?: string): Promise<Array<Category>>;
    postComment(comment: CommentPodcast): Promise<CommentPodcast>;
    fetchCommentAnswers(commentId: number,parameters:FetchParam): Promise<InterfacePageable<CommentPodcast>>;
    fetchComments(parameters:FetchParam): Promise<InterfacePageable<CommentPodcast>>;
    fetchComment(comId: number): Promise<CommentPodcast>;
    fetchRootComments(parameters:FetchParam): Promise<InterfacePageable<CommentPodcast>>;
    fetchEmissions(parameters: FetchParam): Promise<{
        count: number;
        result:Array<Emission>;
        sort: string;}>;
    fetchRSS(emissionId: number|undefined): string;
    fetchEmissionPath(emissionId: number|undefined): string;
    fetchItuneCategory(iabId: string): Promise<string>;
    fetchEmission(emissionId: number|undefined): Promise<Emission>;
    requestLiveDownloadId(podcastId: number | undefined): Promise<string | null>;
    markPlayingLive(podcastId: number | undefined, downloadId: string | null, origin: string, distributorId: any): Promise<string | null>;
    listConferences(organisationId: string, withPodcastId?: boolean,status?:string): Promise<Array<Conference>>;
    getRealConferenceStatus(conferenceId: string) : Promise<string>;
    fetchOrganisations(parameters: FetchParam): Promise<{
        count: number;
        result: Array<Organisation>;
        sort: string;}>;
    fetchOrganisation(productorId: string): Promise<Organisation>;
    liveEnabledOrganisation(productorId: string): Promise<boolean>;
    fetchOrganisationAttributes(productorId: string): Promise<{[key:string]:string}>;
    fetchParticipants(parameters: FetchParam): Promise<{
        count: number;
        result: Array<Participant>;
        sort: string;}>;
    fetchParticipant(participantId: string): Promise<Participant>;
    updatePlayerTime(downloadId: any, seconds:number): Promise<any>;
    fetchPodcastDownloadUrl(url:string): Promise<{location:string, downloadId: number}>;
    fetchCustomPlayer(getPlayerPath:string): Promise<any>;
    fetchPlaylists(parameters: FetchParam): Promise<{
        count: number;
        result: Array<Playlist>;
      sort: string;}>;
    fetchPlaylist(playlistId: string): Promise<Playlist>;
    fetchPlaylistContent(playlistId: string): Promise<Array<Podcast>>;
    fetchPodcast(podcastId: string): Promise<Podcast>;
    fetchPodcasts(parameters: FetchParam, notLive?:boolean):Promise<{
        count: number;
        result: Array<Podcast>;
          sort: string;}>;
    fetchLives(parameters: FetchParam): Promise<{
        count: number;
        result: Array<Podcast>;
        sort: string;}>;
    fetchTopics(organisationId:string|undefined, parameters: FetchParam|undefined): Promise<Array<Rubriquage>>;
    fetchTopic(rubriquageId: number | undefined): Promise<Rubriquage>;
    fetchRubric(rubriqueId: number | undefined): Promise<Rubrique>;
    searchRubrics(parameters: FetchParam|undefined): Promise<Array<Rubrique>>;
    fetchDataPublic<Type>(wsPath:string): Promise<Type>;
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
