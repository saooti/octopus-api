import { AdserverConfig } from "./adserverConfig";
export interface Category {
  id: number;
  name: string;
  podcastCount?: number;
  podcastOrganisationCount?: number;
  rtbId?: string;
  adConfig?: AdserverConfig;
  orgaAdConfigs?: {[key:string]: AdserverConfig};
}
