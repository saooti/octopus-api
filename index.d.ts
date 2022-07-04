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

import { ModuleApi } from "./class/moduleApi";
import { Parameters } from "./class/parameters";

export interface ApiStatic {
    fetchData<Type>(moduleName:ModuleApi, wsPath:string): Promise<Type>;
	fetchDataPublic<Type>(moduleName:ModuleApi, wsPath:string): Promise<Type>;
    fetchDataWithParams<Type>(moduleName: ModuleApi, wsPath:string, parameters: Parameters, specialTreatement?:boolean): Promise<Type>
    fetchDataPublicWithParams<Type>(moduleName: ModuleApi, wsPath:string, parameters: Parameters): Promise<Type>;
    postDataPublic<Type>(moduleName: ModuleApi,wsPath:string, elementToPost: unknown): Promise<Type>;
    putDataPublic<Type>(moduleName: ModuleApi,wsPath:string, elementToPost: unknown): Promise<Type>;
    
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
