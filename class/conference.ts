export interface Conference{
  album?: string;
  artist?: string;
  conferenceId: number;
  conferenceUrlIdentifier?: string;
  date?: string;
  debriefingDate?: string;
  deletionAttempts?: number;
  directCode?: string;
  hostname?: string;
  jingleDuration?: number;
  jingleFilePath?: string;
  jingleId?: number;
  mediaId?: number;
  organisationId?: string;
  participants?: Array<{
      conferenceGuestId: number,
      fullName: string,
      keycloakId:string,
      kind: string,
      sipIdentifier:string}>;
  phone?: string;
  podcastId?: number;
  prefix?: {[key:string]:string};
  queueCode?: string;
  recordDate?: string;
  recordingPort?: number;
  status?: string;
  title: string;
  token?: string;
  orderStatus?:number;
  websocket?: string;
  interval?: ReturnType<typeof setTimeout>;
  duration?:number;
}
